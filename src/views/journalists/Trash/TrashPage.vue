<template>
  <main id="bl-trash-page">
    <Navbar/>
    <div class="container my-3 mb-5">
      <div class="row">
        <div class="col-lg-5 d-none d-sm-block">
          <div class="col-lg-12 mr-2">
            <profile
              displayInterest
              hideFollowing
              displaySocial
              displayCountry
            />
          </div>
        </div>

        <!-- on mobile view only -->
        <div class="d-inline-flex d-sm-none initials">
          <a class="initials-link" href="#" id="navbarDropdown" role="button">SM</a>
          <i class="fal fa-long-arrow-right fa-2x back-icon initials-arrow"></i>
        </div>
        <!-- on mobile view only ends -->

        <div class="col-12 col-lg-7 col-xl-7 bg-transparent right-section p-0 bl-trash-display">
          <div class="navigation-bar">
            <creator-navigation active="trash" />
          </div>
          <div class="trash-content border-top-0 border-bottom-0 border  py-0 mt-4">
            <trash />
          </div>
        </div>
      </div>
    </div>
    <Footer class="d-block d-lg-none d-xl-none"/>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Profile from "@/components/ProfileCard/ProfileCard";
import Footer from "@/components/Footer/Footer";
import CreatorProfileActionsCard from "@/components/CreatorProfileActionsCard/CreatorProfileActionsCard";
import CreatorNavigation from "@/components/CreatorNavigation/CreatorNavigation";
import Trash from '@/components/Trash/Trash';

export default {
  components: {
    Navbar,
    Profile,
    CreatorProfileActionsCard,
    Footer,
    CreatorNavigation,
    Trash,
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped lang="scss">
  @import "./TrashPage";
</style>
