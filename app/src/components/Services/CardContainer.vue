<template>
  <div>
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