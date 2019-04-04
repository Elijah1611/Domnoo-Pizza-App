<template>
  <div>
    <appHeader></appHeader>
    <div>Content</div>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "./components/Header_Footer/Header";
import appFooter from "./components/Header_Footer/Footer";

export default {
  name: "App",
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
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
</style>
