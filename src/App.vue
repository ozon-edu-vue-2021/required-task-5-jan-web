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
      isShopWindowHidden: false,
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
.main-wrapper {
  margin: 0 3%;
  display: flex;
  /* background-color: #fafafa; */
}
.main-leftside {
 background-color: #fff;
 width: 1000px;
}
.main-sidebar {
  width: 100%;
  height: fit-content;
  margin: 55px 20px 20px 20px;
  /* padding-top: 45px; */
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

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

</style>

