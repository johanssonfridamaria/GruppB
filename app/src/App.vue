<template>
  <div>
  <nav-bar />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "./components/Footer/AppFooter";
import NavBar from './Components/NavBar';

export default {
  name: "App",
  components: {
    AppFooter,
    NavBar,
  },
};

<style >
</style>