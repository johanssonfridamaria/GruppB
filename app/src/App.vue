<template>
  <div>
    <services />
  </div>
</template>

<script>
import Services from "./components/Services/Services.vue";

export default {
  name: "App",
  components: {
    Services,
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
