<template>
  <main id="post-display">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <post-details :post="post"></post-details>
        </div>
        <div class="col-md-4 pt-3">
          <post-author :author="post.author" class="mb-5"></post-author>
          <post-social-share :slug="post.slug"></post-social-share>
          <related-posts />
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
import { mapState, mapActions } from "vuex";
import { Facebook, Twitter, Linkedin } from "vue-socialmedia-share";
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
    PostDetails,
    PostAuthor,
    PostSocialShare,
    RelatedPosts
  },
  data: function() {
    return {
      post: {},
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
        return postCategory.name;
      }
    }
  },
  methods: {
    ...mapActions(["getPostBySlug"]),
    async getPostForDisplay(){
      // fetch the data when the view is created and the data is
      // already being observed
      let { slug } = this.$route.params;

      this.post = await this.getPostBySlug({ slug });
    }
  },
  watch: {
    async '$route'(to, from) {
      await this.getPostForDisplay()
    }
  },
  async created() {
    await this.getPostForDisplay()
  },
  beforeDestroy: function(){
    this.post = {}
  }
};
</script>

<style scoped>
#post-display {
  padding-bottom: 6rem !important;
}
</style>
