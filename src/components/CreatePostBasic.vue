<template>
  <main id="create-basic-post">
    <!-- SUCCESS MODAL -->
    <Modal v-model="publishModal" @on-visible-change="handleModalChange">
      <Alert type="success">Success</Alert>
      <div class="text-center">
        <p>Your post has been successfully published</p>
        <div class="posts">
          <social-buttons :slug="slug"></social-buttons>
        </div>
      </div>
      <div slot="footer">
        <router-link :to="`/creators/${auth.loggedInUser.username}/posts`">Go to all Post
          <Icon type="md-arrow-round-forward"/>
        </router-link>
      </div>
    </Modal>

    <div id="mobile" :class="{ isTravel: isTravel }">
      <Form
        :model="post"
        ref="basicCreatePostForm"
        class="travel-form"
        :rules="validatePostForm">
        <div class="row mb-4">
          <div class="col-12">
            <DisplayImage v-model="post.image_url" :can-edit="true"/>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <label>Article Title</label>
            <FormItem prop="title" :error="errors.title">
              <div
                class="alert alert-danger py-0"
                role="alert"
                v-if="post.title != undefined && post.title.length == 150"
              >150 maximum characters for title exceeded.</div>
              <Input
                id="form-control"
                placeholder="What's your title?"
                v-model="post.title"
                :maxlength="max"
              />
            </FormItem>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-6">
            <label>Category</label>
          
            <Select v-model="post.category" placeholder="Choose Category" :disabled="isTravel">
              <Option
                v-for="cat in general.categories"
                v-show="cat.name != 'Photo Contest'"
                :value="cat.id"
                :key="cat.id"
              >{{cat.name}}</Option>
            </Select>
          </div>

          <div class="col-md-6">
            <label>Country</label>

            <Select v-model="post.country" placeholder="Choose Country" :disabled="isTravel">
              <Option
                v-for="item in general.countries"
                :value="item.id"
                :key="item.id"
                v-show="item.name != 'All'"
              >{{item.name}}</Option>
            </Select>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 keypoints">
            <label>Keypoints</label>

            <FormItem
              v-for="(val, index) in 3"
              :key="index">
              <Input :placeholder="`Keypoint ${index+1}`" v-model="post.keypoint[index]"/>
            </FormItem>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col-md-12">
            <label>Article Body</label>

            <br />

            <tinymce
              v-if="showTiny || post_content"
              class="form-control required"
              v-model="tinyMiceValue"
            ></tinymce>
          </div>
        </div>

        <div class="mb-4">
          <div class="text-center">
            <button @click="handleProcessPost()" class="btn btn-secondary mr-2" style="border-radius: 2px;">
              <span>{{ post.id ? 'Save Changes' : 'Save as draft' }}</span>
            </button>

            <button
              type="button"
              @click="previewPosts()"
              class="btn btn-secondary ml-2" style="border-radius: 2px;">
              <span>Preview Article</span>
            </button>
          </div>
        </div>
      </Form>
    </div>

    <!-- PREVIEW POST  -->
    <div id="modalfocus">
      <Modal v-model="previewPost" width="70%" :loading="loading">
        <div v-if="!post.title">
          <h1 class="text-center" style="padding:100px;">NOTHING TO PREVIEW YET</h1>
        </div>       
        <PostDetails v-else :post="postDetails" />
        <div slot="footer">
          <div class="text-center mt-4 mx-5">
            <Button
              id="btn-publish"
              :disabled="post.is_published || this.isPublishing"
              @click="handleProcessPost(true)"
            >{{ isPublishing ? 'PUBLISHING ...' : 'PUBLISH' }}</Button>
          </div>
        </div>
      </Modal>
    </div>
  </main>
</template>

<script>
import {
  Row,
  Col,
  Card,
  Input,
  Upload,
  Icon,
  Button,
  Select,
  Option,
  Modal,
  Alert,
  Form,
  FormItem,
  DatePicker
} from "iview";
import { mapState, mapActions } from "vuex";
import SocialButtons from "@/components/SocialButtons";
import { Push } from "vue-burger-menu";
import DisplayImage from "./DisplayImage";
import Tinymce from "./Tinymce";
import PostDetails from "./PostDetails"
import devices from "@/utils/devices.json";

export default {
  components: {
    Row,
    Col,
    Card,
    Input,
    Upload,
    Icon,
    Button,
    Select,
    Option,
    Modal,
    Alert,
    SocialButtons,
    DisplayImage,
    DatePicker,
    Tinymce,
    Form,
    FormItem,
    Push,
    PostDetails
  },
  props: ["isTravel"],
  data: function() {
    return {
      showTiny: false,
      slug: null,
      loading: false,
      editor_settings: {
        myPlugins: [
          "advlist autolink lists link image charmap print preview anchor textcolor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table contextmenu paste code directionality template colorpicker textpattern"
        ],
        myToolbar1:
          "undo redo | bold italic strikethrough | forecolor backcolor | template link | bullist numlist | ltr rtl | removeformat",
        myToolbar2: "",
        myOtherOptions: {
          height: 200,
          templates: [
            { title: "Test template 1", content: "Test 1" },
            { title: "Test template 2", content: "Test 2" }
          ],
          content_css: "css/tinymce-content.css",
          theme: "modern"
        }
      },
      tinyMiceValue: null,
      post_content: false,
      post: { keypoint: [], body: "" },
      errors: {},
      previewPost: false,
      max: 150,
      validatePostForm: {
        device_type: [
          {
            required: true,
            type: "string",
            message: "You must choose a device",
            trigger: "change"
          }
        ],
        location: [
          {
            required: true,
            type: "array",
            message: "The location is required",
            trigger: "blur"
          }
        ],
        duration: [
          {
            required: true,
            type: "date",
            message: "Please select a date",
            trigger: "change"
          }
        ],
        title: [
          { required: true, message: "The title is required", trigger: "blur" }
        ]
      },
      isPublishing: false,
      publishModal: false,
      isNewImage: false,
      deviceList: devices
    };
  },
  computed: {
    ...mapState(["general", "auth", "journalist"]),
    isEditPage() {
      return this.$route.fullPath.includes("edit");
    },
    isCreatePage() {
      return this.$route.fullPath.includes("create");
    },
    postDetails(){

      let { keyPoints:keypoint } = this.post;

      let details = { keypoint };

      details = {...details, ...this.post};
      details.body = this.tinyMiceValue;

      return details;
    }
  },
  methods: {
    ...mapActions(["processPost", "getPostBySlug"]),

    previewPosts() {
      if (this.post.title == "") {
        window.onbeforeunload = function(event) {
          return confirm("Fill in a title");
        };
      } else {
        this.post.body = this.tinyMiceValue;
        this.previewPost = true;
      }
    },

    setPost(params) {
      this.post = { ...this.post, ...params };
    },

    clearPost() {
      this.post = { keypoint: []};
    },

    handleModalChange(status) {
      if (!status) this.takeToMyPosts();
    },

    takeToMyPosts() {
      this.$router.push({
        path: `/creators/${this.auth.loggedInUser.username}/posts`
      });
    },

    handleProcessPost: async function(shouldPublish = false) {
      this.errors = {};
      if (this.isTravel) {
        if (this.post.location === "") {
          return this.$Message.error("You must select a location");
        }
        this.post.location = this.$refs.autocomplete.value;
      }else if(this.post.keypoint.length < 1){
        return this.$Message.error("You must include at least 1 keypoint for post");
      }

      
      this.$refs.basicCreatePostForm.validate(async valid => {
        if (valid) {
          this.post.body = this.tinyMiceValue;
          if (!this.post.body || !this.post.body.trim()) {
            return this.$Message.error("Body cannot be empty");
          }
          if (this.post.image_url) {
            this.isPublishing = true;

            let response = await this.processPost({
              shouldPublish,
              shouldUploadImage: this.isNewImage,
              post: this.post
            });
            let success = !!response.id;
            this.isPublishing = false;
            if (success) {
              this.post = response;
              this.$Message.success("Post successfully saved");
              this.publishModal = shouldPublish;
              this.takeToMyPosts()
            }

            if (response.statusText === 'error') {
              return this.$Message.error(response.message);
            }else {
              this.handleError(response.errors);
              return this.$Message.error("Something went wrong");
            }
          } else this.$Message.error("You must select an image");
        } else {
          return this.$Message.error("Some fields have not been filled.");
        }
      });
    },

    handleError(errors) {
      let fieldErrors, varClient;
      let clientServer = {
        message: "title"
      };
      Object.keys(errors).forEach(field => {
        fieldErrors = errors[field];
        varClient = clientServer[field];
        this.$set(this.errors, varClient, fieldErrors);
      });
    },

    clearTinyMceEditor() {
      this.tinyMiceValue = "";
    },

    checkTravel() {
      if (this.isTravel) {
        this.setPost({
          category: 7,
          country: this.auth.loggedInUser.country.id
        });
        this.$nextTick(() => {
          this.autocomplete = new google.maps.places.Autocomplete( // eslint-disable-line no-undef
            this.$refs.autocomplete,
            { types: ["geocode"] }
          );
          this.autocomplete.addListener("place_changed", () => {
            let place = this.autocomplete.getPlace();
            this.post.location = place.formatted_address;
          });
        });
      } else {
        this.setPost({
          category: this.auth.loggedInUser.category.id,
          country: this.auth.loggedInUser.country.id
        });
      }
    },

    async postData() {
      let slug = this.$route.params.slug;
      if (slug) {
        let post = await this.getPostBySlug({ slug });
        this.post = post;
        this.tinyMiceValue = post.body;
        this.showTiny = true;
      } else {
        this.post_content = true;
      }
    }
  },
  watch: {
    "post.image_url": function() {
      this.isNewImage = true;
    },
    isTravel: function() {
      this.checkTravel();
    },
    isEditPage: function(isOnEditPage) {
      if (isOnEditPage === false) {
        this.clearTinyMceEditor();
        this.clearPost();
      }
    }
  },
  async mounted() {
    await this.checkTravel();
  },
  async created() {
    await this.postData();
  }
};
</script>

<style scoped>
#create-post-basic .keypoints .ivu-input-wrapper {
  margin: 0.5rem 0;
}
</style>
