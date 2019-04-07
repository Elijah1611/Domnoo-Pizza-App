<template>
  <v-app v-cloak>
    <appToolbar :cart="cart"></appToolbar>
    <v-content class="space-fix">
      <appFeatured></appFeatured>
      <appMenu @cartItems="cart.push($event)"></appMenu>
    </v-content>
    <appFooter></appFooter>
  </v-app>
</template>

<script>
import appToolbar from "./components/Header_Footer/Toolbar";
import appFooter from "./components/Header_Footer/Footer";
import appFeatured from "./components/Featured";
import appMenu from "./components/Menu";

export default {
  name: "App",
  components: {
    appToolbar,
    appFooter,
    appFeatured,
    appMenu
  },
  data() {
    // const { cart } = this.$store.state;
    return {
      cart: [],
      images: ""
    };
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}

.space-fix {
  padding: 0 !important;
}
</style>
