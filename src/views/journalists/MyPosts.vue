<template>
  <main id="all-posts">
    <div class="header">
      <div class="header-body">
        <div class="row align-items-center">
          <div class="col">
            <h6 class="header-pretitle">
              Overview
            </h6>

            <h1 class="header-title">
              Your Articles
            </h1>
          </div>
          <div class="col-auto">
            <router-link :to="`/creators/${auth.loggedInUser.username}/posts/create`" class="btn btn-primary">
              Create New Article
            </router-link>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">
            <ul class="nav nav-tabs nav-overflow header-tabs">
              <li class="nav-item">
                <a href="#!" :class="{ 'nav-link': true, 'active':  current_section == 'all' }" @click.prevent="currentSection('all')">
                  All <span class="badge badge-pill badge-soft-secondary">{{journalist.journalistPosts.length}}</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" :class="{ 'nav-link': true, 'active':  current_section == 'published' }" @click.prevent="currentSection('published')">
                  Published <span class="badge badge-pill badge-soft-secondary">{{journalist.JournalistPublishedPosts.length}}</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#!" :class="{ 'nav-link': true, 'active':  current_section == 'draft' }" @click.prevent="currentSection('draft')">
                  Drafts <span class="badge badge-pill badge-soft-secondary">{{journalist.draftPosts.length}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top: -3rem;">
      <div class="row" v-if="current_section == 'all'">
        <div class="col-md-4" v-for="post in journalist.journalistPosts" :key="post.id">
          <draft-card :post="post"/>
        </div>
      </div>

      <div class="row" v-if="current_section == 'published'">
        <div class="col-md-4" v-for="post in journalist.JournalistPublishedPosts" :key="post.id">
          <draft-card :post="post" @unpublished="getMyPosts" />
        </div>
      </div>

      <div class="row" v-if="current_section == 'draft'">
        <div class="col-md-4" v-for="draft in journalist.draftPosts" :key="draft.id">
          <draft-card :post="draft"/>
        </div>
      </div>

      <div v-show="!journalist.journalistPosts">
        <h2>This Place looks empty !</h2>
        <br>
        <router-link
          class="btn btn-primary"
          :to="`/creators/${auth.loggedInUser.username}/posts/create`"
        >Create Posts Here</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { Row, Col, Button, Card } from "iview";
import { mapState, mapActions } from "vuex";
import DraftCard from "@/components/DraftCard.vue";
import FeedCard from "@/components/FeedCard.vue";

export default {
  data() {
    return {
      current_section: "all",
      all_posts: []
    };
  },
  components: { Row, Col, Button, Card, DraftCard, FeedCard },
  computed: {
    ...mapState(["journalist", "general", "auth"]),

    showPosts: function() {
      return this.journalist.posts && this.journalist.posts.length > 0;
    }
  },
  async created() {
    // fetch the data whethis.getMyPostn the view is created and the data is
    // already being observed
    await this.getMyPosts()
  },
  watch: {
    // call again the method if the route changes
    $route: "getMyPosts"
  },
  methods: {
    ...mapActions([
      "getMyPosts",
      "clearSession",
      "journalist"
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
  padding-top: 1rem;
  padding-left: 1rem;
  height: auto !important;
}

#all-posts .card {
  border: 1px solid #e3ebf6;
}
</style>
