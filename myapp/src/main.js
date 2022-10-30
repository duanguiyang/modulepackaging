import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HmButton from "./components/button"
import HmDialog from "./components/loding"
import HmInput from "./components/input"
import HmSwitch from "./components/switch"
import HmRadio from "./components/radio"
import HmRadioGroup from "./components/radioGroup"
import HmCheckBox from "./components/checkBox"
import HmCheckBoxGroup from "./components/checkBoxGroup"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)
 
Vue.config.productionTip = false
Vue.use(ElementUI); 
Vue.component(HmButton.name,HmButton);
Vue.component(HmDialog.name,HmDialog);
Vue.component(HmInput.name,HmInput);
Vue.component(HmSwitch.name,HmSwitch);
Vue.component(HmRadio.name,HmRadio);
Vue.component(HmRadio.name,HmRadio);
Vue.component(HmRadioGroup.name,HmRadioGroup);
Vue.component(HmCheckBox.name,HmCheckBox);
Vue.component(HmCheckBoxGroup.name,HmCheckBoxGroup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
