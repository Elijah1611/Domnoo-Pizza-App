import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		icons: {
			Logo: require("./assets/images/logo.png"),
			Menu: require("./assets/images/menu.png")
		}
	},
});
