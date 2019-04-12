<template>
  <div>
    <h2 class="display-2 menu-heading">Menu</h2>
    <v-toolbar color="red darken-4 py-4" dark tabs>
      <v-layout row justify-center align-center>
        <v-flex xs12 sm8 lg4>
          <v-text-field
            flat
            clearable
            @click:append="menuSearch(searchFood, currentCategory)"
            append-icon="send"
            label="Search"
            prepend-inner-icon="search"
            solo-inverted
            v-model.lazy="searchFood"
            @click="menuState = true"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-btn-toggle dark class="full-size" v-model="currentCategoryIndex">
      <v-btn
        color="error"
        class="full-btn"
        v-for="(category, i) in categories"
        :key="i"
        @click="changeCategory(category, i)"
      >{{category}}</v-btn>
    </v-btn-toggle>

    <v-container fluid>
      <v-layout row justify-center align-center>
        <v-flex xs12 sm4 lg3>
          <v-btn
            color="error"
            :style="{width: '100%', margin: '0 auto'}"
            @click="useMenu()"
          >{{(menuState ? 'Close Menu' : 'Open Menu')}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-sm v-if="menuState">
      <p class="search-heading title">{{searchResults}}</p>
      <v-alert
        :value="addAlert"
        type="success"
        transition="scale-transition"
        class="fixed"
      >Item Added To Cart!</v-alert>
      <v-layout row wrap>
        <v-flex v-for="(card, i) in menu[currentCategory]" :key="i" xs12 sm6 lg4 xl3>
          <component
            :is="MenuCardComp"
            v-if="menuState"
            :kind="card.kind"
            :price="card.price"
            :desc="card.desc"
            :cardImg="card.image"
          ></component>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MenuCard from "./MenuCard";
import db from "@/firebaseConfig.js";
import { isNull } from "util";
import { mapGetters } from "vuex";

export default {
  name: "Menu",
  components: {
    MenuCard
  },
  data() {
    return {
      currentCategoryIndex: 0,
      currentCategory: "Pizzas",
      menuState: false,
      menu: "",
      MenuCardComp: "MenuCard",
      searchFood: "",
      searchResults: "",
      categories: ["Pizzas", "Burgers", "Salads", "Desserts"]
    };
  },
  methods: {
    changeCategory(category, i) {
      this.searchResults = "";
      this.currentCategoryIndex = i;
      this.currentCategory = category;
    },
    useMenu() {
      this.searchResults = "";
      this.menuState = !this.menuState;
      this.$emit("menuState", this.menuState);
    },
    menuSearch(search, category) {
      if (search == "undefined" || isNull(search)) {
        search = "";
      }
      console.log(search);
      db.collection("menu")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let results = doc.data();
            results = results[category].filter(item =>
              item.kind.toLowerCase().includes(search.toLowerCase())
            );
            console.log(results);
            results.length == 0
              ? (this.searchResults = "No Items Found")
              : (this.searchResults = results.length + " Items Found");
            this.menu = { ...doc.data(), [category]: results };
          });
        });
    }
  },

  computed: {
    ...mapGetters(["addAlert"])
  },
  created() {
    db.collection("menu")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.menu = doc.data();
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.menu-heading {
  font-family: "Arizonia", cursive !important;
  text-align: center;
  background: #b71c1c;
  padding: 1rem;
  text-shadow: 1px 1px 1px #333;
}
.search-heading {
  text-align: center;
  padding: 1rem;
  text-shadow: 1px 1px 1px #333;
}

.full-size {
  display: flex;
  justify-content: space-between;

  .full-btn {
    flex: auto;
  }
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  margin: 0;
}
</style>