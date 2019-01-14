<template>
  <div>
    <inline-loader v-if="general.publishedPostsLoading" />
    <main v-if="!general.publishedPostsLoading" id="display-feeds">
    <div class="card" v-if="!general.publishedPosts.length">
      <div class="card-body">
        <img src="@/assets/image.svg" alt class="col-md-3">
        <span class="col-md-8">No content for this filter result yet!</span>
      </div>
    </div>
    <div v-if="general.publishedPosts.length" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
      <Row id="card-rows" :gutter="32" v-if="general.activeFeedLayout == 'grid'">
        <Col :xs="24" :sm="12" :md="8" v-for="post in posts" :key="post.id">
          <FeedCard :post="post"/>
        </Col>
      </Row>

      <Row type="flex" justify="center" v-if="general.activeFeedLayout == 'stack'">
        <Col :xs="24" :sm="20" :md="14" v-for="post in posts" :key="post.id">
          <FeedCard :post="post"/>
        </Col>
      </Row>
    </div>
  </main>    
  </div>

</template>

<script >
import { Row, Col, vSelect, Card, Avatar, Icon } from "iview";
import { mapActions, mapState } from "vuex";
import FeedCard from "./FeedCard.vue";
import InlineLoader from "./InlineLoader.vue";

export default {
  name: "Displayfeeds",
  components: { Row, Col, Card, vSelect, Avatar, Icon, FeedCard, InlineLoader },
  data() {
    return {
      posts: [],
      results: [],
      busy: false,
      limit: 9,
    };
  },
  
  methods: {
    ...mapActions(["getAllPublishedPosts"]),
    loadMore() {
      this.busy = true;   

      const append = this.general.publishedPosts.slice(this.posts.length,this.posts.length + this.limit )
      this.posts = this.posts.concat(append);
        
      this.busy = false;
    }
  },
  async created() {
    await this.getAllPublishedPosts({ category: '', country:'' });
    this.loadMore();
  },
  computed: {
    ...mapState(["general"])
  }
};
</script>

<style scoped>
  #display-feeds .card {
    left: 30%;
    width: 504px;
    height: 139px;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  #display-feeds .card .card-body img {
    width: 80px;
    height: 90.99px;
  }

  #display-feeds .card .card-body {
    text-align: center;
  }

  #display-feeds .card .card-body span {
    font-size: 14px;
  }

  @media screen and (max-width: 1020px) {
    #display-feeds .card {
      left: 0;
      margin: 3rem auto;
    }
  }

  @media screen and (max-width: 600px ) {
    #display-feeds .card {
      left: 0%;
      width: auto;
      height: auto;
      display: flex;
      justify-content: space-between;
      margin-top: 3rem;
    }

    #display-feeds .card .card-body {
      padding: 0.5rem;
    }
    #display-feeds .card .card-body {
      padding: 0.5rem;
    }
    #display-feeds .card .card-body>span {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 325px) {
    #display-feeds .card .card-body>span {
      font-size: 0.6rem;
    }
  }
</style>
