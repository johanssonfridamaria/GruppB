<template>
  <div>
    <nav-bar />
      <services />
    <app-footer />
  </div>
</template>

<script>

import Services from "./components/Services/Services.vue";
import AppFooter from "./components/Footer/AppFooter";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
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
