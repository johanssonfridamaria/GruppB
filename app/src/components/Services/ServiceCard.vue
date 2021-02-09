<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <circle
            id="icon_background"
            data-name="icon background"
            cx="60"
            cy="60"
            r="60"
            fill="#25e6c8"
          />
        </svg>
        <img :src="service.img" alt="" />
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

<style>
</style>