<template>
  <main id="bl-profile-page">
    <Navbar/>
    <div class="container my-3 mb-5">
      <div class="row">
        <div class="col-lg-5 d-none d-sm-block mb-4">
          <div class="col-lg-12 mr-2">
            <profile displayInterest hideFollowing displayFollowers/>
          </div>
          <div class="col-lg-12 mr-2">
            <div class="bg-white publish-container">
              <div class="publish-link-container">
                <router-link to="/" class="publish-link btn">Publish An Article</router-link>
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
              <p class="row company-rights text-capitalize">2018 Bloverse. All Right Reserved</p>
            </div>
          </div>
        </div>
        <!-- on mobile view only -->
        <div class="d-inline-flex d-sm-none initials">
          <a class="initials-link" href="#" id="navbarDropdown" role="button">SM</a>
          <i class="fal fa-long-arrow-right fa-2x back-icon initials-arrow"></i>
        </div>
        <!-- on mobile view only ends -->
        <div class="col-12 col-lg-7 col-xl-7 right-section p-0">
          <div class="navigation-bar">
            <creator-navigation active="posts" />
          </div>
          <div class="d-flex flex-wrap mt-4 bl-posts">
            <post-cards :hideCardBorder="hideCardBorder" hideUsername
              :customClasses="['bg-white']"
              hideMainActions
            />
          </div>
          <!-- <div class="mt-4 px-4 bg-white">
            <div class="row">
              <div class="mx-4 d-none d-sm-block w-100">
                <nav
                  class="navbar navbar-expand-lg navbar-light bg-white justify-content-end profile-navbar border_bottom"
                >
                  <div class>
                    <ul class="navbar-nav flex-row layout-nav">
                      <li :class="['nav-item', 'mr-4', 'py-2', {'active': active_tab === 'list'}]">
                        <span @click="toggleView('list')" to="#" class="nav-link list-view">
                          <span>
                            <i
                              class="fal fa-th-list mr-1"
                              :class="{'icon--active' : active_tab === 'list'}"
                            ></i>
                          </span>
                          List
                          <span class="sr-only">(current)</span>
                        </span>
                      </li>
                      <li :class="['nav-item', 'mr-4', 'py-2', {'active': active_tab === 'grid'}]">
                        <span @click="toggleView('grid')" to="#" class="nav-link grid-view">
                          <span>
                            <i
                              class="fal fa-th-large mr-1"
                              :class="{'icon--active' : active_tab === 'grid'}"
                            ></i>
                          </span>
                          Grid
                        </span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <post-card :hideCardBorder="hideCardBorder" hideUsername />

              <div class="list_view creator_profile__post" v-if="active_tab === 'list'">
                <post-cards :hideCardBorder="hideCardBorder" hideUsername />
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <Footer class="d-block d-lg-none d-xl-none"/>
  </main>
</template>

<script>
import PostCards from "@/components/PostCards/PostCards";
import PostCard from "@/components/PostCards/PostCard";
import Navbar from "@/components/Navbar/Navbar.vue";
import Profile from "@/components/ProfileCard/ProfileCard";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Footer from "@/components/Footer/Footer";
import RecommendationCard from "@/components/Recommendations/RecommendationCard";
import CreatorProfileActionsCard from "@/components/CreatorProfileActionsCard/CreatorProfileActionsCard";
import CreatorNavigation from "@/components/CreatorNavigation/CreatorNavigation";

export default {
  components: {
    Navbar,
    PostCards,
    PostCard,
    Profile,
    RecommendationCard,
    CategoryCard,
    CreatorProfileActionsCard,
    CreatorNavigation,
    Footer
  },
  data() {
    return {
      active_tab: "list",
      hideCardBorder: true
    };
  },
  methods: {
    toggleView(key) {
      this.active_tab = key;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./PostPage";
</style>

