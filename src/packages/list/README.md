# list组件

## 引入

```javascript
import Vue from 'vue'

import List  from '@ueip/gear-vue/lib/list'
import '@ueip/gear-vue/lib/list/index.css'
import ListItem  from '@ueip/gear-vue/lib/list-item'
import '@ueip/gear-vue/lib/list-item/index.css'
Vue.use(List)
Vue.use(ListItem )

// joyer
import  {List,ListItem}  from '@@ueip-gear-vue/master/index';
```

## vue用法

```javascript

<template>
  <div class="page-list">
    <gear-list title="不带icon单行条目">
      <gear-list-item title="主标题文案" @onClick="itemClick"></gear-list-item>
      <gear-list-item title="主标题文案" arrow @onClick="itemClick" value="标准副文案" @value-click="rightClick">
        <p slot="title" class="title">
          <img style="width: 12px; height: 14px; margin-right: 5px" src="http://img10.360buyimg.com/uba/jfs/t1/31499/29/10099/749/5cad8f09E4d7b31d6/f77573baa5207397.png" />京东集团总部
        </p>
      </gear-list-item>
      <gear-list-item title="主标题文案" value="标准副文案" arrow @onClick="itemClick"></gear-list-item>
      <gear-list-item title="主标题文案" value="副文案自定义" arrow @onClick="itemClick">
        <p slot="value" style="color: #508cee; font-size: 16px">自定义颜色字体</p>
      </gear-list-item>
    </gear-list>
    <gear-list title="带icon单行条目">
      <gear-list-item title="主标题文案" value="标准副文案" arrow @onClick="itemClick">
        <img
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
          alt=""
        />
      </gear-list-item>
      <gear-list-item title="主标题文案" arrow @onClick="itemClick">
        <img
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
          alt=""
        />
        <p slot="value" style="color: red">388,888.00</p>
      </gear-list-item>
    </gear-list>
    <gear-list title="带icon两行条目">
      <gear-list-item title="主标题文案" desc="描述说明文案" @onClick="itemClick">
        <img
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
          alt=""
        />
      </gear-list-item>
      <gear-list-item title="主标题文案" desc="描述说明文案" @onClick="itemClick">
        <template slot="icon">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
            alt=""
          />
        </template>

        <template slot="value">
          <gear-button type="white-normal" size="small" @click="handlerClick"> 线框(小) </gear-button>
        </template>
      </gear-list-item>
      <gear-list-item title="主标题文案" desc="描述说明文案" arrow value="副文案" @onClick="itemClick">
        <img
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
          alt=""
        />
      </gear-list-item>
      <gear-list-item title="主标题文案" arrow @onClick="itemClick">
        <img
          slot="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
          alt=""
        />
        <p slot="desc" class="desc" style="color: #333; font-size: 12px">自定义字体颜色</p>
      </gear-list-item>
    </gear-list>
    <gear-list title="不可点击状态">
      <gear-list-item title="主标题文案" desc="描述说明文案" value="不可选状态" disabled @onClick="itemClick"></gear-list-item>
      <gear-list-item title="主标题文案" value="不可选状态" disabled @onClick="itemClick"></gear-list-item>
      <gear-list-item title="主标题文案" value="带箭头不可选状态" arrow disabled @onClick="itemClick"></gear-list-item>
    </gear-list>
  </div>
</template>
<script>
export default {
  name: 'demo-list',
  data() {
    return {
      headerTitle: 'List'
    }
  },
  components: {},
  methods: {
    itemClick: function () {
      console.log('可点击item，处理点击事件')
    },
    rightClick() {
      console.log(1)
    },
    handlerClick: function () {
      this.$toast('测试按钮点击')
    }
  }
}
</script>


```

## Props(List)

| 字段    | 说明   | 类型     | 默认值  | 是否必要 |
| ----- | ---- | ------ | ---- | ---- |
| title | 列表标题 | string | 空字符串 | 否    |

## Props(ListItem)

| 字段       | 说明                    | 类型             | 默认值   | 是否必要 |
| -------- | --------------------- | -------------- | ----- | ---- |
| arrow    | 是否展示列表元素右侧箭头          | Boolean        | false | 否    |
| title    | 列表元素主标题文案             | String         | 空字符串  | 否    |
| value    | 列表元素副标题文案             | String\|number | 空字符串  | 否    |
| desc     | 列表元素描述文案              | String         | 空字符串  | 否    |
| disabled | 列表元素是否禁用              | Boolean        | false | 否    |
| border   | 列表元素边框位置（top\|bottom） | String         | top   | 否    |

## Events(ListItem)

| 事件名        | 说明              | 回调参数 |
| ---------- | --------------- | ---- |
| itemClick  | 列表元素点击事件回调      | 无参数  |
| rightClick | 列表元素右侧副标题那块点击回调 | 无参数  |