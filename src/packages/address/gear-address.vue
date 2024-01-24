<template>
  <gear-free-popup class="gearaddress" v-model="popShow" position="bottom" :lockScroll="false" :round="true">
    <div class="gearaddress-box">
      <gear-popup-header :main-title="mainTitle" @close-header="popShow = false"></gear-popup-header>
      <div class="gearaddress-main">
        <ul class="gearaddress-chosen">
          <li v-for="(item, index) in selectData" :key="index" @click="clickTab(item, index)" :class="{ 'gearaddress-tab-active': index === current }">{{ item.name }}</li>
        </ul>
        <div class="gearaddress-chose-area" :style="gearaddressChoseArea">
          <gear-cell
            :options="item"
            v-model="selectArray[index]"
            :select-field="selectField"
            @select-item="selectValue"
            :auto-close="false"
            v-for="(item, index) in myData"
            :key="index"
            :class="[index === current ? 'gearaddress-area-active' : '', 'gearaddress-cell-item']"
          >
            <template slot-scope="{ slotProps }">
              <p class="gearaddress-item-text">{{ slotProps.name }}</p>
            </template>
          </gear-cell>
        </div>
      </div>
    </div>
  </gear-free-popup>
</template>
<script>
import GearFreePopup from '../free-popup/index';
import GearPopupHeader from '../popup-header/index';
import GearCell from '../cell/index';
import axios from 'axios';
export default {
  name: 'GearAddress',
  props: {
    mainTitle: {
      type: String,
      default: '请选择地址'
    },
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: function () {
        return [];
      }
    },
    value: {
      type: Array,
      default: function () {
        return [];
      }
    },
    selectField: {
      type: String,
      default: 'code'
    },
    queryUrl: {
      required: true,
      type: String,
      default: ''
    },
    otherParam: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  components: {
    GearFreePopup,
    GearPopupHeader,
    GearCell
  },
  data() {
    return {
      activeTab: 0,
      currentData: [],
      myData: [],
      current: 0,
      selectArray: [...this.value],
      selectData: [{ name: '请选择' }],
      popShow: this.visible
    };
  },
  created() {
    axios
      .get(this.queryUrl, {
        params: {
          reqData: Object.assign(
            {
              type: 'area',
              parentCode: ''
            },
            this.otherParam
          )
        }
      })
      .then(response => {
        const resData = response.data.resultData.data;
        this.myData.splice(0, 1, resData || []);
        if (this.value[0]) {
          for (let i = 0; i < resData.length; i++) {
            const element = resData[i];
            if (element[this.selectField] === this.value[0]) {
              this.selectData[0] = element;
              break;
            }
          }
        }
      });
    if (this.value.length > 1) {
      for (let index = 0; index < this.value.length - 1; index++) {
        axios
          .get(this.queryUrl, {
            params: {
              reqData: Object.assign(
                {
                  type: 'area',
                  parentCode: this.value[index]
                },
                this.otherParam
              )
            }
          })
          .then(response => {
            const resData = response.data.resultData.data;
            this.myData[index + 1] = resData;
            for (let i = 0; i < resData.length; i++) {
              const element = resData[i];
              if (element[this.selectField] === this.value[index + 1]) {
                this.selectData[index + 1] = element;
                break;
              }
            }
          });
      }
    }
    // }
  },
  computed: {
    gearaddressChoseArea() {
      return `transform: translateX(-${this.current * 100}%); height: calc(100% - 44px);`;
    }
  },
  watch: {
    popShow(val) {
      this.$emit('update:visible', val);
    },
    visible(val) {
      this.popShow = val;
    }
  },
  methods: {
    clickTab(item, index) {
      this.current = index;
    },
    selectValue(val) {
      this.$emit('select-item', val, this.current);
      axios
        .get(this.queryUrl, {
          params: {
            reqData: Object.assign(
              {
                type: 'area',
                parentCode: val[this.selectField]
              },
              this.otherParam
            )
          }
        })
        .then(response => {
          const _this = this;
          const resData = response.data.resultData.data;

          if (resData && resData.length) {
            this.myData.splice(this.current + 1, this.myData.length - this.current, resData);
            this.selectData.splice(this.current, this.selectData.length - this.current, val, { name: '请选择' });
            this.selectArray.splice(this.current, this.selectArray.length - this.current, val[this.selectField]);
            this.current++;
            //   this.selectArray.splice(this.current, this.selectArray.length-this.current, val.id);
            //  this.selectData.splice(this.current, 1, val);
          } else {
            this.selectData.splice(this.current, 1, val);
            this.selectArray.splice(this.current, 1, val[this.selectField]);
            this.$emit('select-change', [...this.selectData]);
            this.$emit('input', [...this.selectArray]);
            setTimeout(function () {
              _this.popShow = false;
            }, 300);
          }
        });
    }
  }
};
</script>
