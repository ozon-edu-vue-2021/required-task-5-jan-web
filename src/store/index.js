import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: {},
		cart: {},
		resultCart: [],
		checkedProducts: [],
	},
	mutations: {
		modifyData: (state, usefulData) => {
			usefulData.forEach((product) => {
				product.price = Math.floor(Math.random() * 100);
				product.img = Math.ceil(Math.random() * 12);
				product.amount = 0;
			});
			state.products = usefulData;
		},
		addProductToCart: (state, id) => {
			if (state.cart[id]) {
				state.cart[id]++;
			} else {
				state.cart[id] = 1;
			}
		},
		setCartProducts(state) {
			state.resultCart = [];
			for (const key in state.products) {
				const product = state.products[key];
				if (state.cart[product.id]) {
					product.amount = state.cart[product.id];
					state.resultCart.push(product);
				}
			}
		},
		deleteProduct(state, id) {
			const tempArr = state.resultCart;
			state.resultCart = [];
			tempArr.forEach((product) => {
				if (product.id !== id) {
					state.resultCart.push(product);
				}
			});
		},
		checkedProduct(state, id) {
			state.checkedProducts.push(id);
		},
		deleteSelected(state) {
			const tempArr = state.resultCart;
			for (let i = 0; i < state.checkedProducts.length; i++) {
				const idxCheckedProduct = tempArr.findIndex(
					(product) => product.id === state.checkedProducts[i]
				);
				tempArr.splice(idxCheckedProduct, 1);
			}
			state.resultCart = tempArr;
			state.checkedProducts = [];
		},
	},
	getters: {
		getCartProducts(state) {
			return state.resultCart;
		},
		getTotalAmount(state) {
			const totalAmount = state.resultCart.reduce((acc, product) => {
				return acc + product.amount;
			}, 0);
			return totalAmount;
		},
		getTotalPrice(state) {
			const totalPrice = state.resultCart.reduce((acc, product) => {
				return acc + product.amount * product.price;
			}, 0);
			return totalPrice;
		},
		isAllProductsChecked(state) {
			return state.resultCart.length === state.checkedProducts.length
		},
	},
	actions: {
		getDataFromApi: async function (context) {
			const res = await fetch(
				"https://random-data-api.com/api/food/random_food?size=30"
			);
			const usefulData = await res.json();
			context.commit("modifyData", usefulData);
		},
	},
});
