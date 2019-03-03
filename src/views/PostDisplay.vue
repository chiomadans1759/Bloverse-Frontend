<template>
  <main id="post-display">
    <div class="container">
      <section v-if="general.loading">
        <preloader/>
        <h1>LOADING</h1>
      </section>

      <section class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <h5 class="mb-1 text-secondary">{{category.name}}</h5>
            <h1 class="post-title">{{post.title}}</h1>
          </div>
          <img class="post-img" :src="post.image_url">
        </div>

        <div class="col-md-12 py-3">
          <div class="details-sec-two mb-5">
            <ul class="list-unstyled mt-4" v-if="post.category == 7">
              <li class="text-secondary mb-1">Device Used: {{post.device_type}}</li>
              <li class="text-secondary">Location: {{post.location}}</li>
            </ul>

            <ul class="post-keypoints mt-4 ml-4" v-else>
              <li
                class="text-secondary my-3"
                v-for="point in post.keypoint"
                :key="point.id"
              >{{point}}</li>
            </ul>
          </div>
        </div>

        <div class="col-12 post-content-body text-dark" v-html="post.body"></div>

        <div class="col-12 mt-5 pt-5 text-center">
          <h3 class="text-uppercase mb-3">Posted {{post.created | customizedTime}} by:</h3>

          <div class="authors-img">
            <img :src="post.author.image_url" alt="Author's Image" class="rounded-circle">
          </div>

          <div class="pt-2">
            <h3 class="mt-1">{{post.author.first_name}} {{post.author.last_name}}</h3>
            <h5 class="author-email mt-1">{{post.author.email}}</h5>
          </div>

          <div class="col-12 text-center mt-3 pt-5">
            <div class="row" style="padding: 0rem 20rem;">
              <div class="col pt-1">
                <h3 class="mt-2">Sharing is caring:</h3>
              </div>

              <div class="col-auto">
                <social-buttons :slug="slug"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Facebook, Twitter, Linkedin } from "vue-socialmedia-share";
import SocialButtons from "@/components/SocialButtons.vue";
import Preloader from "@/components/preloader.vue";

export default {
  components: {
    Facebook,
    Twitter,
    Linkedin,
    SocialButtons,
    Preloader
  },
  data: function() {
    return {
      post: {}
    };
  },
  computed: {
    url() {
      return `${this.$BASE_URL}posts/${this.post.slug}`;
    },
    ...mapState(["general", "auth"]),

    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.post.category
        );
        return postCategory;
      }
    }
  },
  methods: {
    ...mapActions(["getPostBySlug"]),
    async getPostForDisplay() {
      // fetch the data when the view is created and the data is
      // already being observed
      let { slug } = this.$route.params;

      this.post = await this.getPostBySlug({ slug });
    }
  },
  watch: {
    async $route(to, from) {
      await this.getPostForDisplay();
    }
  },
  async created() {
    await this.getPostForDisplay();
  },
  beforeDestroy: function() {
    this.post = {};
  }
};
</script>

<style scoped>
#post-display {
  padding-bottom: 6rem !important;
}

#post-display .post-img {
  width: 100%;
  max-height: 30rem;
  margin-bottom: 1rem;
  object-fit: cover;
}

#post-display .details-sec-two ul li {
  font-size: 16px;
}

#post-display .details-sec-three .author-email {
  font-size: 13px;
}

#post-display .post-content-body {
  font-size: 18px;
}

#post-display .authors-img img {
  width: 100px;
  height: 100px;
}
</style>
