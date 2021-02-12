<template>
  <div>
    <topmenu />
    <nav-bar />
    <showcase />
    <aboutus />
    <services />
    <appointment />
    <app-footer />
  </div>
</template>

<script>
import Topmenu from "./components/topmenu";
import Showcase from "./components/Showcase";
import Services from "./components/Services/Services";
import AppFooter from "./components/Footer/AppFooter";
import NavBar from "./components/NavBar";
import Appointment from "./components/Appointment/Appointment";
import Aboutus from "./components/Aboutus";

export default {
  name: "App",
  components: {
    Aboutus,
    Showcase,
    Appointment,
    Services,
    NavBar,
    AppFooter,
    Topmenu,
  },
  created() {
    window.location = '#'
  }
};
</script>
 
<style>
</style>
