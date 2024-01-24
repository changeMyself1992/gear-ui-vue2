import './index.scss';
// Utils
import {
  createNamespace, addUnit, noop, isPromise, isDef 
} from '../../utils/common';
import {
  toArray, readFile, isOversize, isImageFile 
} from './utils';

// Mixins
import { FieldMixin } from '../../mixins/field';

// Components
import Image from '../image/index';
import LocalLoading from '../local-loading';
import ImagePreview from '../image-preview';

const [createComponent, bem] = createNamespace('uploader');

export default createComponent({
  inheritAttrs: false,

  mixins: [FieldMixin],

  model: {
    prop: 'fileList'
  },

  props: {
    disabled: Boolean,
    readonly: Boolean,
    uploadText: {
      type: String,
      default: '上传图片'
    },
    // certificatePortrait  证件人像模式  certificateEmblem 证件国徽模式  other其他模式
    uploadMode: {
      type: String,
      default: 'other'
    },
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: {
      type: Object,
      default: () => ({
        width: null,
        height: null
      })
    },
    previewOptions: Object,
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: () => []
    },
    maxSize: {
      type: [Number, String, Function],
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    deletable: {
      type: Boolean,
      default: true
    },
    showUpload: {
      type: Boolean,
      default: true
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },

  computed: {
    previewSizeWithUnit() {
      return {
        width: addUnit(this.previewSize.width),
        height: addUnit(this.previewSize.height)
      };
    },

    // for form
    value() {
      return this.fileList;
    }
  },

  created() {
    this.urls = [];
  },

  beforeDestroy() {
    this.urls.forEach(url => URL.revokeObjectURL(url));
  },

  methods: {
    getDetail(index = this.fileList.length) {
      return {
        name: this.name,
        index
      };
    },

    onChange(event) {
      let { files } = event.target;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        const response = this.beforeRead(files, this.getDetail());

        if (!response) {
          this.resetInput();
          return;
        }

        if (isPromise(response)) {
          response
            .then(data => {
              if (data) {
                this.readFile(data);
              } else {
                this.readFile(files);
              }
            })
            .catch(this.resetInput);

          return;
        }
      }

      this.readFile(files);
    },

    readFile(files) {
      const oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        const maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(file => readFile(file, this.resultType))).then(
          contents => {
            const fileList = files.map((file, index) => {
              const result = { file, status: '', message: '' };

              if (contents[index]) {
                result.content = contents[index];
              }

              return result;
            });

            this.onAfterRead(fileList, oversize);
          }
        );
      } else {
        readFile(files, this.resultType).then(content => {
          const result = { file: files, status: '', message: '' };

          if (content) {
            result.content = content;
          }

          this.onAfterRead(result, oversize);
        });
      }
    },

    onAfterRead(files, oversize) {
      this.resetInput();

      let validFiles = files;

      if (oversize) {
        let oversizeFiles = files;
        if (Array.isArray(files)) {
          oversizeFiles = [];
          validFiles = [];
          files.forEach(item => {
            if (item.file) {
              if (isOversize(item.file, this.maxSize)) {
                oversizeFiles.push(item);
              } else {
                validFiles.push(item);
              }
            }
          });
        } else {
          validFiles = null;
        }
        this.$emit('oversize', oversizeFiles, this.getDetail());
      }

      const isValidFiles = Array.isArray(validFiles)
        ? Boolean(validFiles.length)
        : Boolean(validFiles);

      if (isValidFiles) {
        this.$emit('input', [...this.fileList, ...toArray(validFiles)]);

        if (this.afterRead) {
          this.afterRead(validFiles, this.getDetail());
        }
      }
    },

    onDelete(file, index) {
      let beforeDelete = null;
      if (file.beforeDelete) beforeDelete = file.beforeDelete;
      else beforeDelete = this.beforeDelete;

      if (beforeDelete) {
        const response = beforeDelete(file, this.getDetail(index));

        if (!response) {
          return;
        }

        if (isPromise(response)) {
          response
            .then(() => {
              this.deleteFile(file, index);
            })
            .catch(noop);
          return;
        }
      }

      this.deleteFile(file, index);
    },

    deleteFile(file, index) {
      const fileList = this.fileList.slice(0);
      fileList.splice(index, 1);

      this.$emit('input', fileList);
      this.$emit('delete', file, this.getDetail(index));
    },

    resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },

    onClickUpload(event) {
      this.$emit('click-upload', event);
    },

    onPreviewImage(item) {
      if (!this.previewFullImage) {
        return;
      }
      const imageFiles = this.fileList.filter(item1 => isImageFile(item1));
      const imageContents = imageFiles.map(item2 => {
        if (item2.file && !item2.url && item2.status !== 'failed') {
          item2.url = URL.createObjectURL(item2.file);
          this.urls.push(item2.url);
        }
        return item.url;
      });
      this.imagePreview = ImagePreview({
        images: imageContents,
        startPosition: imageFiles.indexOf(item),
        onClose: () => {
          this.$emit('close-preview');
        },
        ...this.previewOptions
      });
    },

    // @exposed-api
    closeImagePreview() {
      if (this.imagePreview) {
        this.imagePreview.close();
      }
    },

    // @exposed-api
    chooseFile() {
      if (this.disabled) {
        return;
      }
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.click();
      }
    },

    genPreviewMask(item) {
      const { status, message } = item;

      if (status === 'uploading' || status === 'failed') {
        const MaskIcon = status === 'failed' ? (
          <i class={[bem('mask-icon'), 'iconfont', 'icon-close-circle']} />
        ) : (
          <LocalLoading class={bem('loading')} />
        );

        const showMessage = isDef(message) && message !== '';

        return (
          <div class={bem('mask')}>
            {MaskIcon}
            {showMessage && <div class={bem('mask-message')}>{message}</div>}
          </div>
        );
      }
    },

    genPreviewItem(item, index) {
      const deleteAble = item.deletable ? item.deletable : this.deletable;
      const showDelete = item.status !== 'uploading' && deleteAble;

      const DeleteIcon = showDelete && (
        this.uploadMode === 'other'
          ? <div
            class={bem('preview-delete')}
            onClick={event => {
              event.stopPropagation();
              this.onDelete(item, index);
            }}
          >
            <img class={[bem('preview-delete-img')]} src="https://img14.360buyimg.com/imagetools/jfs/t1/220194/9/24810/323/63c65cbfF9d1f0017/0c4d7d7717ffdb4e.png"></img>
          </div>
          : <div
            class={bem('preview-change')}
            onClick={event => {
              event.stopPropagation();
              this.onDelete(item, index);
              this.$nextTick(() => {
                this.$refs.input && this.$refs.input.click();
              });
            }}>更换图片</div>
      );

      const PreviewCoverContent = this.slots('preview-cover', {
        index,
        ...item
      });

      const PreviewCover = PreviewCoverContent && (
        <div class={bem('preview-cover')}>{PreviewCoverContent}</div>
      );
      const imageFit = item.imageFit ? item.imageFit : this.imageFit;

      const Preview = isImageFile(item) ? (
        <Image
          fit={imageFit}
          src={item.content || item.url}
          class={bem('preview-image')}
          width={this.previewSizeWithUnit.width || ''}
          height={this.previewSizeWithUnit.height || ''}
          backgroundColor="#f9f9f9"
          onClick={() => {
            this.onPreviewImage(item);
          }}
        >
          {PreviewCover}
        </Image>
      ) : (
        <div
          class={bem('file')}
          style={{
            width: this.previewSizeWithUnit || '',
            height: this.previewSizeWithUnit || ''
          }}
        >
          <i class={[bem('file-icon'), 'iconfont', 'icon-description']} />
          <div class={[bem('file-name'), 'gear-ellipsis']}>
            {item.file ? item.file.name : item.url}
          </div>
          {PreviewCover}
        </div>
      );

      return (
        <div
          class={bem('preview')}
          onClick={() => {
            this.$emit('click-preview', item, this.getDetail(index));
          }}
        >
          {Preview}
          {this.genPreviewMask(item)}
          {DeleteIcon}
        </div>
      );
    },

    genPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.genPreviewItem);
      }
    },

    genUpload() {
      if (this.fileList.length >= this.maxCount) {
        return;
      }

      const slot = this.slots();

      const Input = this.readonly ? null : (
        <input
          {...{ attrs: this.$attrs }}
          ref="input"
          type="file"
          accept={this.accept}
          class={bem('input')}
          disabled={this.disabled}
          onChange={this.onChange}
        />
      );

      if (slot && this.uploadMode === 'other') {
        return (
          <div
            class={bem('input-wrapper')}
            key="input-wrapper"
            onClick={this.onClickUpload}
          >
            {slot}
            {Input}
          </div>
        );
      }

      let style = {};
      if (this.previewSizeWithUnit.width && this.previewSizeWithUnit.height) {
        style = {
          width: this.previewSizeWithUnit.width,
          height: this.previewSizeWithUnit.height
        };
      }

      const certificateLayout = () => [0, 1].map(index => {
        if (index === 0) {
          return (<img class={[bem('upload-certificate')]} src={this.uploadMode === 'certificatePortrait'
            ? 'https://img11.360buyimg.com/imagetools/jfs/t1/83708/38/23899/157030/63abaed7F54e94d8e/5c6d8916994a7cd4.png'
            : 'https://img12.360buyimg.com/imagetools/jfs/t1/215248/33/24490/171676/63abaed7Fd04664e2/0f4df78607b98424.png'} />);
        } else if (index === 1) {
          return (
            <div class={[bem('upload-slot')]}>{slot}</div>
          );
        }

        return null;
      });

      const otherLayout = () => [0, 1].map(index => {
        if (index === 0) {
          return (<i class={[bem('upload-icon'), 'iconfont', 'icon-uploader1']} />);
        } else if (index === 1) {
          return (
            this.uploadText && (
              <span class={bem('upload-text')}>{this.uploadText}</span>
            )
          );
        }

        return null;
      });

      return (
        <div
          v-show={this.showUpload}
          class={bem('upload', { readonly: this.readonly, certificate: this.uploadMode === 'certificatePortrait' || this.uploadMode === 'certificateEmblem' })}
          style={style}
          onClick={this.onClickUpload}
        >
          {this.uploadMode === 'other' ? otherLayout() : certificateLayout()}
          {Input}
        </div>
      );
    }
  },

  render() {
    return (
      <div class={bem()}>
        <div class={bem('wrapper', { disabled: this.disabled })}>
          {this.genPreviewList()}
          {this.genUpload()}
        </div>
      </div>
    );
  }
});
