<template>
  <div class="about-section ">
   <div class="container">
              <div class="inner-container">
                <div class="border-bottom border-4 border-info headline mb-3">
                <h1 id="about" class="h1">Dential<span style="color: aqua;">Clinic</span> is a modern medical and dental clinic
                </h1>
                </div>
                  
                  <p class="pb-5">
                    The DentialClinic Center located in the city of Stockholm is one of the most modern 
                    dentistry in Sweden. It was created for demanding patients who expect the 
                    highest quality of services combined with comfort and a pleasant atmosphere.
        
                    The highest-class dental equipment possessed by the DentialClinic center enables
                    complicated procedures to be carried out. In our dental practice we combine passion,
                    technology and quality. We strive to fulfill your dreams of a wonderful smile.
                  </p>
                  
                  <h2 class="numbers">
                    <span >9 850</span>
                    <span >12 890</span>
                    <span >24/7</span>
                  </h2>  

                  <p class="subtext">
                    <span>Happy clients</span>
                    <span>Performed treatments</span>
                    <span>Open clinic</span>
                  </p>
                
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

  .about-section {
      background: url("../assets/img/AboutUs.png") no-repeat right;
      background-size: 40%;
      overflow: hidden;
      /* height: 40rem; */
      padding: 5rem 0;
      
  }

  .h1{
    width: 80%;
  }

  .headline {
  width: 100%;
  max-width: 50rem;
}
  .inner-container {
    width: 55%;
    float: left;
  
  }

.numbers{
    display: flex;
    justify-content: space-between;
    color: aqua;
    /* line-height: 30px; */
    text-align: center;
    margin-bottom: 1rem;
}
.subtext{
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    color:black;
    line-height: 30px;
   
    text-align: center;
    margin-bottom: 0px;
}
/*   
  @media screen and (max-width: 1200px) {
    .inner-container {
      padding: 80px;
    }
  } */
  @media screen and (max-width: 1000px) {
    .about-section {
      background-size: 0;
    }

  }
  @media screen and (max-width: 600px) {
    /* .about-section {
      padding: 0;
    } */
    .inner-container {
      width: 100%;
    }
  }

</style>
