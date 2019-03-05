<template>
  <main id="bl-profile-page">
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

