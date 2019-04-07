<template>
  <v-carousel>
    <v-carousel-item v-for="(slide,i) in slides" :key="i" :src="slide.bck">
      <div class="slider-container">
        <div class="text">{{slide.text}}</div>
        <div class="image">
          <img :src="slide.img" alt>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import db from "@/firebaseConfig.js";
export default {
  name: "Featured",
  data() {
    return {
      slides: [
        { text: "20% OFF ON ALL PIZZAS", bck: "", img: "" },
        { text: "BUY TWO PIZZAS, GET ONE FREE", bck: "", img: "" },
        { text: "FREE SODA WITH ANY PURCHASE", bck: "", img: "" }
      ]
    };
  },
  created() {
    db.collection("images")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.slides = this.slides.map((slide, i) => {
            return {
              ...slide,
              bck: doc.data().bckImgs[i],
              img: doc.data().slideImgs[i]
            };
          });
        });
      });
  }
};
</script>

<style lang="scss" scoped>
/*================================
                SLIDER
==================================*/

.slider-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;

  .text {
    text-align: center;
    font-family: "Monoton", sans-serif;
    color: #fff;
    // font-size: 8rem;
    font-size: 2rem;
    // line-height: 10rem;
    line-height: 1.7em;
    letter-spacing: 0.2rem;
    word-spacing: 0.3rem;
    // width: 50%;
    width: 75%;
    margin-top: 5rem;
    margin-bottom: 1em;
  }

  img {
    width: 200px;
  }
}
</style>