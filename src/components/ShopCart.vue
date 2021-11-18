<template>
	<div class="cart_wrapper">
		<h2>Корзина магазина</h2>
		<div class="cart__selectors">
			<input
        type="checkbox"
        id="selectAll"
        v-model="allBoxesChecked"
        @click="toggleSelectAll"
      />
			<label for="selectAll">Выбрать всё</label>
			<span class="cart__deleteSlected" @click="deleteSelected">
				Удалить выбранные
			</span>
		</div>
		<div class="cart__header">
			<span class="cart__header_title"> Доставка Ozon Express</span>
			<span class="cart__header_courier"> Курьером </span>
		</div>
		<div v-for="product in products">
			<card-cart
        :product="product"
        :key="product.id"
        :selected="allBoxesChecked"
        @checkAllBoxesCheckers="checkAllBoxesCheckers"
			/>
		</div>
	</div>
</template>

<script>
import CardCart from "./CardCart";

export default {
	components: {
		CardCart,
	},
	data() {
		return {
			allBoxesChecked: false,
		};
	},
	methods: {
		deleteSelected() {
			this.$store.commit("deleteSelected");
		},
		toggleSelectAll() {
			this.allBoxesChecked = !this.allBoxesChecked;
		},
    checkAllBoxesCheckers() {
      if(this.$store.getters.isAllProductsChecked){
        this.allBoxesChecked = true;
      } else {
        this.allBoxesChecked = false;
      }
    }
	},
	computed: {
		products() {
			return this.$store.state.resultCart;
		},
	},
};
</script>

<style scoped>
.cart__selectors {
	padding: 20px;
	border-bottom: 1px solid rgba(0, 26, 52, 0.16);
}

.cart__deleteSlected {
	color: #f91155;
	margin-left: 24px;
}

.cart__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	margin: 20px;
	background-color: #eff3f6;
	border-radius: 2px;
	color: #001a34;
}
</style>
