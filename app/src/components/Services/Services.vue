<template>
  <div class="bg-ligthgrey py-5">
    <div class="container">
      <div
        class="border-bottom text-center border-2 border-green headline m-auto mb-5"
      >
        <h2>Our Services</h2>
      </div>
      <card-container />
    </div>
  </div>
</template>


<script>
import CardContainer from "./CardContainer.vue";

export default {
  components: {
    CardContainer,
  },
  data() {
    return {
      services: [
        {
          img: require("@/assets/toothSearch.png"),
          title: "Tooth inspection",
          body:
            "Comprehensive review of the mouth and detection of broken teeth and other threats.",
        },
        {
          img: require("@/assets/toothremove.png"),
          title: "Tooth removal",
          body:
            "Any broken tooth is a threat to the body, so this danger should be removed from the mouth.",
        },
        {
          img: require("@/assets/removalTartar.png"),
          title: "Removal of tartar",
          body:
            "Tartar is the enemy of every human being, because through his presence we have unpleasant breath.",
        },
        {
          img: require("@/assets/polishandclean.png"),
          title: "Polishing and cleaning",
          body:
            "A simple and safe polishing treatment improves the health of teeth that will get a better look.",
        },
        {
          img: require("@/assets/dentalimplants.png"),
          title: "Dental implants",
          body:
            "The best solution when you can not save a healthy tooth and you need to apply artificial solutions.",
        },
        {
          img: require("@/assets/toothProtect.png"),
          title: "Effective protection",
          body:
            "The cheapest tooth protection is their cleaning and a regular visit to the dentist.",
        },
      ],
    };
  },
  provide() {
    return {
      services: this.services,
    };
  },
};
</script>

<style scoped>
.border-green {
  border-color: var(--green) !important;
}
.headline {
  width: 60%;
  max-width: 30rem;
}
.bg-ligthgrey {
  background: var(--ligthgrey);
}
</style>