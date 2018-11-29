<template>
  <div v-if="selectedTemplate !== null">
    <Button
      id="btn-back"
      icon="ios-arrow-back"
      @click="clearCurrentPost"
      type="error"
    >Back to Choose Template</Button>
    <BasicCreatePost :isTravel="selectedTemplate === 'travel'"/>
  </div>
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event"/>
</template>

<script>
import { Button } from 'iview';
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';

import TemplateChooser from '../../components/TemplateChooser.vue';
import BasicCreatePost from '../../components/CreatePostBasic.vue';

export default {
  components: { TemplateChooser, BasicCreatePost, Button },
  data(){
    return {
      selectedTemplate: null
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

<style>
  #btn-back {
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>
