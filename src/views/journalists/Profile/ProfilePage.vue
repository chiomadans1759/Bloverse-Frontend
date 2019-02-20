<template>
  <main id="bl-profile-page">
    <Navbar/>
    <div class="container my-3 mb-5">
      <div class="row">
        <div class="col-lg-5 d-none d-sm-block mb-4">
          <div class="col-lg-12 mr-2">
            <profile
            displayInterest hideFollowing displayFollowers/>
          </div>
          <div class="col-lg-12 mr-2">
            <div class="bg-white publish-container">
              <div class="publish-link-container">
                <router-link to="/publish" class="publish-link btn">Publish An Article</router-link>
              </div>
            </div>
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
        <!-- on mobile view only ends -->
        <div class="col-12 col-lg-7 col-xl-7 right-section p-0">
          <div class="navigation-bar">
            <creator-navigation />
          </div>
          <div class="bg-white pt-1 tab-content">
            <div>
              <div class="mt-4 px-4">
                <div class="row">
                  <div class="col-12 col-lg-6 col-lg-6 mb-4">
                    <div class="card top-card">
                      <i class="card-icon fal fa-rocket"></i>
                      <div class="card-body row">
                        <div class="col-6 d-flex flex-column justify-content-between">
                          <h5 class="card-title text-white font-weight-bold">Published</h5>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                          <h2 class="text-white">3,252</h2>
                        </div>
                      </div>
                      <div class="p-3">
                        <p class="sub-text text-white">
                          <span class="font-weight-bold">2</span> today
                        </p>
                        <p class="sub-text text-white">
                          <span class="font-weight-bold">6</span> this week
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 col-lg-6">
                    <div class="card top-card">
                      <i class="card-icon fal fa-stars"></i>
                      <div class="card-body row">
                        <div class="col-6 d-flex flex-column justify-content-between">
                          <h5 class="card-title text-white font-weight-bold">Points</h5>
                        </div>
                        <div class="col-6 d-flex justify-content-end">
                          <h2 class="text-white">0.05</h2>
                        </div>
                      </div>
                      <div class="p-3">
                        <p class="sub-text text-white">
                          <span class="font-weight-bold">6</span> of
                          <span class="font-weight-bold">94</span> Nigeria
                          <span class="fal fa-long-arrow-up"></span>
                        </p>
                        <p class="sub-text text-white">
                          <span class="font-weight-bold">5,064</span> of
                          <span class="font-weight-bold">9,124</span> Global
                          <span class="fal fa-long-arrow-down"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <p class="px-4">
                  Total number of views
                  <span>
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Last 24 hours</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Last 3 days</a>
                      <a class="dropdown-item" href="#">Last 7 days</a>
                      <a class="dropdown-item" href="#">Last 30 days</a>
                      <div class="dropdown-divider"></div>
                      <a data-toggle="modal" href="#custom-date-modal" class="dropdown-item">Choose Custom Date</a>
                    </div>
                  </span>
                </p>
                <modal target="custom-date-modal" title="Custom Date" actionText="Apply Filter">
                  <div class="bl-modal-content">
                    <p>Choose Date Range:</p>
                    <DatePicker
                      mode="range"
                      v-model="selectedDate"
                      show-caps
                      :input-props='{ class: "form-control", readonly: true }'></DatePicker>
                  </div>
                </modal>
                <div class="p-0 p-lg-2 p-xl-2 gchart-container">
                  <GChart type="GeoChart" :data="chartData" :options="chartOptions" ref="chartData"/>
                </div>
              </div>
              <div class="mt-4 px-4">
                <div class="row">
                  <div class="col-12 col-lg-8 col-xl-8 mb-2">
                    <div class="row">
                      <div class="col-12">
                        <span class="first-circle fas fa-circle"></span> Nigeria(64)
                        <span class="second-circle fas fa-circle ml-4"></span> Kenya(36)
                        <span class="third-circle fas fa-circle ml-4"></span> Mexico(6)
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4 col-xl-4 mb-4">
                    <div class="card p-2">
                      <div class="row">
                        <div class="col-10 col-lg-6 col-xl-6 text-right font-weight-bold">Country:</div>
                        <div class="col-2 col-lg-6 col-xl-6 text-right font-weight-bold">3</div>
                      </div>
                      <div class="row">
                        <div class="col-10 col-lg-6 col-xl-6 text-right font-weight-bold">Total:</div>
                        <div class="col-2 col-lg-6 col-xl-6 text-right font-weight-bold">106</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";
import CreatorProfileActionsCard from "@/components/CreatorProfileActionsCard/CreatorProfileActionsCard";
import CreatorNavigation from "@/components/CreatorNavigation/CreatorNavigation";
import { GChart } from "vue-google-charts";
import { setupCalendar, DatePicker } from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";

setupCalendar({
  firstDayOfWeek: 2
});

export default {
  components: {
    Navbar,
    Profile,
    CategoryCard,
    CreatorProfileActionsCard,
    GChart,
    DatePicker,
    Footer,
    Modal,
    CreatorNavigation,
  },
  data() {
    return {
      chartData: [
        ["Country", "Popularity"],
        ["Nigeria", 600],
        ["Kenya", 500],
        ["Mexico", 600]
      ],
      chartOptions: {
        chart: {
          backgroundColor: "#f5f5f5",
          datalessRegionColor: "#c2c2c2"
        },
        colorAxis: { colors: ["#c5c5c5", "#2F80ED"] },
        legend: {},
        keepAspectRatio: true
      },
      selectedDate: {
        start: null,
        end: null
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "./ProfilePage";
</style>

