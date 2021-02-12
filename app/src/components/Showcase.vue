<template>
<div class="container-fluid">
  <!-- Carousel wrapper -->
  <div
    id="carouselBasicExample"
    class="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"></li>
      <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"></li>
      <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"></li>
    </ol>

    <!-- Inner -->
    <div class="carousel-inner">
      <!-- Single item -->
      <div class="carousel-item active">
        <img
          src="../assets/img/bild1.jpg"
          class="d-block w-100"
          alt="..."
          />
        <div class="carousel-caption d-none d-md-block">
          <div class="container">
            <h1>Modern technologies ensure safety</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <!-- <a href="./Aboutus.vue" class="btn btn-lg btn-primary">About our clinic</a> -->
          </div>
          <div class="container">
            <a href="#about" class="btn btn-lg btn-info">About our clinic</a>
          </div>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img
          src="../assets/img/bild2.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <div class="container">
            <h1>Modern technologies ensure safety</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#about" class="btn btn-lg btn-info">About our clinic</a>
          </div>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img
          src="../assets/img/bild3.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <div class="container">
            <h1>Modern technologies ensure safety</h1>
            <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <a href="#about" class="btn btn-lg btn-info">About our clinic</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <a
      class="carousel-control-prev"
      href="#carouselBasicExample"
      role="button"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselBasicExample"
      role="button"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
  <!-- Carousel wrapper -->
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.carousel-item {
  position: relative;
  height: 50rem;

}
@media screen and (max-width: 700px) {
  .carousel-item {
    max-height: 20rem;
  }

  
}
.container {
  padding-bottom: 50px;
}
</style>