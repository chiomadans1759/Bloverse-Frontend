<template>
  <div>
    <Modal v-model="showResponse">
      <Alert :type="modal.status">{{modal.status | firstToUpper}}</Alert>
      <div v-if="modal.status === 'error'">
        <ul>
          <li v-for="(errors, field) in modal.data">
            {{field}}
            <ul>
             <li v-for="err in errors">{{err}}</li>  
            </ul>
          </li>
        </ul>
      </div>
      <div v-else-if="modal.action === 'PUBLISH'">
        <p>Published Successfully</p>
      </div>
      <div v-else-if="modal.action === 'SAVE'">
       <p>Saved Successfully</p> 
      </div>

      
    </Modal>
    <Row type="flex" justify="space-between">
      <Col span="13" id="create-post">
        <Row  type="flex"  justify="space-between">
          <Col :sm="11">
            <Select v-model="post.categoryId" placeholder="Choose Category">
              <Option v-for="item in categories" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
          <Col :sm="11">
            <Select v-model="post.countryId" placeholder="Choose Country">
              <Option v-for="item in countries" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
        </Row>
        <Card class="keypoints">
          <Input placeholder="Key point one" v-model="post.keyPoints[0]" size="large"></Input>
          <Input placeholder="Key point two" v-model="post.keyPoints[1]" size="large"></Input>
          <Input placeholder="Key point three" v-model="post.keyPoints[2]" size="large"></Input>
          <Input placeholder="Key point four" v-model="post.keyPoints[3]" size="large"></Input>
        </Card>
        <Input placeholder="Heading" v-model="post.title" size="large"></Input>

        <Upload
          type="drag"
          id="upload-post-image"
          action="//jsonplaceholder.typicode.com/posts/">
          <Icon type="ios-cloud-upload" size="52" :style="{color: '#BDBDBD', margin: 'auto'}"></Icon>
        </Upload>

        <Input type="textarea" :rows="12" v-model="post.body" placeholder="Content"></Input>

        <Row type="flex" justify="space-between">
          <Col>
            <Button id="btn-draft" @click="handleSave">
              <span v-if="post.id">Save Changes</span>
              <span v-else>Save as draft</span>
            </Button>
          </Col>
          <Col>
            <Button id="btn-publish" @click="handlePublish">Publish</Button>
          </Col>
        </Row>

      </Col>

      <Col span="10">
        <Card id="display-post">
          <h2 id="title">{{post.title}}</h2>
          <img :src="post.imageUrl" id="image"  />
          <p id="body">
            {{post.body}}
          </p>

        </Card>
      </Col>
    </Row>
  </div>
  
</template>

<script>
  import { Row, Col, Card, Input, Upload, Icon, Button, Select, Option, Modal, Alert } from 'iview';
  //import { mapState } from 'vuex'

  export default {
    components: {
      Row, Col, Card, Input, Upload, Icon, Button, Select, Option, Modal, Alert
    },
    data: function(){
      return {
        modal: {},
        post: { keyPoints: [], imageUrl: "https://res.cloudinary.com/naera/image/upload/v1532594342/945_S_fuswub.png"}

      };
      
    },
    watch: {
      session: function(val){
        console.log(val);
        this.post.categoryId = val.user.category.id;
        this.post.countryId = val.user.country.id;
      }
    },
    computed: {
      showResponse: function(){
        return Object.keys(this.modal).length > 0 ?true:false;
      },

      /*...mapState([
        'session',
        'categories',
        'countries'
      ])*/
    },
    methods: {
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
      createOrUpdate: async function(){
        let response, config;

        try{
          config = { headers: {'Authorization': `Token ${this.session.token}`}};
          if(this.post.id){
            let { keypoint: keyPoints, image_url: imageUrl, title, body} = this.post;
            response = await this.$http.put(`/api/v1/posts/${this.post.id}/update/`, 
              { keypoint, image_url, title, body}, 
              config
            )
          }   
          else
            response = await this.$http.post('/api/v1/posts/', this.post, config)
          //this.post.id = response.data.data.post.id;
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
        
        
      },
      handleSave: async function(){
        let { data, status } = await this.createOrUpdate();
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
      }
    },
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
  }

</script>


<style scoped>
  #create-post {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 120vh;
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
</style>