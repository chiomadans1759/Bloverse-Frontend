<template>
  <div>
    <Modal v-model="publishModal">
      <Alert type="success">Success</Alert>
      <!--<div v-if="modal.status === 'error'">
        <ul>
          <li v-for="(errors, field) in modal.data">
            {{field}}
            <ul>
             <li v-for="err in errors">{{err}}</li>  
            </ul>
          </li>
        </ul>
      </div>-->
      <div>
        <p>Your post has been successfully published</p>
         <div class="posts">
          <!-- <vue-goodshare-facebook
            page_url="https://bloverse-frontend.herokuapp.com/"
            has_icon
            style="font-size: 25px;"
          >
          </vue-goodshare-facebook>
          <vue-goodshare-twitter
            page_url="https://bloverse-frontend.herokuapp.com/"
            has_icon
            style="font-size: 25px;"
          >
          </vue-goodshare-twitter> -->
        </div>
      </div>
    </Modal>
    <!-- <h3>HHHHHHHHHHHHHHHHHHHHHHHHH</h3> -->
    <Row type="flex" justify="space-between">
      <Col span="13" id="create-post">
        <Row  type="flex"  justify="space-between">
          <Col :sm="11">
            <Select v-model="post.category" placeholder="Choose Category" disabled>
              <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{item.name}}</Option>
              <!--<Option v-for="item in general.categories" :value="item.id" :key="item.id" disabled>{{item.name}}</Option> -->
            </Select>
          </Col>
          <Col :sm="11">
            <Select v-model="post.country" placeholder="Choose Country">
              <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
        </Row>
        <Card class="key-points">
              <input
              v-model="post.location"
              ref="autocomplete" 
              placeholder="Location" 
              class="search-location"
              onfocus="value = ''" 
              type="text" />
          <DatePicker v-model="post.duration" id="keypoint" type="date" placement="bottom-end" placeholder="Time Taken" style="width: 100%"></DatePicker>
            <Select placeholder="Device Used"  id="keypoint" v-model="post.deviceType">
           <Option  v-for="item in deviceList" :value="item.value" :key="item.id">{{ item.label }}</Option>
          </Select>
        </Card>

        <Input placeholder="Heading" v-model="post.title" size="large"></Input>
        

        <DisplayImage v-model="post.imageUrl" height="200px" width="50%" :can-edit="true" />

        <vue-editor v-model="post.body" style="background: white; margin-top: 20px;"></vue-editor>

        <br />

        <Row type="flex" justify="space-between">
          <Col>
            <Button id="btn-draft" @click="handleProcessPost()">
              <span v-if="post.id">Save Changes</span>
              <span v-else>Save as draft</span>
            </Button>
          </Col>
          <Col>
            <Button id="btn-publish" :disabled="post.isPublished" @click="handleProcessPost(true)">Publish</Button>
          </Col>
        </Row>

      </Col>

      <Col span="10">
        <Card id="display-post">
          <h2 id="title">{{post.title}}</h2>
          <img :src="post.imageUrl" id="image"  />
          <p v-html="post.body" id="body">
          </p>

        </Card>
      </Col>
    </Row>
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
  DatePicker
} from "iview";
import { mapState, mapActions, mapMutations } from "vuex";
import { VueEditor } from "vue2-editor";
// import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
// import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import DisplayImage from "./DisplayImage";

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
    DatePicker,
    VueEditor,
    DisplayImage
  },
  data: function() {
    return {
      publishModal: false,
      isNewImage: false,
      deviceList: [
        {
          id: 1,
          value: "IPhone",
          label: "IPhone"
        },
        {
          id: 2,
          value: "Samsung",
          label: "Samsung"
        },
        {
          id: 3,
          value: "Techno",
          label: "Techno"
        },

        {
          id: 4,
          value: "Infinix",
          label: "Infinix"
        },
        {
          id: 5,
          value: "Gionee",
          label: "Gionee"
        },
        {
          id: 6,
          value: "Nokia",
          label: "Nokia"
        },
        {
          id: 7,
          value: "Huawei",
          label: "Huawei"
        },
        {
          id: 8,
          value: "ZTE",
          label: "ZTE"
        },
        {
          id: 9,
          value: "Lenovo",
          label: "Lenovo"
        },
        {
          id: 10,
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

    ...mapState(["general", "auth"])
  },
  methods: {
    ...mapActions(["processPost"]),
    ...mapMutations(["setPost"]),
    handleProcessPost: async function(shouldPublish = false) {
      if (this.post.imageUrl) {
        let success = await this.processPost({
          shouldPublish,
          shouldUploadImage: this.isNewImage
        });
        if (success) {
          this.$Message.success("Post successfully saved");
          this.publishModal = shouldPublish;
        } else this.$Message.error("Something went wrong");
      } else this.$Message.error("You must select an image");
    }
  },
  watch: {
    "post.imageUrl": function(val) {
      this.isNewImage = true;
    }
  },
  mounted() {
    this.setPost({ category: 7, country: this.auth.loggedInUser.country.id }),
      (this.autocomplete = new google.maps.places.Autocomplete( // eslint-disable-line no-undef
        this.$refs.autocomplete,
        { types: ["geocode"] }
      ));
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
#create-post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120vh;
  margin-bottom: 30px;
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
.rows {
  padding: 14px;
}

#btn-draft {
  background-color: white;
  color: var(--primary);
}

#btn-publish {
  background-color: var(--primary);
  color: white;
}

#keypoint {
  margin-bottom: 25px;
}

.red-border {
  border: 1px solid red;
}

.key-points .ivu-input-wrapper {
  margin: 0.5rem 0;
}

.key-points {
  margin-top: 40px;
  margin-bottom: 40px;
  height: 35vh;
}

.image {
  margin-top: 20px;
  margin-bottom: 20px;
}

.posts {
  position: relative;
}

.search-location {
  width: 100%;
  margin-bottom: 25px;
  height: 30px;
  color: black;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  padding-left: 9px;
  font-size: 13px;
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
