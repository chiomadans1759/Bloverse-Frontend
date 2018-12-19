<template>
  <!-- <div v-if="selectedTemplate !== null">
    <Button
      id="btn-back"
      icon="ios-arrow-back"
      @click="clearCurrentPost"
      type="error"
    >Back to Choose Template</Button>
    <BasicCreatePost :isTravel="selectedTemplate === 'travel'"/>
  </div>
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event"/>-->
  <main id="create-post">
    <Push class="side">
     <div class="dashboard-image">
      <img :src="auth.loggedInUser.imageUrl" />
     </div>
      <a id="home" href="/creators/${auth.loggedInUser.userName}/dashboard">
      <i class="far fa-th-large"></i>
        <span>Dashboard</span>
      </a>
      <a id="home" href="/creators/${auth.loggedInUser.userName}/posts/create">
      <i class="fal fa-plus"></i>
        <span>Create Content</span>
      </a>
     <a id="home" href="/creators/${auth.loggedInUser.userName}/posts">
     <i class="fal fa-rocket"></i>
        <span>My Posts</span>
      </a>
         <a id="home" href="" @click.prevent="logOut">
           <i class="fal fa-power-off" style="color: #D9091E; font-size:16px; "></i>
           <span>Sign Out</span>
      </a>
       <div class="overlayed-text">
        <div class="overlayed-content">
           <img :src="auth.loggedInUser.imageUrl" />
           <p class="text-white" style="text-transform: capitalize; margin-left: -1.6rem">{{auth.loggedInUser.firstName}}&nbsp;{{auth.loggedInUser.lastName}}</p>
        </div>
      </div>
   </Push>
     <div class="mobile">
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
        </router-link>
      </div>
    <div class="btn-group mb-5 pb-3" role="group">
      <button
        type="button"
        @click="isTravel = false"
        :class="{'btn' : true, 'btn-default': isTravel, 'btn-primary': !isTravel}"
        class="text-uppercase"
      >basic template</button>
      <button
        type="button"
        @click="isTravel = true"
        :class="{'btn' : true, 'btn-default': !isTravel, 'btn-primary': isTravel}"
        class="text-uppercase"
      >photo Contest</button>
    </div>

    <div class="card" id="create-card">
      <div class="card-body">
        <BasicCreatePost :isTravel="isTravel"/>
      </div>
    </div>
  </main>
</template>

<script>
import { Button } from "iview";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";

import TemplateChooser from "@/components/TemplateChooser.vue";
import BasicCreatePost from "@/components/CreatePostBasic.vue";
import Tinymce from "@/components/Tinymce";
import { Push } from 'vue-burger-menu';

export default {
  components: { TemplateChooser, BasicCreatePost, Button, Tinymce, Push },
  data(){
    return {
      isTravel: false
    };
  },
  computed: {
    ...mapState(["journalist", "auth", "general"]),

    ...mapGetters(["isCreatingBasicPost", "isCreatingTravelPost"])
  },
  methods: {
    ...mapActions(['getPostBySlug', 'clearSession']),

    ...mapMutations(["setPost", "clearPost"]),

    clearCurrentPost() {
      this.clearPost();
    },

    currentSection(section) {
      this.current_section = section;
    },
    
    logOut(){
      this.clearSession();
      this.$router.push('/creators');
    }
  },
  async created() {
    let currentPost;
    if (this.$route.params.slug) {
      //if(this.journalist.posts.length < 1)
      await this.getPostBySlug(this.$route.params);
      currentPost = this.general.currentPost;
      let {
        id,
        title,
        body,
        keypoint: keyPoints,
        image_url: imageUrl,
        category,
        country,
        is_published: isPublished = false,
        slug,
        device_type: deviceType,
        location
      } = currentPost;
      let updatedPost = {
        id,
        keyPoints,
        imageUrl,
        title,
        body,
        category,
        country,
        isPublished,
        slug,
        deviceType,
        location
      };
      this.setPost(updatedPost);
    }
  }
};
</script>

<style scoped>
#create-post .mobile {
  display: none;
}

#create-post .side {
  display: none;
}
#create-post {
  padding-top: 3rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
}

.btn {
  z-index: 20;
}

#create-post .btn-group .btn:first-child {
  border-radius: 4px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

#create-post .btn-group .btn:last-child {
  border-radius: 4px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

#create-post .btn-group .btn {
  border-color: rgba(0, 0, 0, 0.1);
}

#create-post .btn-default {
  background: transparent !important;
  border: 1px solid #2f80ed !important;
  color: #2f80ed !important;
}

#create-post #create-card {
  min-height: 25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 600px) {
  #create-post .mobile {
  display: block;
  margin-top: -4rem;
  margin-bottom: 2rem;
  text-align: center;
}

#create-post .side {
  display: block;
    display: block;
    margin-top: -2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

    #create-post .side img{
    width: 130%;
    height: 172px;
    margin-left: -2.5rem !important;
    filter: blur(10px);
    -webkit-filter: blur(10px);

  }

   #create-post .side .overlayed-text {
    overflow: hidden;
    position: absolute;
    left: -100px;
    top: 90px;
  }

  #create-post .side .overlayed-text .overlayed-content img{
    filter: none;
    width: 55%;
    height:100px;
    object-fit: contain;
    margin-left: -2rem;

  } 
    #create-post .side .overlayed-content {
       height: 120px;
       margin-left: -2rem;
    }
     /* #create-post .side .overlayed-content {
       height: 50px;
       margin-left: -2rem;
    } */
   .bm-burger-button {
      position: fixed;
      width: 18px;
      height: 12px;
      left: 36px;
      top: 36px;
      cursor: pointer;
   }

    .bm-burger-bars {
      background-color: #525358;
    }

     .bm-item-list {
      color: #b8b7ad;
      margin-left: 5%;
      font-size: 14px;
    }

     .bm-menu {
      height: 100%;
      width: 0; 
      position: fixed; 
      z-index: 1000;
      top: 0;
      left: 0;
      background-color: #f5f5f5; 
      overflow-x: hidden;
      padding-top: 60px; 
      transition: 0.5s;
    }


    .bm-item-list > * > span {
      margin-left: 14px;
      color: #222222;
      font-weight: 500;
      margin-bottom: 2rem;
    }
}
</style>
