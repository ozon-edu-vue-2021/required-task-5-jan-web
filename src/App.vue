<template>
  <div id="app">
    <div class="main-wrapper">
      <div>
            <div
            class="button"
            @click="toggleWindow"
            >
            {{ buttonTitle }}
            </div>
            <div class="main-leftside">
              <shop-window v-if="isShopWindowHidden"/>
              <shop-cart v-else/>
            </div>
      </div>
      <div class="main-sidebar">
          <sidebar-window />
      </div>
    </div>
  </div>
</template>

<script>
import ShopWindow from './components/ShopWindow.vue';
import ShopCart from './components/ShopCart.vue';
import SidebarWindow from './components/SidebarWindow'

export default {
  name: "App",
  components: {
    ShopWindow,
    ShopCart,
    SidebarWindow
  },
  data() {
    return {
      isShopWindowHidden: true,
    }
  },
  methods: {
    toggleWindow() {
      this.isShopWindowHidden = !this.isShopWindowHidden;
    },
  },
  computed: {
    buttonTitle() {
      return this.isShopWindowHidden ? "К корзине" : "К витрине";
    }
  },
  mounted() {
    this.$store.dispatch("getDataFromApi");
  }
};
</script>

<style scoped>
.button {
    width: fit-content;
    font-size: 16px;
    padding: 8px 22px;
    border-radius: 6px;
    background-color: #005bff;
    color: #fff;
}

.button:hover {
  cursor: pointer;
}

.main-wrapper {
  margin: 0 3%;
  display: flex;
}

.main-leftside {
 background-color: #fff;
 width: 1040px;
 padding: 5px 20px;
 margin-top: 20px;
}

.main-sidebar {
  width: 100%;
  height: fit-content;
  margin: 55px 20px 20px 20px;
  background-color: #fff;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

</style>

