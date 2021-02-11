<template>
  <div>
    <nav-bar />
      <services />
      <appointment />
    <app-footer />
  </div>
</template>

<script>

import Services from "./components/Services/Services.vue";
import AppFooter from "./components/Footer/AppFooter";
import NavBar from "./components/NavBar";
import Appointment from "./components/Appointment/Appointment.vue";

export default {
  name: "App",
  components: {
    Appointment,
   Services,
    NavBar,
    AppFooter,

  },
};
</script>


<style>
:root {
  --green: #25e6c8;
  --blue: #2baaec;
  --ligthgrey: #f7f7f7;
  --grey: #626262;
  --black: #363636;
}
</style>
