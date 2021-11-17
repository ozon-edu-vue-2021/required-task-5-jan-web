<template>
<div class="card__wrapper">
    <input class="card__checkbox"
           type="checkbox"
           id="selectProduct"
           v-model="checked"
           @click="onCheckboxClick">
    <img class="card__img" :src="imgUrl">
    <div class="card__main">
      <div class="card__productTitle">{{ product.dish }}</div>
      <div class="card__productDescr">{{ product.description }}</div>
      <div class="card__productDelite"
           @click="deliteProduct"
            >
            Удалить
      </div>
    </div>

    <div class="card__productPrice"> {{ product.price }} ₽</div>

    <div class="card__amountSelector">
      <select type="select"
							autocomplete="off"
							id="amountSelector"
              class="card__select" >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>

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
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    deliteProduct(){
      this.$store.commit('deliteProduct', this.product.id);
    },
    onCheckboxClick() {
      console.log('this.checked =', !this.checked);
      this.$store.commit('checkedProduct', this.product.id);
    }
  },
  computed: {
    imgUrl() {
      return require('@/assets/images/' + this.product.img + '.webp')
    },


  },
};
</script>

<style scoped>
.card__wrapper {
  display: flex;
  align-items: center;
  height: 150px;
  margin: 10px 20px;
  border-bottom: 1px solid rgba(0,26,52,.16);
}
.card__img {
  width: 92px;
  margin-left: 10px;
  margin-right: 10px;
}
.card__main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding: 10px;
  padding-top: 0;
}
.card__productTitle {
  font-weight: 700;
}
.card__productDescr {
  margin-top: 0;
  margin-bottom: auto;
}
.card__productDelite {
  color: #005bff;
  cursor: pointer;
  font-size: 14px;
}
.card__select {
  background-color: #fff;
  border: 2px solid #b3bcc5;
  border-radius: 6px;
  display: block;
  font-size: 14px;
  color: #001a34;
  padding: 10px 76px 7px 8px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
}
 .card__select:hover{
   border-color: #005bff;
   }
 .card__select:focus {
   border-color: #005bff;
  outline: none;
}
.card__productPrice {
  margin-top: 0;
  margin-bottom: auto;
}
.card__amountSelector {
  margin: 0px 0px auto auto;


}


</style>
