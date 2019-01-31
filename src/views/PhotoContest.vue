<template>
  <main id="photo-contest">
    <photo-contest-header/>

    <section
      class="text-center text-white my-0 position-relative d-flex justify-content-center align-items-center top-section">
      <div class>
        <div class="overlay"></div>
        <img class="img-fluid w-100" src="@/assets/photo5.jpg" alt>
      </div>
      <div class="container" style="z-index: 1;">
        <div class="row">
          <div class="col-md-12">
            <div class="mb-5">
              <p class="display-2 font-weight-normal mb-3">Bloverse Photo Contest</p>
              <p class="lead">‘The Story Behind The Photo’</p>
              <router-link to="/creators/apply" class="btn btn-primary mt-5">Enter Photo Contest</router-link>
            </div>
            <div class="pt-3">
              <button @click.prevent="showVid()" class="btn rounded-circle btn-play">
                <i class="fas fa-play"></i>
              </button>
              <span class="ml-3">Watch Video</span>
            </div>

            <video-modal
              v-if="show_video"
              @close="closeVid"
              source="https://www.youtube.com/embed/CjKVWRErsN8" />
          </div>
        </div>
      </div>
    </section>

    <section class="detail-wrap">
      <div class="container">
        <div class="row justify-content-center align-items-center detail-content">
          <div class="col-sm-10 col-md-9 col-lg-5 pr-lg-4">
            <div class="detail">
              <h1 class="title">How to enter:</h1>
              <ol>
                <li>
                  <router-link to="/creators">Apply</router-link> as a content creator
                </li>
                <li>Submit ‘Story Behind The Photo’ post</li>
                <li>Share on IG, FB, Twitter (take a screenshot of your article and upload to your IG account, put link in post comments or Bio)</li>
                <li>Include hashtags #JointheBloverse #Bloverse #bloverse{country} e.g #bloverseNigeria</li>
                <li>Tag our official handle while you are sharing @bloverse on IG and FB, and @bloverse_world on Twitter</li>
                <li>Tag three other content creators while sharing</li>
                <li>Follow us on social media (@bloverse on IG, @bloverse_world on twitter, and @bloverse on FB)</li>
              </ol>
            </div>
          </div>
          <div class="col-lg-6 d-none d-xl-block d-lg-block">
            <div class="d-flex justify-content-center image-wrap">
              <img class="img-fluid w-100" src="@/assets/photo6.jpg" alt>
            </div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center detail-content">
          <div class="col-lg-6 d-none d-xl-block d-lg-block">
            <div class="d-flex justify-content-center image-wrap">
              <img class="img-fluid w-100" src="@/assets/photo3.png" alt>
            </div>
          </div>
          <div class="col-sm-10 col-md-9 col-lg-5 pl-lg-4">
            <div class="detail">
              <h1 class="title">Judging Criteria:</h1>
              <p>Each view is worth 1 point.</p>
              <p>All publications are ranked based on the total number of points accrued over the course of the contest.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center detail-content reward">
          <div class="col-lg-3 col-md-5 col-sm-6">
            <div class="card text-center gold mb-0">
              <div class="card-body p-0 pb-5">
                <img class src="@/assets/gold-medal.svg" alt>
                <div class="mt-4">
                  <div class="card-title font-weight-bold">1st Price</div>
                  <div class="display-1 font-weight-normal">$150</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-sm-6">
            <div class="card text-center silver mb-0">
              <div class="card-body p-0 pb-5">
                <img class src="@/assets/Silver-medal.svg" alt>
                <div class="mt-4">
                  <div class="card-title font-weight-bold">2nd Price</div>
                  <div class="display-1 font-weight-normal">$100</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-sm-6">
            <div class="card text-center bronze mb-0">
              <div class="card-body p-0 pb-5">
                <img class src="@/assets/bronze-medal.svg" alt>
                <div class="mt-4">
                  <div class="card-title font-weight-bold">3rd Price</div>
                  <div class="display-1 font-weight-normal">$50</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-sm-6">
            <div class="card text-center platinum mb-0">
              <div class="card-body p-0 pb-5">
                <img class src="@/assets/platinum-medal.svg" alt>
                <div class="mt-4">
                  <div class="card-title font-weight-bold">Highest Ranked Creator</div>
                  <div class="display-1 font-weight-normal">$100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <p
              class="mb-5"
            >Contest is open to all residents of Australia, Mexico, United States, Canada, United Kingdom, Ireland, Italy, France, Germany, Netherlands, United Arab Emirates, Pakistan, India, Singapore, Philippines, Hong Kong, Kenya, South Africa, Nigeria and Ghana.</p>
            <div class="d-sm-flex align-items-center">
              <h3 class="font-weight-bold">Spread The Word:</h3>
              <ul class="list-unstyled social-round">
                <li>
                  <a
                    class="d-flex justify-content-center align-items-center rounded-circle facebook-color"
                    href="https://www.facebook.com/bloverse/"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex justify-content-center align-items-center rounded-circle twitter-color"
                    href="https://twitter.com/bloverse_world"
                    target="_blank"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex justify-content-center align-items-center rounded-circle linkedin-color"
                    href="https://www.linkedin.com/company/bloverse1/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="d-flex justify-content-center align-items-center rounded-circle instagram-color"
                    href="https://www.instagram.com/bloverse"
                    target="_blank"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <the-footer/>
      </div>
    </section>
  </main>
</template>

<script>
import PhotoContestHeader from "@/components/PhotoContestHeader";
import TheFooter from "@/components/TheFooter";
import VideoModal from "@/components/VideoModal.vue";

export default {
  name: "photo-contest",
  components: {
    PhotoContestHeader,
    TheFooter,
    VideoModal
  },
  data() {
    return {
      show_video: false
    };
  },
  methods: {
    showVid() {
      this.show_video = true;
    },
    closeVid() {
      this.show_video = false;
    }
  }
};
</script>

<style scoped>
#photo-contest {
  font-size: 1rem;
  line-height: 1.6;
}
section {
  margin: 7rem 0;
}
.top-section {
  height: 38.75rem;
  overflow: hidden;
}
.top-section img {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.35;
}
.btn-play {
  width: 4.5rem;
  height: 4.5rem;
}
.image-wrap {
  height: 23rem;
  border-radius: 1rem;
  overflow: hidden;
  border: rgba(0, 0, 0, 0.15);
  position: relative;
  background: #fff;
}
.image-wrap img {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.detail-wrap .detail-content {
  margin-bottom: 7rem;
}
.detail-wrap .detail-content:last-child {
  margin-bottom: 0;
}
.detail ol li,
.detail p,
.reward .card .card-title {
  margin-bottom: 0.5rem;
}
.detail ol li {
  padding-left: 0.5rem;
}
.detail ol {
  margin-left: 1rem;
}
.detail .title {
  margin-bottom: 1.5rem;
}
.detail h1.title {
  font-size: 1.875rem;
  color: #252525;
}
.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000;
  overflow-x: hidden;
}
.reward .card {
  border: 1px solid !important;
  border-radius: 0 !important;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}
.reward .card:hover {
  transform: scale(1.22);
  -webkit-transform: scale(1.22);
  z-index: 2;
}
.reward .card img {
  margin-top: -2px;
}
ul.social-round li {
  display: inline-block;
  margin-left: 1rem;
}
ul.social-round li:first-child {
  margin-left: 2rem;
}
ul.social-round li a {
  height: 3.5rem;
  width: 3.5rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: #ffffff;
}
.facebook-color {
  background-color: #3b5998;
}
.twitter-color {
  background-color: #38a1f3;
}
.linkedin-color {
  background-color: #0077b5;
}
.instagram-color {
  background-color: #fb3958;
}
.reward .card.silver {
  border-color: #bcbec0 !important;
}
.reward .card.gold {
  border-color: #e5b64e !important;
}
.reward .card.bronze {
  border-color: #d37b40 !important;
}
.reward .card.platinum {
  border-color: #096dd9 !important;
}
.card .display-1 {
  font-size: 3.5rem;
  color: #096dd9;
}
.cursor-pointer {
  cursor: pointer;
}

@media (max-width: 576px) {
  ul.social-round {
    margin-top: 1rem;
  }
  ul.social-round li:first-child {
    margin-left: 0;
  }
}
@media (max-width: 991.98px) {
  .reward .card {
    margin-bottom: 2rem !important;
  }
  section {
    margin: 3rem 0;
  }
  .detail-wrap .detail-content {
    margin-bottom: 3rem;
  }
  #photo-contest {
    padding-bottom: 2rem;
  }
}
</style>
