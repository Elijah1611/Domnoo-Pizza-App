import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/contact",
			name: "home",
			component: Home
		},
		{
			path: "/location",
			name: "home",
			component: Home
		},
		{
			path: "/menu",
			name: "menu",

			component: () => import("./views/Menu.vue")
		}
	]
});
