<template>
  <div class="pagee">
    <!-- Desktop Layout -->
    <div class="card related-posts-card" v-show="posts.length > 0">
      <div class="card-header">
        <h3 class="card-header-title">Most Read Topics</h3>
      </div>
      <div class="card-body">
        <div class="post" v-for="post in posts" :key="post.id">
          <div class="row mt-3 mb-5">
            <div class="col-xs-5">
              <img :src="post.image_url" alt>
            </div>

            <div class="col-xs-7">
              <router-link :to="`/posts/${post.slug}`">
                <h2>{{post.title}}</h2>
              </router-link>
              <p>{{post.created | customizedTime}}</p>
            </div>
          </div>

          <hr>
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="related-card">
      <h4
        style="font-family: 'Montserrat', sans-serif; margin-top: 4rem; font-weight: bold;">
        Most Read Topics
      </h4>
      <Row class="trending">
        <carousel
          paginationActiveColor="#096DD9"
          paginationColor="#95C8D8"
          :perPageCustom="[[768, 3], [600, 2], [300,1]]"
          :autoplay="true"
          :autoplayTimeout="4000">
          <slide v-for="post in posts" :key="post.id" id="slider">
            <Col>
              <div class="card-bodyy">
                <div class="post">
                  <div class="row">
                    <div class="col-xs-5">
                      <img :src="post.image_url" alt height="100">
                    </div>

                    <div class="col-xs-7">
                      <router-link to>
                        <h2>{{post.title}}</h2>
                      </router-link>

                      <p>{{post.created | customizedTime}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </slide>
        </carousel>
      </Row>
    </div>
  </div>
</template>

<script>
import { Row, Col, Card, Avatar } from "iview";
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapState } from "vuex";

export default {
  name: "related-posts",
  props: {
    post_id: Number
  },
  components: { Row, Col, Card, Carousel, Slide, Avatar },
  data() {
    return {
      posts: {}
    };
  },
  methods: {
    ...mapActions(["getSimilarPosts"]),

    async getData() {
      await this.getSimilarPosts({
        post_id: await this.post_id,
        threshold: 1.75
      });
      if (this.general.relatedPosts.length > 0) {
        this.posts = this.general.relatedPosts;
      } else {
        await this.getSimilarPosts({
          post_id: await this.post_id,
          threshold: 1
        });
        if (this.general.relatedPosts.length > 0) {
          this.posts = this.general.relatedPosts;
        } else {
          this.posts = this.general.trendingPost.splice(0, 6);
        }
      }
    },

    getTrending() {
      this.posts = this.general.trendingPost.splice(0, 6);
    }
  },
  async created() {
    await this.getTrending();
  },
  computed: {
    ...mapState(["general"])
  }
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Montserrat");

  .card-header-title {
    font-size: 16px;
    font-weight: bold;
  }

  .related-posts-card {
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    min-height: 17rem;
  }

  .related-posts-card .card-header-title {
    font-size: 17px;
    text-transform: capitalize;
    color: #666666;
  }

  .related-posts-card .card-body {
    min-height: 50rem;
    padding: 1rem 0rem;
  }

  .related-posts-card .post {
    width: 100%;
    padding: 1rem 2rem;
  }

  .related-posts-card .post img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }

  .related-posts-card .post h2 {
    font-size: 15px;
    color: #333333;
    margin: 1rem 0rem;
  }

  .related-posts-card .post h2:hover {
    color: #2f80ed;
  }

  .related-posts-card .post p {
    color: #666666;
    font-size: 13px;
  }

  .trending {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
  }

  #category-name {
    font-size: 10px;
    font-family: "Montserrat", sans-serif;
    position: absolute;
    top: 8px;
    left: 16px;
    color: #ffffff;
    text-transform: uppercase;
  }

  #trend-card {
    width: 330px;
    margin-right: 1rem;
  }

  #trend-img {
    height: 210px;
    width: 330px;
  }

  #category-text {
    position: absolute;
    top: 120px;
    right: 16px;
    left: 16px;
    color: #ffffff;
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
  }

  #avatarr {
    position: absolute;
    bottom: 10px;
    left: 16px;
  }

  #user-name {
    position: absolute;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    bottom: 7%;
    left: 20%;
    font-size: 12px;
    float: left;
  }

  @media screen and (max-width: 600px) {
    .related-posts-card {
      display: none;
    }

    .card-header-title {
      display: none;
    }

    .trending-card {
      display: block !important;
      margin-right: 0.5rem;
    }

    .card-bodyy .post h2 {
      font-size: 15px;
      color: #333333;
      margin: 1rem 0rem;
    }

    .card-bodyy {
      background-color: #ffffff;
      border: 1px solid #eeeeee;
      min-height: 10rem;
    }

    .card-bodyy img {
      width: 100%;
      height: 10rem;
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    .related-card {
      display: none;
    }
  }
</style>

