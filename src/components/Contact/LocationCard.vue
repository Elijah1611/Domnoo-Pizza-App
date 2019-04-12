<template>
  <v-card color="red lighten-1" class="white--text">
    <v-card-title primary-title class="display-1">Location</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="headline mb-3 text-xs-center">
        <span>740 S Olives St, Los Angeles, CA 90014</span>
      </div>
      <div>
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d963.4716488267295!2d-118.25746880812365!3d34.039685702480696!2m2!1f0!2f39.128197229750626!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x0%3A0x47e5ead9ffcdbc83!2sDomino&#39;s+Pizza!5e1!3m2!1sen!2sus!4v1555016522045!5m2!1sen!2sus"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </v-card-text>
  </v-card>
</template>


<style lang="scss" scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>