<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="red darken-4 justify-center">
        <strong class="subheading full-size">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019
        <strong class="company">Domnoo Inc.</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-instagram"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
/*================================
            FOOTER
==================================*/
// footer {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: #212121;
//   color: #d60427;
//   font-weight: 500;
//   font-size: 2.5rem;
//   line-height: 1.5em;
//   padding: 3em 0;

.company {
  margin-left: 0.5rem;
}

.full-size {
  width: 100%;
  text-align: center;
}

//   .contact {
//     border-top: 1px solid #424242;
//     padding: 1.5em;
//     text-align: center;

//     span {
//       display: block;
//     }
//   }
// }
</style>