<template>
  <div>
    <v-toolbar app dark height="80" color="#c10a28" :scroll-off-screen="true" :scroll-threshold="1">
      <v-toolbar-title app>
        <v-layout align-center>
          <router-link to="/" class="center-logo">
            <img :src="Logo" alt="Domnoo" class="logo">
          </router-link>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer app right dark v-model="drawer" class="drawer-styles">
      <v-list class="bck-disable">
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link" active-class="red ">
          <v-list-tile-action>
            <v-icon large>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-dialog v-model="dialog" fullscreen>
          <template v-slot:activator="{ on }">
            <v-list-tile class="transparent" v-on="on">
              <v-list-tile-action>
                <v-icon large>local_grocery_store</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-chip color="red darken-2" text-color="white" small>
                  <v-avatar class="red">{{cartCount}}</v-avatar>
                  {{cartCount === 1 ? 'Item' : 'Items'}}
                </v-chip>
              </v-list-tile-content>
              <v-list-tile-content>
                <v-chip color="red darken-2" text-color="white" small>
                  <v-avatar class="red">$</v-avatar>
                  {{getTotal}}
                </v-chip>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-card>
            <v-card-title class="red" primary-title>
              <img :src="Logo" alt="Domnoo" class="logo">
              <div>
                <v-chip color="red darken-2" text-color="white">
                  <v-avatar>
                    <v-icon>local_grocery_store</v-icon>
                  </v-avatar>
                  {{ cartCount }} {{cartCount === 1 ? 'Item' : 'Items'}}
                </v-chip>
                <v-chip color="red darken-2" text-color="white">
                  <v-avatar>
                    <v-icon>attach_money</v-icon>
                  </v-avatar>
                  {{getTotal}}
                </v-chip>
              </div>
            </v-card-title>

            <v-card-text>
              <v-alert :value="cartCount === 0" type="info">
                There are no orders here!
                <v-icon>restaurant</v-icon>
              </v-alert>
              <v-alert
                :value="removeAlert"
                type="warning"
                transition="scale-transition"
                class="fixed"
              >Item Removed!</v-alert>
              <v-layout row wrap>
                <v-flex xs12 sm6 lg4 xl3 v-for="(item, i) in getCart" :key="i">
                  <v-card class="ma-1">
                    <v-img :src="item.cardImg" aspect-ratio="1"></v-img>

                    <v-card-title primary-title>
                      <div>
                        <h3 class="display-2 mb-2 custom-font">{{item.kind}}</h3>
                        <div class="body-1 font-italic">{{item.desc}}</div>
                      </div>
                      <v-spacer></v-spacer>
                      <div>
                        <p class="price-styles display-1">${{item.price}}</p>
                      </div>
                    </v-card-title>
                    <v-card-actions>
                      <v-hover>
                        <v-btn
                          fab
                          slot-scope="{ hover }"
                          :class="`elevation-${hover ? 12 : 2}`"
                          color="red"
                          dark
                          @click="removeItem(item.id)"
                        >
                          <v-icon>clear</v-icon>
                        </v-btn>
                      </v-hover>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                :disabled="cartCount === 0"
                dark
                @click="dialog = false"
                to="/contact"
              >Call In Order</v-btn>
              <v-btn color="red" dark @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from "../../assets/images/logo.png";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Toolbar",
  data() {
    return {
      Logo,
      drawer: false,
      dialog: false,
      items: [
        { icon: "home", title: "Home", link: "/" },
        { icon: "call", title: "Contact", link: "/contact" },
        { icon: "store", title: "Location", link: "/location" },
        { icon: "local_pizza", title: "Menu", link: "/menu" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getCart", "cartCount", "getTotal", "removeAlert"])
  },
  methods: {
    ...mapMutations(["removeItem"])
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

.center-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-height: 64px;
  user-select: none;
}

.current {
  color: #333;
  background: #8f0118 !important;
  font-size: 3rem;
}

.price-styles {
  color: #d60427;
  font-weight: 900;
  text-align: center;
}

.custom-font {
  font-family: "Arizonia", cursive !important;
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  margin: 0;
}

@media only screen and (min-device-height: 320px) and (max-device-height: 480px) and (orientation: landscape) {
  .drawer-styles {
    background: linear-gradient(#d60427, #8f0118);
  }
}
</style>
