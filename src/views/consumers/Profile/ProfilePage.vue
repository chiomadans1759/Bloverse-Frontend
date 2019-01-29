<template>
  <div class="container my-3 mb-5">
    <div class="row">
      <div class="col-lg-5  d-none d-sm-block">
        <div class="col-lg-12 mr-2">
          <profile />
        </div>
        <div class="col-lg-12 mt-2">
          <country-card />
        </div>
        <div class="col-lg-12 mt-2">
          <category-card />
        </div>
        <div class="col-lg-12 mt-2">
          <div class="card contest-advert bg-white">
            <div class="card-img-overlay">
              <h3 class="card-title text-capitalize">
                Become a Content Creator
              </h3>
              <p class="card-text text-capitalize caption">
                Publish your article to the world
              </p>
              <span class="d-flex justify-content-between mb-0">
                <a href="" class="mt-4">Know more</a>
                <a role="button" href="#" class="btn know-more-btn">
                  Apply
                </a>
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
            <p class="row company-rights text-capitalize">
              2018 Bloverse. All Right Reserved
            </p>
          </div>
        </div>
      </div>

      <!-- on mobile view only -->
      <div class="d-inline-flex d-sm-none initials">
        <a class="initials-link" href="#" id="navbarDropdown" role="button">
          SM
        </a>
        <i class="fal fa-long-arrow-right fa-2x back-icon initials-arrow"></i>
      </div>
      <!-- on mobile view only ends -->

      <div class="col-lg-7 border right-content bg-white bl-content">
        <div class="border-bottom">
          <nav class="navbar navbar-expand-lg navbar-light bg-white
            justify-content-center profile-navbar"
          >
            <div class="">
              <ul class="navbar-nav flex-row">
                <li class="nav-item active mr-4 py-2">
                  <router-link to="#" class="nav-link">
                    Read Later
                    <span class="number--active border rounded px-1 ml-2">5</span>
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
                <li class="nav-item py-2">
                  <router-link to="#" class="nav-link">
                    Previously Read
                    <span class="number border rounded px-1 ml-2">13</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="border-bottom mx-4 d-none d-sm-block">
          <nav class="navbar navbar-expand-lg navbar-light bg-white
            justify-content-end profile-navbar"
          >
            <div class="">
              <ul class="navbar-nav layout-nav">
                <li :class="['nav-item', 'mr-4', 'py-2', {'active': showListView}]">
                  <span @click="toggleView('list')" to="#" class="nav-link">
                    <span v-show='showListView'>
                        <i class="fal fa-th-list mr-1 icon--active"></i>
                      </span>
                    <span v-show='!showListView'>
                      <i class="fal fa-th-list mr-1 icon"></i>
                    </span>
                     List <span class="sr-only">(current)</span></span>
                </li>
                <li :class="['nav-item', 'mr-4', 'py-2', {'active': !showListView}]">
                  <span @click="toggleView('grid')" to="#" class="nav-link">
                    <span v-show="!showListView">
                      <i class="fal fa-th-large mr-1 icon--active"></i>
                    </span>
                    <span v-show="showListView">
                      <i class="fal fa-th-large mr-1 icon"></i>
                    </span>
                     Grid </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div v-if="!showListView" class="row m-4 p-2 d-none d-sm-flex">
          <div class="col-lg-6 my-2">
            <recommendation-card type="consumer"/>
          </div>
          <div class="col-lg-6 my-2">
            <recommendation-card type="consumer"/>
          </div>
          <div class="col-lg-6 my-2">
            <recommendation-card type="consumer"/>
          </div>
          <div class="col-lg-6 my-2">
            <recommendation-card type="consumer"/>
          </div>
          <div class="col-lg-6 my-2">
            <recommendation-card type="consumer"/>
          </div>
        </div>

        <div v-if="showListView" class="col-lg-12 my-2 d-none d-sm-block">
          <post-card :hideCardBorder="hideCardBorder" />
          <post-card :hideCardBorder="hideCardBorder" />
          <post-card :hideCardBorder="hideCardBorder" />
          <post-card :hideCardBorder="hideCardBorder" />
          <post-card :hideCardBorder="hideCardBorder" />
        </div>

        <!-- mobile view -->
        <div class="row d-sm-none">
          <post-cards :hideCardBorder="hideCardBorder" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendationCard from '@/components/Recommendations/RecommendationCard';
import Profile from '@/components/ProfileCard/ProfileCard';
import CountryCard from '@/components/CountryCard/CountryCard';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import PostCard from '@/components/PostCards/PostCard';
import PostCards from '@/components/PostCards/PostCards';

export default {
  components: {
    RecommendationCard,
    Profile,
    CountryCard,
    CategoryCard,
    PostCard,
    PostCards,
  },
  data() {
    return {
      showListView: false,
      hideCardBorder: true,
    }
  },
  methods: {
    toggleView(type) {
      this.showListView = type === 'list';
    }
  }
}
</script>

<style scoped lang="scss">
  @import './ProfilePage';
</style>
