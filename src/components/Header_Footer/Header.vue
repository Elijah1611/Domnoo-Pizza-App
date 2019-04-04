<template>
  <header>
    <div class="container">
      <img :src="icons.Logo" alt="Domnoo Logo" class="logo">
      <img :src="icons.Menu" alt="Menu Icon" class="menu" @click="showDrawer = !showDrawer">

      <MdDrawer class="side-drawer" :md-right="true" :md-active.sync="showDrawer"></MdDrawer>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showDrawer: false,
      icons: {
        Logo: this.$store.state.icons.Logo,
        Menu: this.$store.state.icons.Menu
      }
    };
  }
};
</script>

<style lang="scss" scoped>
/*================================
            HEADER
==================================*/
header {
  background: #c10a28;
  padding: 1.875rem 0 0.625rem;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  .logo {
    width: 9rem;
    cursor: pointer;
  }

  .menu {
    width: 2rem;
    cursor: pointer;
  }

  .side-drawer {
    background-image: url("../../assets/images/logo.png"),
      linear-gradient(#d60427, #8f0118);
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    opacity: 0.9;
  }
}
</style>
