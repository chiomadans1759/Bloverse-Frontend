<template>
  <main id="bl-photocontest" class="container-fluid p-0">
    <!-- Top Section Container Start -->
    <div class="top-section-container">
      <Navbar isTransparent whiteText />
      <div class="container-fluid h-100 pb-5">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <h1 class="title">Bloverse Photo Contest</h1>
            <h2 class="paragraph">'The Story Behind The Photo'</h2>
            <br />
            <div class="publish-link-container mb-3 mb-sm-0">
              <router-link to="/creators/apply" class="publish-link btn">
                Publish a Photo Contest
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-12">
            <video class="col-12" id="video-element" controls>
              <source src="@/assets/photocontest.mp4" type="video/mp4"/>
            </video>
            <div v-if="paused && !playing" class="video-button play">
              <button v-if="paused && !playing"  @click="play"><i class="fas fa-play video-controls"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Section Container End -->
    <!-- Ongoing Contest Section Start -->
    <div class="ongoing-contest-section">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
          <div class="title-container">
            <h1 class="title">Ongoing Contest</h1>
            <p class="paragraph">Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea</p>
          </div>
          <br />
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12 mb-4">
              <ContestCard />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 d-lg-flex justify-content-center">
              <div class="contestant-list">
                <div class="contestant-header row">
                  <div class="col-lg-10 col-md-10 col-sm-11 col-10">
                    <span class="contestant-title">
                      Contestants &nbsp;&nbsp; 
                    </span>
                    <span class="text-muted">
                      <country-options minimal />
                    </span>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-1 col-2 d-flex justify-content-end badge-container">
                    <span class="badge badge-primary">64</span>
                  </div>
                </div>
                <div class="contestant-body">
                  <div class="contestant-names">
                    <div class="row contestant-row">
                      <div class="col-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img class="contestant-img" src="@/assets/photo-3.jpg" />
                      </div>
                      <div class="col-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 contestant-name">Johndoe</div>
                    </div>
                    <div class="row contestant-row">
                      <div class="col-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img class="contestant-img" src="@/assets/photo-3.jpg" />
                      </div>
                      <div class="col-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 contestant-name">Johndoe</div>
                    </div>
                    <div class="row contestant-row">
                      <div class="col-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img class="contestant-img" src="@/assets/photo-3.jpg" />
                      </div>
                      <div class="col-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 contestant-name">Johndoe</div>
                    </div>
                    <div class="row contestant-row">
                      <div class="col-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img class="contestant-img" src="@/assets/photo-3.jpg" />
                      </div>
                      <div class="col-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 contestant-name">Johndoe</div>
                    </div>
                    <div class="row contestant-row">
                      <div class="col-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img class="contestant-img" src="@/assets/photo-3.jpg" />
                      </div>
                      <div class="col-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 contestant-name">Johndoe</div>
                    </div>
                    <div class="row contestant-row">
                      <div class="col-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <img class="contestant-img" src="@/assets/photo-3.jpg" />
                      </div>
                      <div class="col-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 contestant-name">Johndoe</div>
                    </div>
                  </div>
                  <div class="contestant-bottom">
                    <div class="contestant-link-container">
                      <router-link to="/creators/apply" class="contestant-link btn">
                        Join the contestants
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ongoing Contest Section End -->
    <!-- How to enter Section Start -->
    <div class="how-to-enter">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 left-side">
              <h2 class="how-to-enter-text">How to enter</h2>
              <br/>
              <div class="steps">
                <ol>
                  <li>Like this post</li>
                  <li>Follow us on instagram <span class="bold-text">@bloverse</span></li>
                  <li>Tag two friends with the hashtag <span class="bold-text">#JoinTheBloverse</span></li>
                  <li><router-link to="/creators/apply">Apply</router-link> to be a content creator</li>
                  <li>Submit the lifestyle photo and the story behind it as a published post on bloverse</li>
                  <li>Share your article on instagram, facebook, twitter followed by the hashtag <span class="bold-text">#JoinTheBloverse</span></li>
                </ol>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 d-none d-sm-none d-md-block align-self-center">
              <img class="img-fluid enter-image" src="@/assets/photo-2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- How to enter Section End -->
    <!-- Judging Criteria Section Start -->
    <div class="judging-criteria">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 col-sm-12 col-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 d-none d-sm-none d-md-block align-self-center">
              <img class="img-fluid judging-image" src="@/assets/photo-1.jpg" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 right-hand">
              <h2 class="judging-criteria-text">Judging Criteria:</h2>
              <br />
              <div>
                <div class="row criteria">
                  <div class="col-md-2">
                    <div class="criteria-icon">
                      <i class="fal fa-eye fa-2x icon"></i>
                    </div>
                  </div>
                  <div class="col-md-10 criteria-content">
                    <h2 class="criteria-text">Views</h2>
                    <p class="criteria-subtext">You get a reward of 1 point for every view your article has.</p>
                  </div>
                </div>
                <div class="row criteria">
                  <div class="col-md-2">
                    <div class="criteria-icon">
                      <i class="fal fa-eye fa-2x icon"></i>
                    </div>
                  </div>
                  <div class="col-md-10 criteria-content">
                    <h2 class="criteria-text">Comment</h2>
                    <p class="criteria-subtext">For every interaction (in comment) that you post/article 
                      received you get a reward of 5 points per comment.</p>
                  </div>
                </div>
                <div class="row criteria">
                  <div class="col-md-2">
                    <div class="criteria-icon">
                      <i class="fal fa-eye fa-2x icon"></i>
                    </div>
                  </div>
                  <div class="col-md-10 criteria-content">
                    <h2 class="criteria-text">Share Content</h2>
                    <p class="criteria-subtext">You can also get reward for every of your post/article that is being 
                      shared on other social media platforms. You get reward of 10 points per share.
                    </p>
                  </div>
                </div>
                <div class="row criteria">
                  <div class="col-md-2">
                    <div class="criteria-icon">
                      <i class="fal fa-eye fa-2x icon"></i>
                    </div>
                  </div>
                  <div class="col-md-10 criteria-content">
                    <h2 class="criteria-text">Likes</h2>
                    <p class="criteria-subtext">For every like that your post/article attracts, you get a
                       reward of 25 points per like.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Judging Criteria Section End -->
    <!-- Prize Section Starts -->
    <div class="prize-section">
      <div class="row justify-content-center">
        <div class="col-md-10 col-sm-12 col-12">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 prize">
              <div class="card mb-3 gold-card">
                <img src="@/assets/Gold icon.svg" class="card-img-top card-icon align-self-center" alt="Gold Icon">
                <div class="card-body">
                  <h5 class="card-title">1st Prize</h5>
                  <p class="card-text">$150</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 prize">
              <div class="card mb-3 silver-card">
                <img src="@/assets/Silver icon.svg" class="card-img-top card-icon align-self-center" alt="Silver Icon">
                <div class="card-body">
                  <h5 class="card-title">2nd Prize</h5>
                  <p class="card-text">$120</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 prize">
              <div class="card mb-3 bronze-card">
                <img src="@/assets/Bronze icon.svg" class="card-img-top card-icon align-self-center" alt="Bronze Icon">
                <div class="card-body">
                  <h5 class="card-title">3rd Prize</h5>
                  <p class="card-text">$50</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 col-12 prize">
              <div class="card mb-3 platinum-card">
                <img src="@/assets/Blue.svg" class="card-img-top card-icon align-self-center" alt="Platinum Icon">
                <div class="card-body">
                  <h5 class="card-title">Highest Ranked Creator</h5>
                  <p class="card-text">$100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Prize Section End -->
    <!-- Footer Section Starts -->
    <div class="footer-section">
      <div class="row pb -4">
        <div class="col-md-2 d-none d-sm-none d-md-block"></div>
        <div class="col-md-8 col-sm-12 col-12">
          <div class="footer">
            <div>
              <h2 class="footer-text">Contest is open to all residents of Australia, Mexico, United States, Canada, 
              United Kingdom, Ireland, Italy, France, Germany, Netherlands, United Arab Emirates, 
              Pakistan, India, Singapore, Philippines, Hong Kong, Kenya, South Africa, Nigeria 
              and Ghana.</h2>
              <h2 class="footer-text">
              For complete contest rules. <router-link to="/terms-and-conditions">click here</router-link>
              </h2>
            </div>
            <br />
            <div class="word-spread">
              <div><span class="title">Spread The Word:</span>
                <span class="facebook-icon social-icon">
                  <img src="@/assets/facebook.svg" alt="facebook" />
                </span>
                <span class="twitter-icon social-icon">
                  <img src="@/assets/twitter.svg" alt="twitter" />
                </span>
                <span class="twitter-icon social-icon">
                  <img src="@/assets/linkedin.svg" alt="linkedin" />
                </span>
                </div>
            </div>
            <div class="copyright text-center">
              <p class="title">bloverse<span class="sub-text">2018. All Right Reserved</span></p>
            </div>
          </div>
        </div>
        <div class="col-md-2 d-none d-sm-none d-md-block"></div>
      </div>
    </div>
    <!-- Footer Section Ends -->
  </main>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import ContestCard from '@/components/ContestCard/ContestCard';
import CountryOptions from '@/components/CountryOptions/CountryOptions';

export default {
  name: "PhotoContest",
  data() {
    return {
      playing: false,
      paused: true
    }
  },
  components: { ContestCard, Navbar, CountryOptions },
  methods: {
    play: function() {
      const video = document.getElementById('video-element');
      this.playing = true;
      this.paused = false;
      video.play();

    }
  },
  mounted() {
    const video = document.getElementById('video-element');
    const self = this;
    if (video) {
      video.onpause = function() {
        self.playing = false;
        self.paused = true;
      }
      video.onplay = function() {
        self.playing = true;
        self.paused = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './PhotoContestPage.scss';
  @import './PhotoContestPage.Responsive.scss';
</style>
