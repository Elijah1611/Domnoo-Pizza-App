<template>
  <v-app id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </v-app>
</template>

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
  background: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>