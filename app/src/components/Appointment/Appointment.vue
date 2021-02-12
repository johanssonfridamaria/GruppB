<template>
  <div class="py-5 bg-blue">
    <div id="contact" class="container">
      <div class="row justify-content-between align-items-center">
        <div
          class="col-12 col-md-8 d-flex justify-content-center justify-content-md-start"
        >
          <h3 class="text-white mb-4 mb-md-0 text-center">
            Do not wait and make an appointment today!
          </h3>
        </div>
        <div
          class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end"
        >
          <button class="btn btn-white">Book an appointment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-blue {
  background: #2baaec;
}
.btn {
  box-shadow: none !important;
  text-transform: none !important;
}
.btn-white {
  background: #fff;
  color: #2baaec;
  border: 0.1rem solid transparent;
  border-radius: 0.5rem;
}
.btn-white:hover {
  background: #2baaec;
  color: #fff;
  border: 0.1rem solid #fff;
}
</style>