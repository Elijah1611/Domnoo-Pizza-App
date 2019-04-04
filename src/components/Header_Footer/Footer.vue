<template>
  <footer>
    <img :src="images.Logo" alt="Domnoo Logo">
    <div class="contact">
      <span>Call Us:</span>
      <span>777-054-1367</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      images: {
        Logo: this.$store.state.icons.Logo
      }
    };
  }
};
</script>

<style lang="scss" scoped>
/*================================
            FOOTER
==================================*/
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #212121;
  color: #d60427;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.875rem;
  margin-top: 8.125rem;
  padding: 2.5rem 0;

  img {
    width: 8rem;
  }

  .contact {
    border-top: 1px solid #424242;
    padding: 1.25rem;
    text-align: center;

    span {
      display: block;
    }
  }
}
</style>