import './index.scss'
// Utils
import { createNamespace, addUnit } from '../../utils/common';
import { inherit } from '../../utils/functional';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';

export type LoadingType = 'circular' | 'spinner';

export type LoadingProps = {
  type: LoadingType;
  size?: string | number;
  color: string;
  vertical?: boolean;
  textSize?: string | number;
  textColor?: string;
  iconUrl?: string;
};


const [createComponent, bem] = createNamespace('local-loading');

function LoadingIcon(h: CreateElement, props: LoadingProps) {
  if (props.type === 'spinner') {
    const Spin: any[] = [];
    for (let i = 0; i < 12; i++) {
      Spin.push(<i />);
    }
    return Spin;
  }
  // https://img13.360buyimg.com/imagetools/jfs/t1/199848/8/30409/2256/63bfae66F4a654f11/f5e7a940bbf3fc18.png

  // return (
  //   // viewBox是HTML中SVG元素的属性。它用于缩放SVG元素，这意味着我们可以设置坐标以及宽度和高度。
  //   // min-x:用于设置水平轴。它用于使SVG在水平轴(即左和右)上移动。
  //   // min-y:用于设置垂直轴。它用于使SVG在垂直轴(即上下)上移动。
  //   // width:用于设置视图框的宽度。
  //   // height:用于设置视图框的高度。
  //   <svg class={bem('circular')} viewBox="0 0 50 50">
  //     {/* cx 和 cy 属性定义圆点的 x 和 y 坐标。如果省略 cx 和 cy，圆的中心会被设置为 (0, 0) */}
  //     {/* r 属性定义圆的半径。 */}
  //     <circle cx="25" cy="25" r="22" fill="none" />
  //   </svg>
  // );

  return (
    <img src={props.iconUrl} width="100%" height="100%" />
  )
}

function LoadingText(
  h: CreateElement,
  props: LoadingProps,
  slots: DefaultSlots
) {
  if (slots.default) {
    const style = {
      fontSize: addUnit(props.textSize),
      color: props.textColor ?? props.color,
    };

    return (
      <span class={bem('text')} style={style}>
        {slots.default()}
      </span>
    );
  }
}

function Loading(
  h: CreateElement,
  props: LoadingProps,
  slots: DefaultSlots,
  ctx: RenderContext<LoadingProps>
) {
  const { color, size, type } = props;

  const style: { [key: string]: string } = { color };
  if (size) {
    const iconSize = addUnit(size) as string;
    style.width = iconSize;
    style.height = iconSize;
  }

  return (
    <div
      class={bem([type, { vertical: props.vertical }])}
      {...inherit(ctx, true)}
    >
      <span class={bem('spinner', type)} style={style}>
        {LoadingIcon(h, props)}
      </span>
      {LoadingText(h, props, slots)}
    </div>
  );
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  textColor: String,
  type: {
    type: String,
    default: 'circular',
  },
  iconUrl: {
    type: String,
    default: 'https://img13.360buyimg.com/imagetools/jfs/t1/199848/8/30409/2256/63bfae66F4a654f11/f5e7a940bbf3fc18.png',
  }
};

export default createComponent<LoadingProps>(Loading);
