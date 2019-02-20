<template>
  <div class="container my-3 mb-5">
    <div class="row">
      <div class="col-lg-5  d-none d-sm-block">
        <div class="col-lg-12 mr-2">
          <profile v-if="showMobileProfile" :hideMobileUserInfo="hideMobileUserInfo" />
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
      <div v-if="showMobileProfile" class="d-inline-flex d-sm-none initials"
        @click="showMobileUserInfo"
      >
        <button class="initials-link" id="navbarDropdown" role="button">
          SM
        </button>
        <i class="fal fa-long-arrow-right fa-2x back-icon initials-arrow"></i>
      </div>
      <!-- on mobile view only ends -->

      <div class="col-lg-7 col-md-11 col-sm-12 right-content bg-transparent bl-content">
        <!-- read navigation -->
        <div   class="border-bottom">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent
            justify-content-start profile-navbar"
          >
            <div class="nav-content">
              <ul class="navbar-nav flex-row">
                <li class="nav-item mr-4 read-later" @click="toggleReadLater"
                  :class="{'active': !showPrevRead}"
                >
                  <router-link to="#" class="nav-link px-0">
                    Read Later
                    <span class="border rounded px-1 ml-2"
                    :class="{'number': showPrevRead, 'number--active': !showPrevRead}"
                    >
                      5
                    </span>
                    <span class="sr-only">(current)</span>
                  </router-link>
                </li>
                <li class="nav-item prev-read" @click="togglePrevRead"
                  :class="{'active': showPrevRead}"
                >
                  <router-link to="#" class="nav-link px-0">
                    Previously Read
                    <span class="border rounded px-1 ml-2"
                      :class="{'number': !showPrevRead, 'number--active': showPrevRead}"
                    >
                      13
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <!-- read navigation ends -->

        <div class="mt-4 border main-contents bg-white">
          <!-- view navigation -->
          <div v-if="!noSavedPost" class="border-bottom d-none d-sm-block">
            <nav class="navbar navbar-expand-lg navbar-light bg-white
              justify-content-end profile-navbar"
            >
              <div class="">
                <ul class="navbar-nav flex-row layout-nav">
                  <li :class="['nav-item', 'mr-4', 'py-2', {'active': !showListView}]">
                    <span @click="toggleView('grid')" to="#" class="nav-link grid-view">
                      <span v-show="!showListView">
                        <i class="fal fa-th-large mr-1 icon--active"></i>
                      </span>
                      <span v-show="showListView">
                        <i class="fal fa-th-large mr-1 icon"></i>
                      </span>
                      Grid </span>
                  </li>
                  <li :class="['nav-item', 'mr-4', 'py-2', {'active': showListView}]">
                    <span @click="toggleView('list')" to="#" class="nav-link list-view">
                      <span v-show='showListView'>
                          <i class="fal fa-th-list mr-1 icon--active"></i>
                        </span>
                      <span v-show='!showListView'>
                        <i class="fal fa-th-list mr-1 icon"></i>
                      </span>
                      List <span class="sr-only">(current)</span></span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <!-- view navigation ends -->

          <!-- read-later content -->
          <div v-if="!showPrevRead">
            <!-- grid view -->
            <div v-if="!showListView" class="row mx-0 d-none d-sm-flex flex-wrap">
              <post-cards />
            </div>
            <!-- grid view ends  -->

            <!-- list view -->
            <div v-if="showListView" class="row mx-0 d-none d-sm-flex flex-wrap">
              <post-cards />
            </div>
            <!-- list view ends  -->
          </div>
          <!-- read-later content ends -->

          <!-- previously-read content -->
          <div v-else class="d-none d-sm-block">
            <!-- grid view  -->
            <div v-if="!showListView" class="row m-4 p-2 d-none d-sm-flex">
              <div class="col-lg-6 my-2">
                <recommendation-card type="consumer" customClass="profile-card" :isConsumer="true"/>
              </div>
              <div class="col-lg-6 my-2">
                <recommendation-card type="consumer" customClass="profile-card" :isConsumer="true"/>
              </div>
              <div class="col-lg-6 my-2">
                <recommendation-card type="consumer" customClass="profile-card" :isConsumer="true"/>
              </div>
              <div class="col-lg-6 my-2">
                <recommendation-card type="consumer" customClass="profile-card" :isConsumer="true"/>
              </div>
              <div class="col-lg-6 my-2">
                <recommendation-card type="consumer" customClass="profile-card" :isConsumer="true"/>
              </div>
            </div>
            <!-- grid view ends -->

            <!-- list view -->
            <div v-if="showListView" class="col-lg-12 my-2 d-none d-sm-block">
              <post-card :hideCardBorder="hideCardBorder" :isConsumer="true" />
              <post-card :hideCardBorder="hideCardBorder" :isConsumer="true" />
              <post-card :hideCardBorder="hideCardBorder" :isConsumer="true" />
              <post-card :hideCardBorder="hideCardBorder" :isConsumer="true" />
              <post-card :hideCardBorder="hideCardBorder" :isConsumer="true" />
            </div>
            <!-- list view ends  -->
          </div>
          <!-- previously-read content ends -->

          <!-- no-saved-posts -->
          <div v-if="noSavedPost"
            class="d-flex no-saved-posts justify-content-center align-items-center"
          >
            <div class="no-saved-posts__msg">
              <p class="bookmark mb-4">
                <i class="fal fa-bookmark bookmark-img"></i>
              </p>
              <p class="font-weight-bold mb-1 message">
                You have not saved any articles yet.
              </p>
              <p class="message">
                Save you favourite articles so you can read them when you're ready.
              </p>
            </div>
          </div>
          <!-- no-saved-posts ends -->

          <!-- mobile view -->
          <div  v-if="!noSavedPost" class="row d-sm-none">
            <post-cards v-if="showMobileProfile" :hideCardBorder="hideCardBorder" />
            <user-info-mobile v-if="!showMobileProfile"
              :hideMobileUserInfo="hideMobileUserInfo"
            />
          </div>
          <!-- mobile view ends -->
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
import UserInfoMobile from '@/components/UserInfoMobile/UserInfoMobile';

export default {
  components: {
    RecommendationCard,
    Profile,
    CountryCard,
    CategoryCard,
    PostCard,
    PostCards,
    UserInfoMobile,
  },
  data() {
    return {
      showListView: false,
      hideCardBorder: true,
      showPrevRead: false,
      showMobileProfile: true,
      noSavedPost: false,
    }
  },
  methods: {
    toggleView(type) {
      this.showListView = type === 'list';
    },
    togglePrevRead() {
      this.showPrevRead = true;
      this.noSavedPost = false;
    },
    toggleReadLater() {
      this.showPrevRead = false;
      this.noSavedPost = true;
    },
    showMobileUserInfo() {
      this.showMobileProfile = false;
    },
    hideMobileUserInfo() {
      this.showMobileProfile = true;
    },
  }
}
</script>

<style scoped lang="scss">
  @import './ProfilePage';
</style>
