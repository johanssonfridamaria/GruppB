<template>
  <div class="bg-ligthgrey py-5">
    <div class="container">
      <div
        class="border-bottom text-center border-2 border-info headline m-auto mb-5"
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
          img: require("@/assets/img/toothSearch.png"),
          title: "Tooth inspection",
          body:
            "Comprehensive review of the mouth and detection of broken teeth and other threats.",
        },
        {
          img: require("@/assets/img/toothremove.png"),
          title: "Tooth removal",
          body:
            "Any broken tooth is a threat to the body, so this danger should be removed from the mouth.",
        },
        {
          img: require("@/assets/img/removalTartar.png"),
          title: "Removal of tartar",
          body:
            "Tartar is the enemy of every human being, because through his presence we have unpleasant breath.",
        },
        {
          img: require("@/assets/img/polishandclean.png"),
          title: "Polishing and cleaning",
          body:
            "A simple and safe polishing treatment improves the health of teeth that will get a better look.",
        },
        {
          img: require("@/assets/img/dentalimplants.png"),
          title: "Dental implants",
          body:
            "The best solution when you can not save a healthy tooth and you need to apply artificial solutions.",
        },
        {
          img: require("@/assets/img/toothProtect.png"),
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
.headline {
  width: 60%;
  max-width: 30rem;
}
.bg-ligthgrey {
  background: #f7f7f7;
}
</style>