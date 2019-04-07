<template>
  <div>
    <v-toolbar app dark height="80" color="#c10a28" :scroll-off-screen="true" :scroll-threshold="1">
      <v-toolbar-title app>
        <v-layout align-center>
          <img :src="Logo" alt="Domnoo" class="logo">
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer app right dark v-model="drawer" class="drawer-styles">
      <v-list class="bck-disable">
        <v-list-tile v-for="item in items" :key="item.title" class="transparent">
          <v-list-tile-action>
            <v-icon large>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="transparent" @click="openCart()">
          <v-list-tile-action>
            <v-icon large>local_grocery_store</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Orders ({{ cartCount }})</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from "../../assets/images/logo.png";
export default {
  name: "Toolbar",
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      drawer: false,
      Logo,
      showCart: false,
      items: [
        { icon: "call", title: "Contact" },
        { icon: "store", title: "Location" },
        { icon: "thumb_up", title: "Rate Us" },
        { icon: "local_pizza", title: "Menu" }
      ]
    };
  },
  methods: {
    openCart() {
      this.showCart = !this.showCart;
    }
  },
  computed: {
    cartCount() {
      return this.cart.length;
    }
  }
};
</script>

<style lang="scss" scoped>
/*================================
            HEADER
==================================*/

.drawer-styles {
  background-image: url("../../assets/images/logo.png"),
    linear-gradient(#d60427, #8f0118);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
}

.bck-disable {
  background: none !important;
}

.logo {
  max-height: 64px;
  cursor: pointer;
  user-select: none;
}

@media only screen and (min-device-height: 320px) and (max-device-height: 480px) and (orientation: landscape) {
  .drawer-styles {
    background: linear-gradient(#d60427, #8f0118);
  }
}
</style>
