<template>
  <main id="bl-drafts-page">
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
          <button class="initials-link" id="navbarDropdown" role="button">SM</button>
          <i class="fal fa-long-arrow-right fa-2x back-icon initials-arrow"></i>
        </div>
        <!-- on mobile view only ends -->

        <div class="px-0 px-md-3 col-lg-7">
          <div class="navigation-bar">
            <creator-navigation active="drafts" />
          </div>
          <div class="border border-top-0 border-bottom-0 bg-white bl-content mt-4 right-content">
            <DraftItemCard />
            <DraftItemCard />
            <DraftItemCard />
            <DraftItemCard />
          </div>
        </div>
      </div>
    </div>
    <creator-publish-icon class="d-block d-md-none" />
    <Footer class="d-block d-lg-none d-xl-none"/>
  </main>
</template>

<script>
import Profile from '@/components/ProfileCard/ProfileCard';
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer";
import CreatorProfileActionsCard from "@/components/CreatorProfileActionsCard/CreatorProfileActionsCard";
import DraftItemCard from '@/components/DraftItemCard/DraftItemCard';
import CreatorNavigation from "@/components/CreatorNavigation/CreatorNavigation";
import CreatorPublishIcon from '@/components/CreatorPublishIcon/CreatorPublishIcon';

export default {
  components: {
    Navbar,
    Profile,
    CreatorPublishIcon,
    CreatorProfileActionsCard,
    DraftItemCard,
    CreatorNavigation,
    Footer,
  },
  data() {
    return {

    }
  },
};
</script>

<style lang="scss" scoped>
@import "./DraftsPage";
</style>
