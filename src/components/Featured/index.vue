<template>
  <v-carousel max>
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
  justify-content: top;
  align-items: center;
  height: 100%;
  margin-top: 1.5rem;

  .text {
    text-align: center;
    font-family: "Monoton", sans-serif;
    color: #fff;
    font-size: 2rem;
    line-height: 1em;
    letter-spacing: 0.2rem;
    word-spacing: 0.3rem;
    width: 75%;
    margin-top: 5rem;
    margin-bottom: 1em;
    @media only screen and (min-width: 768px) {
      margin-bottom: 0.5em;
      font-size: 3rem;
      line-height: 1em;
    }
  }

  img {
    width: 180px;
    @media only screen and (min-width: 768px) {
      width: 280px;
    }
  }
}
</style>