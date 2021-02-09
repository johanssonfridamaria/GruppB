<template>
  <div>
    <service-card />
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