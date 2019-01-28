<template>
  <main class="card profile">
    <img src="@/assets/Avatar.png" class="card-img-top" alt="...">
    <div class="profile-edit-icon d-flex justify-content-end p-3">
      <i class="fal fa-user-edit fa-2x"></i>
    </div>
    <div class="avatar mx-4">
      <img src="@/assets/Avatar2.png" class="profile-img rounded" alt="...">
      <span class="profile-name pl-3">Johndoe</span>
    </div>
    <div class="card-body profile-body">
      <h5 class="card-title">John Doe</h5>
      <p>
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
      <div class="follow d-flex justify-content-between">
        <a data-toggle="modal" href="#following-modal">Following</a>
        <span class="border rounded px-1 mr-2" data-toggle="modal" href="#following-modal" id="number">5</span>
      </div>
    </div>
    <div class="card-footer text-muted bg-white">Member Since:
      <strong>December, 2018</strong>
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
            <p class="sub-text">
              <span class="sub-span">24</span> Followers
              <span class="sub-span point">234</span> Articles
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
            <p class="sub-text">
              <span class="sub-span">24</span> Followers
              <span class="sub-span point">234</span> Articles
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
            <p class="sub-text">
              <span class="sub-span">24</span> Followers
              <span class="sub-span point">234</span> Articles
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

export default {
  name: "ProfileCard",
  components: {
    Modal
  }
};
</script>

<style lang="scss" scoped>
@import "./ProfileCard";
</style>
