<template>
  <main class="card profile">
    <img src="@/assets/Avatar.png" class="card-img-top" alt="...">
    <div class="profile-edit-icon d-flex justify-content-between p-3">
      <span class="d-inline d-sm-none bl-back-arrow" @click="hideMobileUserInfo">
        <i class="fal fa-long-arrow-left fa-2x back-arrow"></i>
      </span>
      <i class="fal fa-user-edit fa-2x"></i>
    </div>
    <div class="avatar mx-4">
      <img src="@/assets/Avatar2.png" class="profile-img rounded" alt="...">
      <span class="profile-name pl-3">Johndoe</span>
    </div>
    <div class="card-body profile-body">
      <h5 class="card-title">John Doe</h5>
      <p class="contact">
        <span class="pr-2 pb-5">
          <i class="fal fa-phone"></i>
        </span> +234 000 000 0000
      </p>
      <p>
        <span class="pr-2 py-1">
          <i class="fal fa-envelope"></i>
        </span> email@bloverse.com
      </p>
      <p>
        <span class="pr-2">
          <i class="fal fa-map-marker-alt"></i>
        </span> Lagos, Nigeria
      </p>
      <div class="py-4 profile-content">
        <p
          class="profile__text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div v-if="!hideFollowing" class="follow d-flex justify-content-between">
        <a data-toggle="modal" href="#following-modal">Following</a>
        <span class="border rounded px-1 mr-2" data-toggle="modal" href="#following-modal" id="number">5</span>
      </div>
      <div v-if="displayFollowers" class="follow d-flex align-items-center">
        <a data-toggle="" href="#">Followers</a>
        <span class="badge followers-icon badge-primary ml-2">5</span>
      </div>
    </div>
    <div v-if="displayInterest" class="interests">
      <category-card hideCardClass />
    </div>
    <div class="social p-3">
      <h5 class="mb-2"><strong>Social Media</strong></h5>
      <div class="d-flex flex-wrap">
        <div class="mr-2">
          <div class="border rounded p-2 mb-1 d-flex align-items-center">
            <img class="social-icon" src="@/assets/facebook-square.svg" alt="facebook" />
            <h6 class="social-text text-center pl-2">Facebook</h6>
          </div>
        </div>
        <div class="mr-2">
          <div class="border rounded p-2 mb-1 d-flex align-items-center">
            <img class="social-icon" src="@/assets/twitter-square.svg" alt="facebook" />
            <h6 class="social-text text-center pl-2">Twitter</h6>
          </div>
        </div>
        <div class="mr-2">
          <div class="border rounded p-2 mb-1 d-flex align-items-center">
            <img class="social-icon" src="@/assets/instagram-square.svg" alt="facebook" />
            <h6 class="social-text text-center pl-2">Instagram</h6>
          </div>
        </div>
        <div class="mr-2">
          <div class="border rounded p-2 mb-1 d-flex align-items-center">
            <img class="social-icon" src="@/assets/linkedin-square.svg" alt="facebook" />
            <h6 class="social-text text-center pl-2">Linkedin</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-muted bg-white footer-color">Member Since:
      <span class="text-dark">27 December, 2018</span>
    </div>
    <modal target="following-modal" title="Following" hideFooter>
      <div class="bl-modal-content">
        <div class="row align-items-center mt-2 mb-2">
          <div class="col-3 col-md-2 d-flex justify-content-center">
            <img class="user-image img-fluid" src="@/assets/smiling-author.jpg">
          </div>
          <div class="col-9 col-sm-9 col-md-6 pl-0">
            <p class="username">
              JohnDoe
              <span class="sub-span point d-inline d-md-none">
                <a href="#">Unfollow</a>
              </span>
            </p>
            <p class="sub-text d-flex flex-wrap">
              <span><span class="sub-span">24</span> Followers</span>
              <span><span class="sub-span point">234</span> Articles</span>
            </p>
          </div>
          <div class="d-none d-sm-none col-md-4 d-md-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">Following</button>
          </div>
        </div>
        <div class="row align-items-center mt-2 mb-2">
          <div class="col-3 col-md-2 d-flex justify-content-center">
            <img class="user-image img-fluid" src="@/assets/smiling-author.jpg">
          </div>
          <div class="col-9 col-sm-9 col-md-6 pl-0">
            <p class="username">
              JohnDoe
              <span class="sub-span point d-inline d-md-none">
                <a href="#">Unfollow</a>
              </span>
            </p>
            <p class="sub-text d-flex flex-wrap">
              <span><span class="sub-span">24</span> Followers</span>
              <span><span class="sub-span point">234</span> Articles</span>
            </p>
          </div>
          <div class="d-none d-sm-none col-md-4 d-md-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">Following</button>
          </div>
        </div>
        <div class="row align-items-center mt-2 mb-2">
          <div class="col-3 col-md-2 d-flex justify-content-center">
            <img class="user-image img-fluid" src="@/assets/smiling-author.jpg">
          </div>
          <div class="col-9 col-sm-9 col-md-6 pl-0">
            <p class="username">
              JohnDoe
              <span class="sub-span point d-inline d-md-none">
                <a href="#">Unfollow</a>
              </span>
            </p>
            <p class="sub-text d-flex flex-wrap">
              <span><span class="sub-span">24</span> Followers</span>
              <span><span class="sub-span point">234</span> Articles</span>
            </p>
          </div>
          <div class="d-none d-sm-none col-md-4 d-md-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">Following</button>
          </div>
        </div>
      </div>
    </modal>
  </main>
</template>

<script>
import Modal from "@/components/Modal/Modal";
import CategoryCard from '@/components/CategoryCard/CategoryCard';

export default {
  name: "ProfileCard",
  components: {
    Modal,
    CategoryCard,
  },
  props: {
    hideMobileUserInfo: {
      type: Function,
      required: false,
      default: () => {},
    },
    displayInterest: {
      type: Boolean,
      default: false,
    },
    hideFollowing: {
      type: Boolean,
      default: false,
    },
    displayFollowers: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "./ProfileCard";
</style>
