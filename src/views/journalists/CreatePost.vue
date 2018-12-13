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
    <div class="btn-group mb-5 pb-3" role="group">
      <button type="button" @click="currentSection('basic')" 
        :class="{'btn' : true, 'btn-white': current_section != 'basic', 'btn-primary': current_section == 'basic'}" class="text-uppercase">
        basic template
      </button>
      <button type="button" @click="currentSection('travel')" 
        :class="{'btn' : true, 'btn-white': current_section != 'travel', 'btn-primary': current_section == 'travel'}" class="text-uppercase">
        photo template
      </button>
    </div>

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

#create-post #create-card {
  min-height: 20rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
