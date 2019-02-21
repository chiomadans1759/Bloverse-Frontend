<template>
  <main id="bl-creator-navigation">
    <div class="creator-info mx-2 mb-4 d-block d-sm-none">
      <div class="row">
        <div class="col-3 text-center pr-0">
          <img src="@/assets/Avatar2.png" class="profile-img rounded" alt="...">
        </div>
        <div class="col-9 pl-0 d-flex align-items-center">
          <div class="user-info">
            <h6 class="font-weight-bold">JohnDoe</h6>
            <p>John Doe</p>
            <p><i class="fal fa-map-marker-alt"></i><span class="ml-1">Lagos, Nigeria</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation-bar">
      <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
        <li class="nav-item d-sm-none">
          <router-link
            to="/creators/info"
            class="nav-link d-flex align-items-center"
            id="pills-contest-tab"
            data-toggle="pill"
            role="tab"
            aria-controls="pills-contest"
            aria-selected="true"
          >Info
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/creators/profile"
            class="nav-link active d-flex align-items-center"
            id="pills-general-tab"
            data-toggle="pill"
            role="tab"
            aria-controls="pills-general"
            aria-selected="false"
          >Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/creators/posts"
            class="nav-link d-flex align-items-center"
            id="pills-contest-tab"
            data-toggle="pill"
            href="#posts-tab"
            role="tab"
            aria-controls="pills-contest"
            aria-selected="true"
          >Posts
            <span class="badge badge-secondary ml-2">4</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/creators/drafts"
            class="nav-link d-flex align-items-center"
            id="pills-contest-tab"
            data-toggle="pill"
            href="#photocontest-tab"
            role="tab"
            aria-controls="pills-contest"
            aria-selected="false"
          >Drafts
            <span class="badge badge-secondary ml-2">4</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/creators/trash"
            class="nav-link d-flex align-items-center"
            id="pills-contest-tab"
            data-toggle="pill"
            href="#photocontest-tab"
            role="tab"
            aria-controls="pills-contest"
            aria-selected="false"
          >Trash</router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "./CreatorNavigation";
</style>
