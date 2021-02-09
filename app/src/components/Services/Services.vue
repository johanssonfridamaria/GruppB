<template>
  <div class="container">
    <div class="border-bottom text-center">
      <h1>Our Services</h1>
    </div>
    <card-container />
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
          img: "appsrcassets\toothSearch.png",
          title: "Tooth inspection",
          body:
            "Comprehensive review of the mouth and detection of broken teeth and other threats.",
        },
        {
          img: "appsrcassets\toothremove.png",
          title: "Tooth removal",
          body:
            "Any broken tooth is a threat to the body, so this danger should be removed from the mouth.",
        },
        {
          img: "appsrcassets\removalTartar.png",
          title: "Removal of tartar",
          body:
            "Tartar is the enemy of every human being, because through his presence we have unpleasant breath.",
        },
        {
          img: "appsrcassetspolishandclean.png",
          title: "Polishing and cleaning",
          body:
            "A simple and safe polishing treatment improves the health of teeth that will get a better look.",
        },
        {
          img: "../../assets/dentalimplants.png",
          title: "Dental implants",
          body:
            "The best solution when you can not save a healthy tooth and you need to apply artificial solutions.",
        },
        {
          img: "appsrcassets\toothProtect.png",
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

<style>
</style>