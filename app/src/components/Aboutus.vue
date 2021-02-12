<template>
  <div>
    <div class="about-section">
      <div class="inner-container">
        <h1 id="about">About us</h1>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          perspiciatis maiores. Animi delectus odio eum soluta in vero sint ab
          temporibus voluptas modi. Inventore, architecto accusamus corrupti
          perferendis expedita mollitia.
        </p>
        <div class="skill">
          <span>... </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutus",
  components: {},
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: white;
}

.inner-container {
  width: 55%;
  float: none;
  background-color: white;
  padding: 150px;
}
.inner-container h1 {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 900;
}
.text {
  font-size: 13px;
  color: black;
  line-height: 30px;
  text-align: justify;
  margin-bottom: 40px;
}
@media screen and (max-width: 1200px) {
  .inner-container {
    padding: 80px;
  }
}
@media screen and (max-width: 1000px) {
  .about-section {
    background-size: 100%;
    padding: 100px 40px;
  }
  .inner-container {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .about-section {
    padding: 0;
  }
  .inner-container {
    width: 100%;
  }
}
</style>
