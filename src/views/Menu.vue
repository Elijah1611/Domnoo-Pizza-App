<template>
  <div class="menu">
    <appToolbar></appToolbar>
    <v-content>
      <appMenu @menuState="isMenuOpen = $event"></appMenu>
    </v-content>
    <appFooter v-show="isMenuOpen"></appFooter>
  </div>
</template>

<script>
import appToolbar from "../components/Header_Footer/Toolbar";
import appMenu from "../components/Menu";
import appFooter from "../components/Header_Footer/Footer";
export default {
  name: "home",
  components: { appToolbar, appMenu, appFooter },
  data() {
    return {
      isMenuOpen: false
    };
  }
};
</script>

