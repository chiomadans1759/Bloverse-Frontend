<template>
  <main id="bl-homepage" class="container-fluid bl-homepage">
    <div class="container bl-homepage__content">
      <div class="row bl-homepage__content--countryPicker">
        <country-options/>
      </div>

      <div class="row bl-homepage__content--categoryNav">
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
            <post-cards/>
            <trends/>
            <post-cards/>
            <photo-contest/>
            <post-cards/>
            <recommendations/>
          </div>
        </div>

        <div
          class="col-sm-4 d-none d-md-inline-block bl-homepage__content--publishedPosts__competition"
        >
          <div class="card contest-advert">
            <div class="card-img-overlay">
              <h1 class="card-title text-capitalize">Photo Contest
                <br>Competition
              </h1>
              <p class="card-text text-capitalize caption">'The story behind photos'</p>
              <a role="button" href="#" class="btn know-more-btn">Know more</a>
            </div>
          </div>
          <div class="bl-footer">
            <div class="row company-name">
              <div class="col-sm-3 font-weight-bold text-lowercase">bloverse</div>
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
    </div>
  </main>
</template>

<script>
import PostCards from "@/components/PostCards/PostCards";
import Trends from "@/components/Trends/Trends";
import Recommendations from "@/components/Recommendations/Recommendations.vue";
import PhotoContest from "@/components/PhotoContestCards/PhotoContest";
import CountryOptions from "@/components/CountryOptions/CountryOptions";

export default {
  name: "Homepage",
  components: {
    PostCards,
    Trends,
    Recommendations,
    PhotoContest,
    CountryOptions,
  }
};
</script>

<style lang="scss" scoped>
@import "./Homepage.scss";
</style>
