<template>
  <div>
    <nav-bar />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "./components/Footer/AppFooter";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
    AppFooter,
  },
};
</script>

<style></style>;
