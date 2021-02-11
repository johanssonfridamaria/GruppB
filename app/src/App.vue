<template>
  <div>

    <Topmenu/>
    <nav-bar />
    <showcase />
    <services />
    <appointment />
    <app-footer />
  </div>
</template>

<script>
import Topmenu from "./components/topmenu"
import Showcase from './components/Showcase'
import Services from "./components/Services/Services";
import AppFooter from "./components/Footer/AppFooter";
import NavBar from "./components/NavBar";
import Appointment from "./components/Appointment/Appointment";

export default {
  name: "App",
  components: {
    Showcase,
    Appointment,
    Services,
    NavBar,
    AppFooter,
    Topmenu

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