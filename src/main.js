import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from './router'

Vue.use(Vuetify);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
