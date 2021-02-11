<template>
  <div class="col">
    <div class="card h-100 p-4">
      <div class="card-body d-flex justify-content-center">
        <div class="circle">
          <img :src="service.img" alt="tooth icon" />
        </div>
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
  transition: box-shadow 0.3s ease-out;
}
.card {
  transition: 0.3s ease-out 0.3s;
}

.card:hover .circle {
  background: var(--blue);
  box-shadow: 0 0 0 0.6rem rgba(47, 90, 230, 0.19);
}
.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>