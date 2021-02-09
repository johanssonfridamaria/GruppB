<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <service-card
      v-for="(service, index) in services"
      :key="index"
      :service="service"
    />
  </div>
</template>

<script>
import ServiceCard from "./ServiceCard.vue";

export default {
  components: {
    ServiceCard,
  },
  inject: ["services"],
};
</script>

<style>
</style>