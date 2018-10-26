<template>
  <div>
    <Modal v-model="publishModal">
      <!-- <router-link to="/" class="goTo">Home</router-link> -->
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
           <p class="text-center">Share your posts on</p>
           <facebook :url="url" scale="3"></facebook>
           <twitter :url="url" scale="3"></twitter>
          <!-- <vue-goodshare-facebook
            page_url="https://bloverse-frontend.herokuapp.com/posts/slug"
            has_icon
            style="font-size: 25px;"
          >
          </vue-goodshare-facebook> -->
          <!-- <vue-goodshare-twitter
            page_url="https://bloverse-frontend.herokuapp.com/posts/slug"
            has_icon
            style="font-size: 25px;"
          >
          </vue-goodshare-twitter> -->
        </div>
      </div>
    </Modal>
    <Row type="flex" justify="space-between">
      <Col span="13" id="create-post">
        <Row  type="flex"  justify="space-between">
          <Col :sm="11">
            <Select v-model="post.category.id" placeholder="Choose Category">
              <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
          <Col :sm="11">
            <Select v-model="post.country" placeholder="Choose Country">
              <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
        </Row>
        <Card class="keypoints">
          <Input placeholder="Key point one" v-model="post.keyPoints[0]" size="large"></Input>
          <Input placeholder="Key point two" v-model="post.keyPoints[1]" size="large"></Input>
          <Input placeholder="Key point three" v-model="post.keyPoints[2]" size="large"></Input>
          
        </Card>
        <Input placeholder="Heading" v-model="post.title" size="large"></Input>

        <DisplayImage v-model="post.imageUrl" height="200px" width="50%" :can-edit="true" />

        <vue-editor v-model="post.body" style="background: white; "></vue-editor>

        <br />

        <Row type="flex" justify="space-between">
          <Col>
            <Button id="btn-draft" @click="handleProcessPost()">
              <span v-if="post.id">Save Changes</span>
              <span v-else>Save as draft</span>
            </Button>
          </Col>
          <Col>
            <Button id="btn-publish" :disabled="post.is_published" @click="handleProcessPost(true)">Publish</Button>
          </Col>
        </Row>

      </Col>

      <Col span="10">
        <Card id="display-post">
          <h2 id="title">{{post.title}}</h2>
          <DisplayImage :value="post.imageUrl" height="200px" width="100%" :can-edit="false" />
          <p v-html="post.body" id="body">
          </p>

        </Card>
      </Col>
    </Row>
  </div>
  
</template>

<script>
  import { Row, Col, Card, Input, Upload, Icon, Button, Select, Option, Modal, Alert } from 'iview';
  import { mapState, mapActions, mapMutations } from 'vuex'
  import { VueEditor } from "vue2-editor";
  import {Facebook, Twitter} from 'vue-socialmedia-share';
  // import SocialSharing from 'vue-social-sharing';
  // import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
  // import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";

  import DisplayImage from './DisplayImage';

  export default {
    components: {
      Row, Col, Card, Input, Upload, Icon, Button, Select, Option, Modal, Alert, VueEditor, DisplayImage, Facebook, Twitter
    },
    data: function(){
      return {
        publishModal: false,
        isNewImage: false,
        url: 'https://bloverse-frontend.herokuapp.com/#/posts/slug'
      };
      
    },
    computed: {
      post: {
        get(){
          return this.$store.state.journalist.post;
        },
        set(props){
          this.$store.commit('setPost', props);
        },
        url(){
          console.log('test', this.post)
          return "https://bloverse-frontend.herokuapp.com/#/posts/" + this.post.slug;

        }
      },

      ...mapState([
        'general',
        'auth',
      ])
    },
    methods: {
      ...mapActions([
        'processPost'
      ]),
      ...mapMutations([
        'setPost'
      ]),
      handleProcessPost: async function(shouldPublish=false){
        if(this.post.imageUrl){
          let success = await this.processPost({shouldPublish, shouldUploadImage: this.isNewImage});
          if(success){
            this.$Message.success("Post successfully saved");
            this.publishModal = shouldPublish;
          }else
            this.$Message.error("Something went wrong");
        }else
          this.$Message.error("You must select an image");
      }
    },
    watch: {
      'post.imageUrl': function(val){
        this.isNewImage = true;
      }
    },
    mounted(){
      this.setPost({category: this.auth.loggedInUser.category.id, country: this.auth.loggedInUser.country.id})
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
    
  }

</script>


<style scoped>
  #create-post {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200vh;
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
    line-height: 21px
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
    margin: .5rem 0;
  }
  .posts 
  {
    position: relative;
  }

  .goTo {
    background: #2f80ed;
    color: #FFFFFF;
    padding: 13px 30px 13px 30px;
    border-radius: 10px;
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