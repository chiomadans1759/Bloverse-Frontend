<template>
  <main id="bl-drafts-page">
    <Navbar/>
    <div class="container my-3 mb-5">
      <div class="row">
        <div class="col-lg-5 d-none d-sm-block">
          <div class="col-lg-12 mr-2">
            <profile displayInterest hideFollowing displayFollowers />
          </div>
          <div class="col-lg-12 mr-2">
            <div class="bg-white publish-container">
              <div class="publish-link-container">
                <router-link to="/" class="publish-link btn"><i class="fas fa-plus mr-2"></i> Publish An Article</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mt-2">
            <CreatorProfileActionsCard/>
          </div>
          <div class="col-lg-12 mr-2 mt-2">
            <div class="card contest-advert bg-white">
              <div class="card-img-overlay">
                <h3 class="card-title text-capitalize">Become a Content Consumer</h3>
                <p class="card-text text-capitalize caption">Publish your article to the world</p>
                <span class="d-flex justify-content-between mb-0">
                  <a href class="mt-4">Know more</a>
                  <a role="button" href="#" class="btn know-more-btn">Apply</a>
                </span>
              </div>
            </div>
            <div class="bl-footer">
              <div class="row company-name d-flex justify-content-center align-items-center">
                <div class="col-sm-3 text-lowercase">bloverse</div>
                <p class="col-sm-9">
                  <span class="text-capitalize dots">terms</span>
                  <span class="text-capitalize dots">privacy</span>
                  <span class="text-capitalize">feedback</span>
                </p>
              </div>
              <p class="row company-rights text-capitalize">2019 Bloverse. All Right Reserved</p>
            </div>
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
          <div class="border border-top-0 border-bottom-0 bg-white bl-content right-content">
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
