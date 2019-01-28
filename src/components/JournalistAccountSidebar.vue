<template>
  <main class="wrapper" id="journalist-account-sidebar">
    <Push class="side">
      <div class="dashboard-image">
        <img :src="auth.loggedInUser.imageUrl">
      </div>
      <a id="home" :href="`/creators/${auth.loggedInUser.username}/dashboard`">
        <i class="far fa-th-large"></i>
        <span>Dashboard</span>
      </a>
      <a id="home" :href="`/creators/${auth.loggedInUser.username}/posts/create`">
        <i class="fal fa-plus"></i>
        <span>Create Content</span>
      </a>
      <a id="home" :href="`/creators/${auth.loggedInUser.username}/posts`">
        <i class="fal fa-rocket"></i>
        <span>My Posts</span>
      </a>
      <a id="home" href @click.prevent="logOut">
        <i class="fal fa-power-off" style="color: #D9091E; font-size:16px; "></i>
        <span>Sign Out</span>
      </a>
      <div class="overlayed-text">
        <div class="overlayed-content">
          <img :src="auth.loggedInUser.imageUrl">
          <p
            class="text-white"
            style="text-transform: capitalize; margin-left: -1.6rem"
          >{{auth.loggedInUser.firstName}}&nbsp;{{auth.loggedInUser.lastName}}</p>
        </div>
      </div>
    </Push>


    <div class="sidebar-header">
      <router-link to="/" class="router-link">
        <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
      </router-link>
    </div>
    <div class="desktop-side">
      <nav id="sidebar">
        <ul class="list-unstyled">
          <li class="list-item">
            <router-link
              :to="`/creators/${auth.loggedInUser.username}/dashboard`"
              :class="{'active': currentRoute == 'journalist-dashboard'}"
            >
              <i class="far fa-th-large"></i>
              <span class="ml-3">Dashboard</span>
            </router-link>
          </li>
          <li class="list-item">
            <router-link
              :to="`/creators/${auth.loggedInUser.username}/posts/create`"
              :class="{'active': currentRoute == 'create-post'}"
            >
              <i class="fal fa-plus"></i>
              <span class="ml-3">Create Content</span>
            </router-link>
          </li>
          <li class="list-item">
            <router-link
              :to="`/creators/${auth.loggedInUser.username}/posts`"
              :class="{'active': currentRoute == 'all-posts'}"
            >
              <i class="fal fa-rocket"></i>
              <span class="ml-3">My Posts</span>
            </router-link>
          </li>
        </ul>
        <!-- footer -->
        <footer id="footer">
          <ul>
            <li style="margin-bottom:2rem;">
              <a href @click.prevent="logOut" class="mt-3">
                <i class="fal fa-power-off" style="color: #D9091E; font-size:16px; "></i>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
          <div class="avatar avatar-sm pt-2" style="display: flex;">
            <img
              id="author-img"
              :src="auth.loggedInUser.image_url"
              alt="Author's Image"
              class="avatar-img rounded"
            >
            <span class="mt-2">{{auth.loggedInUser.first_name}}&nbsp;{{auth.loggedInUser.last_name}}</span>
          </div>
        </footer>
        <journalist-account-footer class="mt-5"/>
      </nav>
    </div>
  </main>
</template>

<script>
import { Row, Col } from "iview";
import { mapState, mapActions } from "vuex";
import { Push } from "vue-burger-menu";

import JournalistAccountNav from "@/components/JournalistAccountNav";
import LoginButton from "./LoginButton";
import JournalistAccountFooter from "@/components/JournalistAccountFooter";

export default {
  components: {
    Row,
    Col,
    LoginButton,
    JournalistAccountNav,
    JournalistAccountFooter,
    Push
  },
  methods: {
    ...mapActions(["clearSession"]),
    logOut() {
      this.clearSession();
      this.$router.push("/creators");
    }
  },
  computed: {
    ...mapState(["auth"]),
    currentRoute() {
      let route = this.$route.name;
      return route;
    }
  }
};
</script>

<style scoped>

  .side {
    display: none;
  }

  #journalist-account-sidebar {
    padding: 4rem 2rem 2rem;
    overflow: visible;
  }

  #journalist-account-sidebar .sidebar-header {
    margin-top: -3.5rem;
  }

  #journalist-account-sidebar .list-unstyled {
    margin-top: 7rem;
  }

  #journalist-account-sidebar .list-unstyled li {
    margin-bottom: 2rem;
    width: 100%;
  }

  #journalist-account-sidebar .list-unstyled li a {
    font-size: 16px;
    width: 100%;
  }

  #journalist-account-sidebar .list-unstyled li a i {
    color: #096dd9 !important;
  }

  #journalist-account-sidebar .list-unstyled li span {
    color: rgba(0, 0, 0, 0.65);
  }

  #journalist-account-sidebar .list-unstyled li a.active {
    border-right: 2px solid #096dd9;
    padding-right: 1rem;
  }

  #journalist-account-sidebar .list-unstyled li a.active span {
    color: rgba(0, 0, 0, 0.9);
  }

  #journalist-account-sidebar #footer {
    margin-top: 8rem;
    margin-bottom: 4rem;
  }

  #journalist-account-sidebar #footer ul li {
    list-style-type: none;
  }

  #journalist-account-sidebar #footer span {
    margin-left: 0.5rem;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.9);
  }

  #journalist-account-sidebar #sidebarModalSearch .modal-content {
    z-index: 3000 !important;
  }

  .desktop-side {
    display: block;
  }
  

  @media screen and (max-width: 600px) {

    .side {
      display: block;
      display: block;
      margin-top: -2rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    .side img {
      width: 130%;
      height: 172px;
      margin-left: -2.5rem !important;
      filter: blur(10px);
      -webkit-filter: blur(10px);
    }

    .side .overlayed-text {
      overflow: hidden;
      position: absolute;
      left: -100px;
      top: 90px;
    }

    .side .overlayed-text .overlayed-content img {
      filter: none;
      width: 55%;
      height: 100px;
      object-fit: contain;
      margin-left: -2rem;
    }

    .side .overlayed-content {
      height: 120px;
      margin-left: -2rem;
    }

    .bm-burger-button {
      position: fixed;
      width: 18px;
      height: 12px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }

    .bm-burger-bars {
      background-color: #525358;
    }

    .bm-item-list {
      color: #b8b7ad;
      margin-left: 5%;
      font-size: 14px;
    }

    .bm-menu {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      background-color: #f5f5f5;
      overflow-x: hidden;
      padding-top: 60px;
      transition: 0.5s;
    }

    .bm-item-list > * > span {
      margin-left: 14px;
      color: #222222;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    .desktop-side {
      display: none;
    }

    .sidebar-header {
      display: none;
    }
  }
  
</style>
