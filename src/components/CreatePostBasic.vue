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
        :rules="validatePostForm"
        style="margin-top: 6rem;"
      >
        <Row type="flex" justify="space-between">
          <Col :sm="24" id="create-post">
            <Row type="flex" justify="space-between">
              <DisplayImage v-model="post.image_url" height="200px" width="100%" :can-edit="true"/>
            </Row>

            <br>

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

            <Row type="flex" justify="space-between">
              <Col :sm="11">
                <Select v-model="post.category" placeholder="Choose Category" :disabled="isTravel">
                  <Option
                    v-for="cat in general.categories"
                    v-show="cat.name != 'Photo Contest'"
                    :value="cat.id"
                    :key="cat.id"
                  >{{cat.name}}</Option>
                </Select>
              </Col>
              <Col :sm="11">
                <Select v-model="post.country" placeholder="Choose Country" :disabled="isTravel">
                  <Option
                    v-for="item in general.countries"
                    :value="item.id"
                    :key="item.id"
                    v-show="item.name != 'All'"
                  >{{item.name}}</Option>
                </Select>
              </Col>
            </Row>

            <br>

            <section>
              <div class="key-points" v-if="isTravel">
                <input
                  v-model="post.location"
                  ref="autocomplete"
                  placeholder="Location"
                  class="search-location"
                >
                <FormItem prop="duration">
                  <DatePicker
                    v-model="post.duration"
                    id="keypoint"
                    type="date"
                    placement="bottom-end"
                    placeholder="Date Taken"
                    style="width: 100%"
                  ></DatePicker>
                </FormItem>
                <FormItem prop="device_type">
                  <Select placeholder="Device Used" id="keypoint" v-model="post.device_type">
                    <Option
                      v-for="item in deviceList"
                      :value="item.value"
                      :key="item.value"
                    >{{ item.label }}</Option>
                  </Select>
                </FormItem>
              </div>

              <div class="keypoints" v-else>
                <FormItem
                  v-for="(val, index) in 3"
                  :key="index"
                >
                  <Input :placeholder="`Keypoint ${index+1}`" v-model="post.keypoint[index]"/>
                </FormItem>
              </div>
            </section>

            <div class="row">
              <div class="col-md-12">
                <tinymce
                  v-if="showTiny || post_content"
                  class="form-control required"
                  v-model="tinyMiceValue"
                ></tinymce>
              </div>
            </div>

            <br>

            <div>
              <Button id="btn-draft" @click="handleProcessPost()" class="text-uppercase mt-3">
                <span>{{ post.id ? 'Save Changes' : 'Save as draft' }}</span>
              </Button>
              <button
                type="button"
                @click="previewPosts()"
                class="float-right btn btn-primary btn-md text-white"
              >Preview</button>
            </div>
          </Col>
        </Row>
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
import devices from "../utils/devices.json";

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
              this.$router.push(
                `/creators/${this.auth.loggedInUser.username}/posts`
              );
              if (shouldPublish) {
                this.slug = this.post.slug; //gets value of slug before clearing post object - for purpose of social share
                this.clearTinyMceEditor();
                this.clearPost();
              } else {
                //perform action if save as draft
                // uncomment next line if edit features now work well.
                //this.takeToMyPosts()
              }
              this.previewPost = false;
            }
            if (response.errors) {
              this.handleError(response.errors);
              this.$Message.error("Something went wrong");
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
#create-basic-post #form-control {
  height: 3rem !important;
}
.isTravel {
  position: relative;
  top: -1.6rem;
}
#create-basic-post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120vh;
  margin-top: -80px;
}
.search-location {
  width: 100%;
  padding: 0.3rem 1.25rem;
  margin-bottom: 1.2rem;
  display: inline-block;
  box-sizing: border-box;
}
.delete-btn {
  margin: 0.6em;
  width: 10rem;
}
#display-post #image {
  width: 100%;
  height: auto;
}
#display-post #title {
  padding: 0 1.5rem;
  margin-bottom: 2rem;
}
#display-post #body {
  padding: 0 1.5rem;
  margin-top: 2rem;
}
#modal-focus p {
  width: 100% !important;
  object-fit: contain;
}
@media screen and (max-width: 360px) {
  #mobile {
    display: flex;
    flex-direction: column;
  }
  #every {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 600px) {
  #mobile {
    display: flex;
    flex-direction: column;
  }
  #every {
    display: flex;
    flex-direction: column;
  }
  #btn-draft {
    width: 100%;
    margin-bottom: 5px;
  }
  #btn-publish {
    width: 100%;
    margin-bottom: 10px;
  }
}
#create-basic-post .previewMade #content {
  width: 100% !important;
  overflow-x: hidden !important;
}
.container-fluid.previewMade p {
  padding: 0px 13px;
  margin-top: 2%;
}
.container-fluid.previewMade ul {
  padding: 0px 30px;
}
.container-fluid.previewMade h1 {
  font-size: 29px;
  padding: 0px 11px;
  margin-bottom: 2%;
}
.container-fluid.previewMade div {
  margin-top: 2%;
  margin-bottom: 2%;
}
.container-fluid.previewMade {
  padding: 29px;
}
</style>

<style>
#upload-post-image .ivu-upload-drag {
  display: flex;
  width: 200px;
  height: 200px;
}
.ivu-btn {
  font-size: 18px;
  width: 200px;
  font-weight: bold;
  line-height: 21px;
}
#btn-draft {
  background-color: white;
  color: var(--primary);
  padding: 0px !important;
  background: transparent !important;
  border: none !important;
  font-size: 12px;
  margin-top: 0.5rem;
}
#btn-publish {
  background-color: var(--primary);
  color: white;
  width: 20%;
  height: 2.5rem;
}
.red-border {
  border: 1px solid red;
}
.keypoints .ivu-input-wrapper {
  margin: 0.5rem 0;
}
.posts {
  position: relative;
}
.ivu-modal-close .ivu-icon-ios-close {
  font-size: 31px;
  color: #999;
  transition: color 0.2s ease;
  top: 1px;
  margin-top: 0;
  float: right;
  right: 0px !important;
}
.container-fluid.previewMade section#img-display {
  background: #aca7a7;
  border: 0.1px solid grey;
  width: 100%;
  height: 500px !important;
}
div#modalfocus .ivu-modal-mask {
  background: #fff;
}
div#modalfocus .ivu-modal-content {
  box-shadow: none !important;
  border: 1px solid #d9d9d9;
  border-radius: 1px !important;
}
</style>
