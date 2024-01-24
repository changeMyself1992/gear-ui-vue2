// import { version } from '../package.json'
import PullRefresh from './packages/pull-refresh/index.js'
import Loading from './packages/loading/index.js'
import SlideLoad from './packages/slide-load/index.js'
import Empty from './packages/empty/index.js'
import Image from './packages/image/index.js'
import ImageCompress from './packages/image-compress/index.js'
import Mask from './packages/mask/index.js'
import Overlay from './packages/overlay/index'
import List from './packages/list/index.js'
import ListItem from './packages/list-item/index.js'
import Popup from './packages/popup/index.js'
import PopupHeader from './packages/popup-header/index.js'
import FreePopup from './packages/free-popup/index.js'
import Button from './packages/button/index.js'
import Cell from './packages/cell/index.js'
import Dialog from './packages/dialog/index.js'
import Address from './packages/address/index.js'
import Notice from './packages/notice/index.js'
import FloorNotice from './packages/floor-notice/index.js'
import Field from './packages/field/index.js'
import Input from './packages/input/index.js'
import Select from './packages/select/index.js'
import DateSelecter from './packages/dates-selecter/index.js'
import Textarea from './packages/textarea/index.js'
import Switch from './packages/switch/index.js'
import Toast from './packages/toast/index.js'
import Tabs from './packages/tabs/index.js'
import Tab from './packages/tab/index.js'
import Swipe from './packages/swipe/index.js'
import SwipeItem from './packages/swipe-item/index.js'
import Richtext from './packages/richtext/index.js'
import Radio from './packages/radio/index.js'
import Amount from './packages/amount/index.js'
import Footer from './packages/footer/index.js'
import BullyScreenIcon from './packages/bully-screen-icon/index.js'
import Badge from './packages/badge/index.js'
import Tag from './packages/tag/index.js'
import ScrollView from './packages/scroll-view/index.js'
import CountDown from './packages/countdown/index.js'
import SearchBox from './packages/searchbox/index.js'
import SearchBar from './packages/searchbar/index.js'
import IndexBar from './packages/index-bar/index.js'
import IndexAnchor from './packages/index-anchor/index.js'
import Steps from './packages/steps/index.js'
import Step from './packages/step/index.js'
import Paragraph from './packages/paragraph/index.js'
import Checkbox from './packages/checkbox/index.js'
import TabBar from './packages/tab-bar/index.js'
import Uploader from './packages/uploader/index.js'
import LocalLoading from './packages/local-loading/index'
import Grid from './packages/grid/index'
import GridItem from './packages/grid-item/index'
import DropdownMenu from './packages/dropdown-menu/index'
import DropdownItem from './packages/dropdown-item/index'
import DetailPage from './packages/detail-page/index'
import Popover from './packages/popover/index.js'


const components = [
  PullRefresh,
  Loading,
  SlideLoad,
  Empty,
  Image,
  ImageCompress,
  Mask,
  Overlay,
  List,
  ListItem,
  Popup,
  PopupHeader,
  FreePopup,
  Button,
  Cell,
  Dialog,
  Address,
  Notice,
  FloorNotice,
  Field,
  Input,
  Select,
  DateSelecter,
  Textarea,
  Switch,
  Toast,
  Tabs,
  Tab,
  Swipe,
  SwipeItem,
  Richtext,
  Radio,
  Amount,
  Footer,
  BullyScreenIcon,
  Badge,
  Tag,
  ScrollView,
  CountDown,
  SearchBox,
  SearchBar,
  IndexBar,
  IndexAnchor,
  Steps,
  Step,
  Paragraph,
  Checkbox,
  TabBar,
  Uploader,
  LocalLoading,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
  DetailPage,
  Popover
]

const install = (Vue, opts = {}) => {
  components.forEach((component) => {
    component.install(Vue)
  })
}

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export {
  PullRefresh,
  Loading,
  SlideLoad,
  Empty,
  Image,
  ImageCompress,
  Mask,
  Overlay,
  List,
  ListItem,
  Popup,
  PopupHeader,
  FreePopup,
  Button,
  Cell,
  Dialog,
  Address,
  Notice,
  FloorNotice,
  Field,
  Input,
  Select,
  DateSelecter,
  Textarea,
  Switch,
  Toast,
  Tabs,
  Tab,
  Swipe,
  SwipeItem,
  Richtext,
  Radio,
  Amount,
  Footer,
  BullyScreenIcon,
  Badge,
  Tag,
  ScrollView,
  CountDown,
  SearchBox,
  SearchBar,
  IndexBar,
  IndexAnchor,
  Steps,
  Step,
  Paragraph,
  Checkbox,
  TabBar,
  Uploader,
  LocalLoading,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
  DetailPage,
  Popover
}

export default {
  // version,
  install,
  PullRefresh,
  Loading,
  SlideLoad,
  Empty,
  Image,
  ImageCompress,
  Mask,
  Overlay,
  List,
  ListItem,
  Popup,
  PopupHeader,
  FreePopup,
  Button,
  Cell,
  Dialog,
  Address,
  Notice,
  FloorNotice,
  Field,
  Input,
  Select,
  DateSelecter,
  Textarea,
  Switch,
  Toast,
  Tabs,
  Tab,
  Swipe,
  SwipeItem,
  Richtext,
  Radio,
  Amount,
  Footer,
  BullyScreenIcon,
  Badge,
  Tag,
  ScrollView,
  CountDown,
  SearchBox,
  SearchBar,
  IndexBar,
  IndexAnchor,
  Steps,
  Step,
  Paragraph,
  Checkbox,
  TabBar,
  Uploader,
  LocalLoading,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
  DetailPage,
  Popover
}
