<template>
<div class="sidebar__wrapper">
  <div class="button" @click="alertList">Перейти к оформлению </div>
  <span class="sidebar__delivery">Доступные способы и время доставки можно выбрать при оформлении заказа</span>
  <div class="sidebar__cart">
    <h2>Ваша корзина</h2>
    <div class="sidebar__cart-wrapper">
      <div>Количество товаров</div>
      <div>{{ getTotalAmount }} шт.</div>
    </div>
      <div class="sidebar__cart-wrapper">
      <h2>Общая стоимость</h2>
      <div>{{ getTotalPrice }} ₽</div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  methods: {
      alertList() {
      const totalAmount = this.$store.getters.getCartProducts.reduce((acc, product) => {
        acc.push(' \n' + product.dish + ' ' + product.amount + ' шт');
        return acc;
      }, []);
      alert(totalAmount);
    },
  },
  computed: {
    getTotalAmount() {
      return this.$store.getters.getTotalAmount;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  }
};
</script>

<style scoped>
.sidebar__wrapper {
  padding: 25px;
}
.button {
    width: 100%;
    font-size: 16px;
    padding: 18px 22px;
    border-radius: 6px;
    line-height: 1.25;
    min-height: 56px;
    min-width: 224px;
    background-color: #10ad44;
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
}

.button:hover {
  cursor: pointer
}

.sidebar__delivery {
  color: #808d9a;
  font-size: 14px;
  line-height: 18px;
}

.sidebar__cart-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
