<template>
  <div class="card">
    <div class="card-body">
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
      <h5 class="card-title">Card Title {{ service.title }}</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor
        consequuntur molestias beatae ipsa commodi vero pariatur ullam autem
        ratione?
        {{ service.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
};
</script>

<style>
</style>