<template>
  <div class="col">
    <div class="card h-100">
      <div class="circle text-center">
        <img :src="service.img" alt="tooth icon" />
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">{{ service.title }}</h5>
        <p class="card-text">
          {{ service.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: ["service"],
};
</script>

<style scoped>
.circle {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>