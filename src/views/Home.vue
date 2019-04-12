<template>
  <div class="home">
    <appToolbar></appToolbar>
    <v-content>
      <appFeatured></appFeatured>
      <appContact></appContact>
    </v-content>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appToolbar from "../components/Header_Footer/Toolbar";
import appFeatured from "../components/Featured";
import appContact from "../components/Contact";
import appFooter from "../components/Header_Footer/Footer";
export default {
  name: "home",
  components: { appToolbar, appFeatured, appFooter, appContact }
};
</script>
