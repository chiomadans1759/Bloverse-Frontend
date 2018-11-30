<template>
  <div>
    <Modal v-model="publishModal">
      <Alert type="success">Success</Alert>
      <div>
        <p>Your post has been successfully published</p>
        <div class="posts">
          <vue-goodshare-facebook
            :page_url="url"
            has_icon
            style="font-size: 25px;"
          >
          </vue-goodshare-facebook>
          <vue-goodshare-twitter
            :page_url="url"
            has_icon
            style="font-size: 25px;"
          >
          </vue-goodshare-twitter>
        </div>
      </div>
      <div slot="footer">
        <router-link :to="`/creators/${auth.loggedInUser.userName}/posts`" >Go to all Post <Icon type="md-arrow-round-forward" /></router-link>
      </div>
    </Modal>
    <div id="mobile">
    <Form :model="post" ref="basicCreatePostForm" :rules="validatePostForm">
      <Row type="flex" justify="space-between">
      <Col :sm="13"  id="create-post">
        <Row  type="flex"  justify="space-between">
          <Col :sm="11">
            <Select v-model="post.category" placeholder="Choose Category" :disabled="isTravel">
              <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
          <Col :sm="11">
            <Select v-model="post.country" placeholder="Choose Country" :disabled="isTravel">
              <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
        </Row>
        
        <Card class="key-points" v-if="isTravel">
          <input v-model="post.location" ref="autocomplete" placeholder="Location" class="search-location" />
          <FormItem prop="duration">
            <DatePicker v-model="post.duration" id="keypoint" type="date" placement="bottom-end" placeholder="Time Taken" style="width: 100%"></DatePicker>
          </FormItem>

          <FormItem prop="deviceType">
            <Select placeholder="Device Used"  id="keypoint" v-model="post.deviceType">
              <Option  v-for="item in deviceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </Card>

        <Card class="keypoints" v-else>
          <FormItem 
          v-for="(keypoint, index) in post.keyPoints" 
          :key="index" :prop="`keyPoints.${index}.value`" 
          :rules="{required: index === 0, message: 'Please provide at least one keypoint', trigger: 'change' }"
          >
            <Input placeholder="Add a keypoint" v-model="keypoint.value" size="large" />
          </FormItem>
        </Card>
        <FormItem prop="title" :error="errors.title">
          <Input placeholder="Heading" v-model="post.title" />
        </FormItem>

        <DisplayImage v-model="post.imageUrl" height="200px" width="80%" :can-edit="true" />

        <div class="row">
          <div class="col-md-12">
            <tinymce class="form-control required" v-model="post.body"></tinymce>

          </div>
        </div>
        

        <br />

        <Row  id="every" type="flex" justify="space-between">
          <Col :sm="10" >
            <Button id="btn-draft" @click="handleProcessPost()">
              <span v-if="post.id">Save Changes</span>
              <span v-else>Save as draft</span>
            </Button>
          </Col>
          <Col :sm="10">
            <Button id="btn-publish" :disabled="post.is_published || this.isPublishing" @click="handleProcessPost(true)">
              {{ isPublishing ? 'Publishing ...' : 'Publish' }}
            </Button>
          </Col>
        </Row>
      </Col>

      <Col id=otherside :sm="10">
        <Card id="display-post">
          <h2 id="title">{{post.title}}</h2>
          <DisplayImage :value="post.imageUrl" height="200px" width="100%" :can-edit="false" />
          <p v-html="post.body" id="body">
          </p>
        </Card>
      </Col>
    </Row>

    </Form>
    </div>
  </div>
  
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
    FormItem
  },
  props: ["isTravel"],
  data: function() {
    return {
      errors: {},
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
    }
  },
  watch: {
    "post.imageUrl": function() {
      this.isNewImage = true;
    }
  },
  mounted() {
    if (this.isTravel) {
      this.setPost({ category: 7, country: this.auth.loggedInUser.country.id });
      this.autocomplete = new google.maps.places.Autocomplete( // eslint-disable-line no-undef
        this.$refs.autocomplete,
        { types: ["geocode"] }
      );

      this.autocomplete.addListener("place_changed", () => {
        let place = this.autocomplete.getPlace();
        this.post.location = place.formatted_address;
      });
    } else {
      this.setPost({
        category: this.auth.loggedInUser.category.id,
        country: this.auth.loggedInUser.country.id
      });
    }
  }

  /*let { data, status } = await this.createOrUpdatePost();
        status = status === 403 ? 401 : status; //Convert 403 response error to 401;

        switch(status){
          case 200:
          case 201:
            let { id, title, body, image_url: imageUrl, country: countryId, category: categoryId, keypoint: keyPoints } = data.data.post;
            this.modal = {status: data.status};
            this.post = { id, title, body, imageUrl, countryId, categoryId, keyPoints };
            break;
          case 400:
            this.modal = { data: data.data, status: 'error' };
            break;
          case 401: 
            // Unauthenticated
            break;
          default:
            this.modal = {status: 'Error', data: {'SERVER ERROR': ['The server is not responding, can you try again']}};
        }
        this.modal.action = 'SAVE';

      publishPost: async function(){
        let response, config;
        
        try{
          config = { headers: {'Authorization': `Token ${this.session.token}`}};
          if(this.post.id)
            response = await this.$http.put(`/api/v1/posts/${this.post.id}/publish/`, {}, config)
        }catch(error){
          response = error.response;
        }

        return response;
      },
      handlePublish: async function(){
        //Perform Create Or update
        await this.handleSave();

        //if it didn't fail perform Publish
        if(this.modal.status === 'success'){
          let { data, status } = await this.publishPost();
          status = status === 403 ? 401 : status; //Convert 403 response error to 401;

          //Convert 403 response error to 401 when it results from not authenticated
          if(status === 403){
            if(data.message === "You are not authenticated")
              status = 401;
          }

          //and process repsonse
          switch(status){
            case 200:
            case 201:
              let { id, title, body, image_url: imageUrl, country: countryId, category: categoryId, keypoint: keyPoints } = data.data.post;
              this.modal = {status: data.status};
              this.post = { id, title, body, imageUrl, countryId, categoryId, keyPoints };
              break;
            case 400:
              this.modal = { data: data.data, status: 'error' };
              break;
            case 401: 
              // Unauthenticated
            case 403:
              // post doesn't belong to him/her
              break;
            default:
              this.modal = {status: 'Error', data: {'SERVER ERROR': ['The server is not responding, can you try again']}};
          }

          this.modal.action = 'PUBLISH';

        }
        
        
      },*/
};
</script>


<style scoped>
#otherside{
 
}
#create-post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120vh;
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
#mobile{
  border:1px solid red;
  display:flex;
  flex-direction: column;
  
}
#every{
  display:flex;
  flex-direction: column;
}
 }
  @media screen and (max-width: 600px) {
#mobile{
  border:1px solid red;
  display:flex;
  flex-direction: column
}
#every{
  display:flex;
  flex-direction: column;
  
}
#btn-draft{
  width:100%;
  margin-bottom:5px
}
#btn-publish{
  width:100%;
  margin-bottom:10px
}
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
}

#btn-publish {
  background-color: var(--primary);
  color: white;
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
