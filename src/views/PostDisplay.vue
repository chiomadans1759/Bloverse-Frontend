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

          <post-social-share></post-social-share>

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
  },
  metaInfo() {
    return {
      title: this.general.currentPost.title,
      meta: [
        { charset: "utf-8" },
        {
          vmid: "description",
          name: "description",
          content: this.general.currentPost.body
        },
        {
          property: "og:title",
          content: this.general.currentPost.title,
          vmid: "og:title"
        },
        {
          property: "og:description",
          content: this.general.currentPost.body,
          vmid: "og:description"
        },
        {
          property: "og:image",
          content: this.general.currentPost.image_url,
          vmid: "og:image"
        },
        {
          property: "twitter:title",
          content: this.general.currentPost.title,
          vmid: "twitter:title"
        },
        {
          property: "twitter:description",
          content: this.general.currentPost.body,
          vmid: "twitter:description"
        }
      ]
    };
  }

  // head: {
  //   // const this = self,
  //   title: function() {
  //     return {
  //       inner: `${this.general.currentPost.title}`
  //     };
  //   },
  //   // Meta tags
  //   meta: function() {
  //     return [
  //       { name: "application-name", content: "Bloverse" },
  //       {
  //         name: "description",
  //         content: "A platform for journalist",
  //         id: "desc"
  //       }, // id to replace intead of create element
  //       // ...
  //       // Twitter
  //       { name: "twitter:title", content: `${this.general.currentPost.title}` },
  //       // with shorthand
  //       { n: "twitter:description", c: `${this.general.currentPost.body}` },
  //       // ...
  //       // Google+ / Schema.org
  //       { itemprop: "name", content: `${this.general.currentPost.title}` },
  //       {
  //         itemprop: "description",
  //         content: `${this.general.currentPost.body}`
  //       },
  //       // ...
  //       // Facebook / Open Graph
  //       // { property: 'fb:app_id', content: '123456789' },
  //       { property: "og:title", content: `${this.general.currentPost.title}` },
  //       {
  //         property: "og:description",
  //         content: `${this.general.currentPost.body}`
  //       },
  //       // with shorthand
  //       { p: "og:image", c: `${this.general.currentPost.image_url}` }
  //       // ...
  //     ];
  //     // link tags
  //   }
  //   // link: [
  //   //   { rel: "author", href: "author", undo: false }, // undo property - not to remove the element
  //   //   {
  //   //     rel: "icon",
  //   //     href:
  //   //       "https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png",
  //   //     type: "image/png"
  //   //   }
  //   //   ]

  //   // with shorthand
  //   //   { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
  //   // ...
  // }
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
</style>
