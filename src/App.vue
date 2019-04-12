<template>
  <v-app id="app">
    <router-view/>
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
</style>