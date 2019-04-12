import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		cart: [],
		isAddedAlert: false,
		isRemovedAlert: false
	},
	getters: {
		getCart(state) {
			return state.cart;
		},
		addAlert(state) {
			return state.isAddedAlert;
		},
		removeAlert(state) {
			return state.isRemovedAlert;
		},
		cartCount(state) {
			return state.cart.length;
		},
		getTotal(state) {
			let price = 0;
			state.cart.map(item => {
				price += item.price;
			});
			return price.toFixed(2);
		}
	},
	mutations: {
		addToCart(state, payload) {
			state.cart.push(payload);
			state.isAddedAlert = true;
			setTimeout(() => {
				state.isAddedAlert = false;
			}, 2000);
		},
		removeItem(state, payload) {
			state.cart = state.cart.filter(item => item.id !== payload);
			state.isRemovedAlert = true;
			setTimeout(() => {
				state.isRemovedAlert = false;
			}, 2000);
		}
	}
});

export default store;
