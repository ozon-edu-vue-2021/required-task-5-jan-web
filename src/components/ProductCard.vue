<template>
	<div class="product-card">
		<img
      :src="imgUrl"
      alt="product"
      class="product-card__img"
    />
		<div class="product-card__price">
			{{ product.price }} <span class="product-card__price_ru">₽</span>
		</div>
		<div class="product-card__best">Бестселлер</div>
		<div class="product-card__title">{{ product.dish }}</div>
		<div class="product-card__descr">{{ product.description }}</div>
		<div class="stars"></div>
		<div class="button" @click="addToCart(product.id)">В корзину</div>
		<div class="product-card__express"><b>За час</b> курьером Ozon Express</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			default: null,
		},
	},
	methods: {
		addToCart(id) {
			this.$store.commit("addProductToCart", id);
			this.$store.commit("setCartProducts");
		},
	},
	computed: {
		imgUrl() {
			return require("@/assets/images/" + this.product.img + ".webp");
		},
	},
};
</script>

<style scoped>
.product-card {
	width: 220px;
}

.product-card__img {
	height: 220px;
}

.product-card__price {
	font-weight: 700;
	font-size: 24px;
	margin-top: 10px;
}

.product-card__price_ru {
	font-size: 20px;
}

.product-card__title {
	font-weight: 700;
	margin-bottom: 5px;
}

.product-card__descr {
	margin-bottom: 15px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}

.product-card__best {
	font-size: 12px;
	color: rgb(255, 132, 0);
	margin-bottom: 5px;
}

.product-card__express {
	font-size: 12px;
	margin-top: 5px;
}

.button {
	width: fit-content;
	font-size: 16px;
	padding: 8px 22px;
	border-radius: 6px;
	background-color: #f91155;
	color: #fff;
}

.button:hover {
	background-color: #a70031;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		opacity 0.3s ease-in-out;
  cursor: pointer;
}

.stars {
	width: 39.8402%;
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='%23ff8970'%3E%3Cpath d='M7.952.656c-.089-.003-.17.048-.21.13L5.522 5.524.41 6.212c-.086.011-.158.072-.185.156-.027.084-.004.177.06.237l3.737 3.617-.937 5.163c-.015.086.02.175.09.227.07.052.163.058.24.016l4.531-2.503 4.532 2.503c.077.042.17.036.24-.016.07-.052.105-.14.09-.227l-.938-5.163 3.738-3.617c.063-.06.086-.153.06-.237-.028-.084-.1-.145-.186-.156l-5.11-.688L8.148.786c-.036-.078-.112-.128-.197-.13z'/%3E%3C/svg%3E");
	background-position-x: -1px;
	background-repeat: repeat-x;
	background-size: 18px 16px;
	height: 16px;
	margin-bottom: 20px;
}
</style>
