<template>
  <main class="post-display">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <post-details></post-details>
        </div>

        <div class="col-md-4">
          <author-card :author="general.currentPost.author"></author-card>
          <br>
          <post-social-share :slug="general.currentPost.slug"></post-social-share>
          <br />
          <related-posts></related-posts>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  Row,
  Col,
  Card,
  Input,
  Select,
  Option,
  Icon,
  FormItem,
  Form,
  Button
} from "iview";
import { mapGetters, mapState, mapActions } from "vuex";
import { Facebook, Twitter, Linkedin } from "vue-socialmedia-share";
import PostDetails from "@/components/PostDetails.vue";
import AuthorCard from "@/components/AuthorCard.vue";
import PostSocialShare from "@/components/PostSocialShare";
import RelatedPosts from "@/components/RelatedPosts";

export default {
  components: {
    Row,
    Col,
    Card,
    Input,
    Select,
    Option,
    Icon,
    FormItem,
    Form,
    Button,
    Facebook,
    Twitter,
    Linkedin,
    PostDetails,
    AuthorCard,
    PostSocialShare,
    RelatedPosts
  },
  data: function() {
    return {
      newComment: "",
      postDetails: {}
      //url: 'https://bloverse-frontend.herokuapp.com/#/posts' + this.post.slug
    };
  },

  computed: {
    url() {
      return `${this.$BASE_URL}posts/${this.general.currentPost.slug}`;
    },
    // titleTemplate: titleChunk => {
    //   // If undefined or blank then we don't need the hyphen
    //   return titleChunk
    //     ? `${this.general.currentPost.title} - Site Title`
    //     : "Site Title";
    // },
    ...mapState(["general", "auth"]),
    ...mapGetters(["isLoggedIn"]),

    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.general.currentPost.category
        );
        return postCategory.name;
      }
    }
  },
  methods: {
    ...mapActions(["getPostBySlug"])
  },

  async created() {
    // fetch the data when the view is created and the data is
    // already being observed
    let { slug } = this.$route.params;
    await this.getPostBySlug({ slug });
    this.postDetails = this.general.currentPost;
  }
};
</script>

<style scoped>
.post-display {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  overflow-x: hidden;
  padding-bottom: 10rem;
  font-family: "Montserrat", sans-serif;
}

@media only screen and (max-width: 980px) {
  .col-md-4 {
    padding-top: 2rem;
  }
}
</style>
