<template>
  <main id="all-posts">
    <Push class="side">
      <div class="dashboard-image">
        <img :src="auth.loggedInUser.imageUrl">
      </div>
      <a id="home" href="/creators/${auth.loggedInUser.userName}/dashboard">
        <i class="far fa-th-large"></i>
        <span>Dashboard</span>
      </a>
      <a href="/creators/${auth.loggedInUser.userName}/posts/create">
        <i class="fal fa-plus"></i>
        <span>Create Content</span>
      </a>
      <a href="/creators/${auth.loggedInUser.userName}/posts">
        <i class="fal fa-rocket"></i>
        <span>My Posts</span>
      </a>
      <a href @click.prevent="logOut">
        <i class="fal fa-power-off" style="color: #D9091E;"></i>
        <span>Sign Out</span>
      </a>
      <div class="overlayed-text">
        <div class="overlayed-content">
          <img :src="auth.loggedInUser.imageUrl">
          <p
            class="text-white"
            style="text-transform: capitalize; margin-left: -0.6rem"
          >{{auth.loggedInUser.firstName}}&nbsp;{{auth.loggedInUser.lastName}}</p>
        </div>
      </div>
    </Push>

    <div class="mobile">
      <router-link to="/" class="router-link">
        <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
      </router-link>
    </div>

    <div class="btn-group" role="group">
      <button
        type="button"
        @click="currentSection('postp')"
        :class="{'btn' : true, 'btn-default': current_section != 'postp', 'btn-primary': current_section == 'postp'}"
        class="text-uppercase"
      >all posts</button>
      <button
        type="button"
        @click="currentSection('draft')"
        :class="{'btn' : true, 'btn-default': current_section != 'draft', 'btn-primary': current_section == 'draft'}"
        class="text-uppercase"
      >all drafts</button>
    </div>

    <div class="row" v-if="current_section == 'postp'">
      <div class="col-md-6" v-for="post in journalist.journalistPosts" :key="post.id">
        <feed-card :post="post"/>
      </div>
    </div>

    <div class="row" v-if="current_section == 'draft'">
      <div class="col-md-6" v-for="draft in journalist.draftPosts" :key="draft.id">
        <draft-card :post="draft"/>
      </div>
    </div>

    <div v-show="!journalist.journalistPosts">
      <h2>This Place looks empty !</h2>
      <br>
      <router-link
        class="btn btn-primary"
        :to="`/creators/${auth.loggedInUser.userName}/posts/create`"
      >Create Posts Here</router-link>
    </div>
  </main>
</template>


<script>
import { Row, Col, Button, Card } from "iview";
import { mapState, mapActions } from "vuex";

import { Push } from "vue-burger-menu";
import FeedCard from "@/components/FeedCard.vue";
import DraftCard from "@/components/DraftCard.vue";

export default {
  data() {
    return {
      current_section: "postp"
    };
  },
  components: { Row, Col, FeedCard, Button, Card, DraftCard, Push },
  computed: {
    ...mapState(["journalist", "general", "auth"]),

    showPosts: function() {
      return this.journalist.posts && this.journalist.posts.length > 0;
    }
  },
  async created() {
    // fetch the data whethis.getMyPostn the view is created and the data is
    // already being observed
    await this.getMyPosts();
    // await this. getMyDrafts()
  },
  watch: {
    // call again the method if the route changes
    $route: " getMyPosts"
  },
  methods: {
    ...mapActions([
      "getMyPosts",
      // 'getMyDrafts'
      "clearSession"
    ]),

    logOut() {
      this.clearSession();
      this.$router.push("/creators");
    },

    currentSection(section) {
      this.current_section = section;
    }
  }
};
</script>

<style>
#all-posts {
  width: 100%;
  margin: 0 auto;
  padding-top: 4rem;
  padding-left: 1rem;
  height: auto !important;
}

.mobile {
  display: none;
}

.side {
  display: none;
}

#all-posts .btn-group .btn:first-child {
  border-radius: 4px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

#all-posts .btn-group .btn:last-child {
  border-radius: 4px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

#all-posts .btn-group .btn-default {
  background: transparent !important;
  border-color: #2f80ed !important;
  color: #2f80ed !important;
}

@media screen and (max-width: 600px) {
  #all-posts .mobile {
    display: block;
    margin-top: -2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  #all-posts .side {
    display: block;
  }

  #all-post .side .dashboard-img img {
    width: 320px !important;
    object-fit: contain;
  }

  #all-posts .side img {
    width: 130%;
    height: 172px;
    margin-left: -2.5rem !important;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }

  #all-posts .side .overlayed-text {
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 100px;
  }

  #all-posts .side .overlayed-text .overlayed-content img {
    filter: none;
    width: 55%;
    height: 55%;
    object-fit: contain;
  }

  #all-posts .side .overlayed-content {
    height: 120px;
  }

  #all-posts.side .overlayed-content {
    height: 100px;
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
}
</style>
