<template>
  <main id="create-basic-post">
    <Modal v-model="publishModal">
      <Alert type="success">Success</Alert>
      <div>
        <p>Your post has been successfully published</p>
        <div class="posts">
          <vue-goodshare-facebook :page_url="url" has_icon style="font-size: 25px;"></vue-goodshare-facebook>
          <vue-goodshare-twitter :page_url="url" has_icon style="font-size: 25px;"></vue-goodshare-twitter>
        </div>
      </div>
      <div slot="footer">
        <router-link :to="`/creators/${auth.loggedInUser.userName}/posts`">Go to all Post
          <Icon type="md-arrow-round-forward"/>
        </router-link>
      </div>
    </Modal>

    <div id="mobile" :class="{ isTravel: isTravel }">
      <Form :model="post" ref="basicCreatePostForm" class="travel-form" :rules="validatePostForm" style="margin-top: 6rem;">
        <Row type="flex" justify="space-between">
          <Col :sm="24" id="create-post">
            <DisplayImage v-model="post.imageUrl" height="200px" width="100%" :can-edit="true"/>

            <br>

            <FormItem prop="title" :error="errors.title">
              <Input id="form-control" placeholder="What's your title?" v-model="post.title" :maxlength="max"/>
            </FormItem>

            <Row type="flex" justify="space-between">
              <Col :sm="11">
                <Select v-model="post.category" placeholder="Choose Category" :disabled="isTravel">
                  <Option
                    v-for="item in general.categories"
                    :value="item.id"
                    :key="item.id"
                    v-if="item.name != 'All'"
                  >{{item.name}}</Option>
                </Select>
              </Col>
              <Col :sm="11">
                <Select v-model="post.country" placeholder="Choose Country" :disabled="isTravel">
                  <Option
                    v-for="item in general.countries"
                    :value="item.id"
                    :key="item.id"
                    v-if="item.name != 'All'"
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
                    placeholder="Time Taken"
                    style="width: 100%"
                  ></DatePicker>
                </FormItem>

                <FormItem prop="deviceType">
                  <Select placeholder="Device Used" id="keypoint" v-model="post.deviceType">
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
                  v-for="(keypoint, index) in post.keyPoints"
                  :key="index"
                  :prop="`keyPoints.${index}.value`"
                  :rules="{required: index === 0, message: 'Please provide at least one keypoint', trigger: 'change' }"
                >
                  <Input :placeholder="`Keypoint ${index+1}`" v-model="keypoint.value"/>
                </FormItem>
              </div>
            </section>

            <div class="row">
              <div class="col-md-12">
                <tinymce class="form-control required" v-model="post.body"></tinymce>
              </div>
            </div>

            <br>

            <div>
              <Button id="btn-draft" @click="handleProcessPost()" class="text-uppercase mt-3">
                <span v-if="post.id">Save Changes</span>
                <span v-else>Save as draft</span>
              </Button>

              <a @click="previewPosts()" class="float-right btn btn-primary btn-md text-white">Preview</a>
            </div>
          </Col>
        </Row>
      </Form>

      <!-- <Col id="otherside" :sm="10">
        <Card id="display-post">
          <h2 id="title">{{post.title}}</h2>
          <DisplayImage :value="post.imageUrl" height="200px" width="100%" :can-edit="false"/>
          <p v-html="post.body" id="body"></p>
        </Card>
      </Col>-->
    </div>

    <!-- PREVIEW POST  -->
    <div id="modalfocus">
      <Modal
        v-model="previewPost"
        width="70%"
        :loading="loading"
        >
     <div v-if="!post.title">
       <h1 class="text-center" style="padding:100px;">NOTHING TO PREVIEW YET</h1>
     </div>
     <div v-if="post.title">
        <div class="container-fluid previewMade">
          <h4>Preview</h4>
            <!-- <p>{{post.category}}</p> -->
            <DisplayImage v-model="post.imageUrl" height="200px" width="100%" :can-edit="false" />
            <h1>{{post.title}}</h1>
            <ul v-for="(keypoint) in post.keyPoints" :key="keypoint.value">
              <li>{{keypoint.value}}</li>
            </ul>
            <p v-html="post.body"></p>

            <div class="text-center mt-4 mx-5">
              <Button
                id="btn-publish"
                :disabled="post.is_published || this.isPublishing"
                @click="handleProcessPost(true)">
                {{ isPublishing ? 'PUBLISHING ...' : 'PUBLISH' }}
              </Button>
            </div>
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
import { mapState, mapActions, mapMutations } from "vuex";
import { VueEditor } from "vue2-editor";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";

import { Push } from 'vue-burger-menu';
import DisplayImage from "./DisplayImage";
import Tinymce from "./Tinymce";

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
    VueGoodshareFacebook,
    VueGoodshareTwitter,
    VueEditor,
    DisplayImage,
    DatePicker,
    Tinymce,
    Form,
    FormItem,
    Push
  },

  props: ["isTravel"],

  data: function() {
    return {
      errors: {},
      previewPost:false,
      max: 50,
      validatePostForm: {
        deviceType: [
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
      deviceList: [
        {
          value: "IPhone",
          label: "IPhone"
        },
        {
          value: "Samsung",
          label: "Samsung"
        },
        {
          value: "Techno",
          label: "Techno"
        },

        {
          value: "Infinix",
          label: "Infinix"
        },
        {
          value: "Gionee",
          label: "Gionee"
        },
        {
          value: "Nokia",
          label: "Nokia"
        },
        {
          value: "ZTE",
          label: "ZTE"
        },
        {
          value: "Lenovo",
          label: "Lenovo"
        },
        {
          value: "LG",
          label: "LG"
        }
      ]
    };
  },

  computed: {
    post: {
      get() {
        return this.$store.state.journalist.post;
      },
      set(props) {
        this.$store.commit("setPost", props);
      }
    },
    url() {
      return `${this.$BASE_URL}posts/${this.post.slug}`;
    },

    ...mapState(["general", "auth"])
  },

  methods: {
    ...mapActions(["processPost"]),

    ...mapMutations(["setPost"]),
    previewPosts(){
      this.previewPost = true
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
          if (!this.post.body || !this.post.body.trim()) {
            return this.$Message.error("Body cannot be empty");
          }
          if (this.post.imageUrl) {
            this.isPublishing = true;
            let success = await this.processPost({
              shouldPublish,
              shouldUploadImage: this.isNewImage
            });
            this.isPublishing = false;
            if (success === true) {
              this.$Message.success("Post successfully saved");
              this.publishModal = shouldPublish;
              this.clearTinyMceEditor();
            }
            if (success.errors) {
              this.handleError(success.errors);
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
      this.$store.commit("setTinyMiceValue", "<p></p>");
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
    }
  },

  watch: {
    "post.imageUrl": function() {
      this.isNewImage = true;
    },

    isTravel: function() {
      this.checkTravel();
    }
  },

  mounted() {
    this.checkTravel();
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
    transition: color .2s ease;
    /* position: absolute; */
    top: 1px;
    margin-top: 0;
    float: right;
    right: 0px !important;
}

.container-fluid.previewMade section#img-display {
    background: #aca7a7;
    border: 0.1px solid grey;
    width: 100%;
    height: 400px !important;
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


<!--

mounted: async function(){
  
  if(this.$route.params.slug){
    let response;
    try {
      response = await this.$http.get(`/api/v1/posts/${this.$route.params.slug}/`);

      let { id, title, body, image_url: imageUrl, country: countryId, category: categoryId, keypoint: keyPoints } = response.data.data.post;
      this.post = { id, title, body, imageUrl, countryId, categoryId, keyPoints };
    }catch(error){
      console.log(error);
    }
  }
  
  
}

-->
