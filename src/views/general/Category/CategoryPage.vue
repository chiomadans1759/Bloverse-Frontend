<template>
  <main id="category-page">
    <div class="main">
        <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" customClass="back-nav"/>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-sm-7 col-lg-6 pt-5">
            <h5 class="pb-1">Select Your Interest</h5>
            <p class="select-t">Selected {{consumers.selectedCategories.length}} categories</p>
            <div>
              <choose-catergory></choose-catergory>
            </div>
          </div>
        </div>
        <div class="card category-footer py-2 rounded-0">
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
import ChooseCatergory from "@/components/ChooseCategory/ChooseCategory.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import { mapState } from "vuex";

export default {
  components: { ChooseCatergory, Navbar },
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
@import "./CategoryPage";
</style>
