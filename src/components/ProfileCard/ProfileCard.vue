<template>
  <main class="card profile">
    <img src="@/assets/Avatar.png" class="card-img-top" alt="...">
    <div class="profile-edit-icon d-flex justify-content-end p-3 "><i class="fal fa-user-edit fa-2x"></i></div>
    <div class="avatar mx-4">
      <img src="@/assets/Avatar2.png" class="profile-img rounded" alt="...">
      <span class="profile-name pl-3">Johndoe</span>
    </div>
    <div class="card-body profile-body">
      <h5 class="card-title">John Doe</h5>
      <p><span class="pr-2 pb-5"><i class="fal fa-phone"></i></span> +234 000 000 0000</p>
      <p><span class="pr-2 py-1"><i class="fal fa-envelope"></i></span> email@bloverse.com</p>
      <p><span class="pr-2"><i class="fal fa-map-marker-alt"></i></span> Lagos, Nigeria</p>
      <div class="py-4 profile-content">
        <p class="profile__text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      <div class="follow d-flex justify-content-between">
        <a href="">Following</a><span class="border rounded px-1 mr-2" id="number">5</span>
      </div>
    </div>
    <div class="card-footer text-muted bg-white">
      Member Since: <strong> December, 2018</strong>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ProfileCard',
}
</script>

<style lang="scss" scoped>
  @import './ProfileCard';
</style>
