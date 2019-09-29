import Vue from 'vue'
import 'lib-flexible'
import APP from './index.vue';

import { post } from '../../assets/js/http';
import { Picker,DatetimePicker,Popup } from 'vant';

Vue.use(Picker).use(DatetimePicker).use(Popup)
Vue.prototype.httpRequst = post;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(APP)
})
