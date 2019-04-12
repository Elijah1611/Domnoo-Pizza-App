<template>
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mb-5">
      <v-img :src="cardImg" aspect-ratio="1"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="display-2 mb-2 custom-font">{{kind}}</h3>
          <div class="body-1 font-italic">{{ desc }}</div>
        </div>
        <v-spacer></v-spacer>
        <div>
          <p class="price-styles display-1">${{price}}</p>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-hover>
          <v-btn
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            color="error"
            @click="addToCart({kind, price, desc, cardImg, id: uuid()})"
          >Add To Order</v-btn>
        </v-hover>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { mapMutations } from "vuex";
import uuid from "uuid/v4";
export default {
  name: "MenuCard",
  props: {
    kind: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    cardImg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      uuid
    };
  },
  methods: {
    ...mapMutations(["addToCart"])
  }
};
</script>

<style lang="scss" scoped>
.price-styles {
  color: #d60427;
  font-weight: 900;
  text-align: center;
}

.custom-font {
  font-family: "Arizonia", cursive !important;
}
</style>