<template>
  <main id="post-display">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <post-details></post-details>
        </div>

        <div class="col-md-4 pt-3">
          <post-author :author="general.currentPost.author" class="mb-5"></post-author>
          <post-social-share :slug="general.currentPost.slug"></post-social-share>
          <related-posts :post_id="general.currentPost.id" />
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
import Loading from "@/components/Loading";
import PostDetails from "@/components/PostDetails.vue";
import PostAuthor from "@/components/PostAuthor.vue";
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
    Loading,
    PostDetails,
    PostAuthor,
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
    // console.log({slug})
    await this.getPostBySlug({ slug });
    this.postDetails = this.general.currentPost;
  }
};
</script>

<style scoped>
#post-display {
  padding-bottom: 6rem !important;
}
</style>
