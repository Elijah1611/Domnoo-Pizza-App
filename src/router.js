import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior(to) {
		if (to.hash) {
			return { selector: to.hash };
		}
		return {
			x: 0,
			y: 0
		};
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/menu",
			name: "menu",
			component: () => import("./views/Menu.vue")
		},
		{
			path: "*",
			name: "404",
			component: Home
		}
	]
});
