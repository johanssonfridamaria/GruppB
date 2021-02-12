<template>
   <div>
            <div class="about-section">
              <div class="inner-container">
                <p class="headline" id="about">Dential<span style="color: aqua;">Clinic</span> is a modern medical and dental clinic
                </p>
                  
                  <p class="text">
                    The DentialClinic Center located in the city of Stockholm is one of the most modern 
                    dentistry in Sweden. It was created for demanding patients who expect the 
                    highest quality of services combined with comfort and a plesqant atmosphere.
        
                    The highest-class dental equipment possessed by the DentialClinic center enables
                    complicated procedures to be carried out. In our dental practice we combine passion,
                    technology and quality. We strive to fulfill your dreams of a wonderful smile.
                  </p>
                  
                  <p class="numbers">
                    <span >9 850</span>
                    <span >12 890</span>
                    <span >24/7</span>

                  <p class="subtext">
                    <span>Happy clients</span>
                    <span>Performed treatments</span>
                    <span>Open clinic</span>
                  </p>
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

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  align-content: left;
  justify-content: left;
  background-color: white;
}

  .about-section {
      background: url(Aboutus.png) no-repeat right;
      background-size: 55%;
      overflow: hidden;
      
  }
  .inner-container {
    width: 55%;
    float: left;
    padding-bottom: 264px;
    margin-left: 0px;
  
  }
  .headline {
    margin-bottom: 1px;
    font-size: 70px;
    font-weight: 0;
    
  }
  
  .text {
    font-size: 26px;
    color: grey;
    line-height: 30px;
  }    
    
.numbers{
    display: flex;
    justify-content: space-between;
    font-size: 65px;
    color: aqua;
    line-height: 30px;
   
    text-align: center;
    margin-bottom: 40px;
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
}
</style>
