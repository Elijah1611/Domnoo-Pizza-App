<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3 class="mb-3" id="contact">
        <appCallCard></appCallCard>
      </v-flex>
      <v-flex xs12 md6 offset-md3 id="location">
        <appLocationCard></appLocationCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import appCallCard from "./CallCard";
import appLocationCard from "./LocationCard";
export default {
  components: {
    appCallCard,
    appLocationCard
  }
};
</script>
