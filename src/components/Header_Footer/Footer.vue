<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="red darken-4 justify-center">
        <strong class="subheading full-size">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(icon, i) in social"
          :key="i"
          class="mx-3"
          dark
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
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
      social: [
        { icon: "fab fa-facebook", link: "https://www.facebook.com/" },
        { icon: "fab fa-twitter", link: "https://twitter.com/" },
        { icon: "fab fa-google-plus", link: "https://www.google.com/" },
        { icon: "fab fa-instagram", link: "https://www.instagram.com" }
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