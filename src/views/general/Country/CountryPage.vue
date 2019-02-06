<template>
  <main id="country-page">
    <div class="main">
        <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" />
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-sm-7 col-lg-6 pt-5">
            <h5 class="pb-1">Select Your Favourite Country</h5>
            <p class="select-t">Selected {{consumers.selectedCountries.length}} countries</p>
            <div>
              <choose-country></choose-country>
            </div>
          </div>
        </div>
        <div class="card country-footer py-2 rounded-0">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col-sm-7 col-lg-6 d-flex justify-content-between">
                <button class="btn btn-link btn-sm" type="button">Skip</button>
                <button class="btn btn-sm btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ChooseCountry from "@/components/ChooseCountry/ChooseCountry.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import { mapState } from "vuex";

export default {
  components: { ChooseCountry, Navbar },
  data() {
    return {
      showNavigations: false,
      showBackArrow: true
    };
  },
  computed: {
    ...mapState(["consumers"])
  }
};
</script>

<style lang="scss" scoped>
@import "./CountryPage";
</style>
