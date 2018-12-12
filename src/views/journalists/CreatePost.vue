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
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event"/> -->

  <main id="create-post">
    <div class="row no-gutter" id="tabs">
      <div class="col-xs-6 pt-1 pl-2" @click="currentSection('basic')" :class="{'active': current_section == 'basic'}">
        <p class="text-uppercase pl-2">basic template</p>
      </div>
      <div class="col-xs-6 pt-1 pl-2" @click="currentSection('travel')" :class="{'active': current_section == 'travel'}">
        <p class="text-uppercase">photo template</p>
      </div>
    </div>

    <br /><br />

    <div class="card" id="create-card">
      <div class="card-body">
        <BasicCreatePost :isTravel="selectedTemplate == current_section" />
      </div>
    </div>
  </main>
</template>

<script>
import { Button } from 'iview';
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';

import TemplateChooser from '@/components/TemplateChooser.vue';
import BasicCreatePost from '@/components/CreatePostBasic.vue';
import Tinymce from "@/components/Tinymce";

export default {
  components: { TemplateChooser, BasicCreatePost, Button, Tinymce },
  data(){
    return {
      selectedTemplate: null,
      current_section: 'basic'
    }
  },
  computed: {
    ...mapState(['journalist', 'auth', 'general']),

    ...mapGetters([
      'isCreatingBasicPost',
      'isCreatingTravelPost'
    ]),
  },
  methods: {
    ...mapActions(['getPostBySlug']),

    ...mapMutations(['setPost', 'clearPost']),

    clearCurrentPost(){
      this.clearPost();
      this.selectedTemplate = null;
    },

    currentSection(section) {
      this.current_section = section;
    }
  },
  async created(){
    let currentPost;
    if(this.$route.params.slug){
      //if(this.journalist.posts.length < 1)
      await this.getPostBySlug(this.$route.params);
      currentPost = this.general.currentPost
      let { id, title, body, keypoint: keyPoints, image_url: imageUrl, category, country, is_published:isPublished=false, slug, device_type: deviceType, location } = currentPost;
      let updatedPost = { id, keyPoints, imageUrl, title, body, category, country, isPublished, slug, deviceType, location };
      this.setPost(updatedPost);
    }

    if(this.isCreatingBasicPost)
      this.selectedTemplate = 'basic';
    else if(this.isCreatingTravelPost)
      this.selectedTemplate = 'travel';
  },
  mounted() {
    if (this.isTravel) {
      this.setPost({ category: '', country: '' });
    } else {
      this.setPost({
        category: '',
        country: ''
      });
    }
  }
};
</script>

<style scoped>
#create-post {
  padding-top: 3rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
}

#create-post #tabs {
  width: 30%;
  height: 2rem;
  background-color: #ffffff;
  border: 1px solid #096DD9;
  border-radius: 4px;
  padding-right: 1rem;
  margin-left: 12rem;
}

#create-post #tabs .col-xs-6 {
  height: 100%;
  color:#096DD9;
  cursor: pointer;
}

#create-post #tabs .col-xs-6 p {
  text-align: center;
}

#create-post #tabs .active {
  color: #ffffff;
  background:#096DD9;
  padding-right: 1rem;
}

#create-post #create-card {
  margin: 0 auto;
  width: 60%;
  min-height: 20rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
