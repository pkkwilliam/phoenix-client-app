import Vue from "vue";
import App from "./App";
import { execute as serviceExecutor } from "./service/serviceExecutor";
import store from "./store/applicationState";
import {
  getUserToken,
  removeUserToken,
  setUserToken,
} from "./store/applicationStorage";
import AppStateService from "./service/appStateService";
import TnCustom from "./components/TnCustom/TnCustom.vue";
import cuCustom from "./colorui/components/cu-custom.vue";
import uView from "uview-ui";
import CHINESE_TRADITION_LABEL from "./label/label.zh_cn.json";

Vue.component("cu-custom", cuCustom);
Vue.component("tn-custom", TnCustom);

Vue.use(uView);

Vue.config.productionTip = false;

// const PROD = true;
const DEVELOP_SERVICE_URL = "http://localhost:3081";
const UAT_SERVICE_URL = "https://phoenix-uat-api.bitcode.mo";
const PROD_SERVICE_URL = "https://phoenix-api.bitcode.mo";
// let HOST = PROD ? PROD_SERVICE_URL : DEVELOP_SERVICE_URL;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  host = DEVELOP_SERVICE_URL;
} else {
  host = PROD_SERVICE_URL;
}

let host;
let executeService = (service) =>
  serviceExecutor(
    host,
    store,
    getUserToken,
    setUserToken,
    removeUserToken,
    service
  );

Vue.mixin({
  methods: {
    execute: (service) => executeService(service),
    isLogin: () => store.state.userProfile.profile.active,
    logout: () => setUserToken(undefined),
  },
});

let appStateService = new AppStateService(store, executeService);

// declare global variable
// usage: const myvalue = this.myGlobalVariable
Vue.prototype.$myGlobalVariable = "value";

Vue.prototype.$appStateService = appStateService;
Vue.prototype.$label = CHINESE_TRADITION_LABEL;

App.mpType = "app";

const app = new Vue({
  ...App,
  store,
});
app.$mount();
