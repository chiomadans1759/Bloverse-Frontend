<template>
  <main id="bl-homepage" class="container-fluid bl-homepage">
    <div class="container bl-homepage__content">
      <div class="row bl-homepage__content--countryPicker">
        <country-options/>
      </div>

      <div class="row bl-homepage__content--categoryNav" id="sticky-top">
        <div class="col-6 categories">
          <ul class="list-inline categories-list">
            <!-- hide on mobile devices -->
            <li
              class="list-inline-item categories-list-item bl-mobile-hide d-none d-lg-inline-block"
            >
              <a href="#" class="active">All</a>
              <a href="#" class="d-none d-lg-inline-block">Category one</a>
              <a href="#" class="d-none d-lg-inline-block">Category two</a>
              <a href="#" class="d-none d-lg-inline-block">Category three</a>
            </li>

            <!-- show on mobile devices -->
            <li
              class="list-inline-item categories-list-item bl-mobile-show d-inline-block d-lg-none"
            >
              <a
                href="#"
                class="nav-link dropdown-toggle active text-truncate"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                id="navbarDropdown"
                aria-expanded="false"
              >
                All Categories
                <i class="fal fa-angle-down"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-left more-categories"
                aria-labelledby="navbarDropdown"
              >
                <div class="d-flex more-categories__categories">
                  <div class="favourite-categories">
                    <p class="header">Favourite Categories</p>
                    <p class="row favourite-categories-list">
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                    </p>
                  </div>
                  <div class="other-categories">
                    <p class="header">Other Categories</p>
                    <p class="row other-categories-list">
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li class="list-inline-item categories-list-item more d-none d-lg-inline-block">
              <a
                href="#"
                class="nav-link dropdown-toggle ellipsis"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                id="navbarDropdown"
                aria-expanded="false"
              >
                <i class="fal fa-ellipsis-h"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-left more-categories"
                aria-labelledby="navbarDropdown"
              >
                <div class="d-flex more-categories__categories">
                  <div class="favourite-categories">
                    <p class="header">Favourite Categories</p>
                    <p class="row favourite-categories-list">
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                    </p>
                  </div>
                  <div class="other-categories">
                    <p class="header">Other Categories</p>
                    <p class="row other-categories-list">
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                      <span class="col-6">More Categories</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-6 most-recent">
          <span class="sort">
            <i class="fal fa-sort"></i>
          </span>
          <div id="bl-dropdown" class="btn-group bl-dropdown">
            <button
              type="button"
              class="btn bl-dropdown-btn"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-reference="parent"
            >
              <p class="country">
                Most Recent
                <i class="fal fa-angle-down"></i>
              </p>
            </button>
            <div class="dropdown-menu bl-dropdown-menu" aria-labelledby="dropdownMenuReference">
              <p class="dropdown-item country">Most Viewed</p>
              <p class="dropdown-item country">Most commented</p>
              <p class="dropdown-item country">Most Shared</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row bl-homepage__content--publishedPosts">
        <div class="col-sm-8 bl-homepage__content--publishedPosts__feeds">
          <div class="container-fluid feeds-posts">
            <div class="bl-homepage__no-feed card" v-if="noPublishedPost">
              <div class="bl-homepage__no-feed--content">
                <span><i class="fal fa-newspaper fa-3x greyColor"></i></span>
                <p class="mt-4"><strong>No content for this filter result yet</strong></p>
                <p class="text-center mt-2 greyColor">Explore the various categories available, read <br>articles and give feedback</p>
              </div>
            </div>
              <div v-else>
                <post-cards />
                <trends/>
                <post-cards/>
                <photo-contest/>
                <post-cards/>
              </div>
          </div>
        </div>

        <div
          class="col-sm-4 d-none d-md-inline-block pt-4 bl-homepage__content--publishedPosts__competition"
        >
          <div class="card contest-advert">
            <div class="card-img-overlay">
              <h1 class="card-title text-capitalize">Become a Content Creator
                <br>
              </h1>
              <p class="card-text text-capitalize caption">Publish your article to the world</p>
              <router-link role="button" to="/photocontest" class="btn know-more-btn">Apply</router-link>
              <div class="robot-image"></div>
            </div>
          </div>
          <div class="bl-footer">
            <div class="row company-name">
              <div class="col-sm-3 font-weight-bold text-lowercase">bloverse</div>
              <p class="col-sm-9">
                <span class="text-capitalize dots">terms</span>
                <span class="text-capitalize dots">privacy</span>
                <span data-toggle="modal" href="#feedback-modal" class="text-capitalize">feedback</span>
              </p>
            </div>
            <p class="row company-rights text-capitalize">2019 Bloverse. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostCards from "@/components/PostCards/PostCards";
import Trends from "@/components/Trends/Trends";
import PhotoContest from "@/components/PhotoContestCards/PhotoContest";
import CountryOptions from "@/components/CountryOptions/CountryOptions";

export default {
  name: "ConsumerHomePage",
  components: {
    PostCards,
    Trends,
    PhotoContest,
    CountryOptions,
  },
  data() {
    return {
      noPublishedPost: false,
    }
  },
  methods: {
    stickyNav() {
      const categoryNav = document.getElementById("sticky-top");

      if (window.innerWidth >= 979) {
        if (window.pageYOffset >= 200) {
          categoryNav.classList.add("bl-homepage__sticky-top");
        } else if (window.pageYOffset < 200) {
          categoryNav.classList.remove("bl-homepage__sticky-top");
        }
      }
    }
  },
  created() {
    window.onscroll = () => {
      this.stickyNav();
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./ConsumerHomePage.scss";
</style>
