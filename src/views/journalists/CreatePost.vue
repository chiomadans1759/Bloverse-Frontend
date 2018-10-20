<template>
  <div v-if="selectedTemplate !==null || isCreatingPost">
    <Button id="btn-back" icon="ios-arrow-back" @click="clearCurrentPost" type="error">Back to Choose Template</Button>
    <BasicCreatePost v-if="selectedTemplate === 'basic' " />
    <TravelCreatePost v-else-if="selectedTemplate === 'travel' " />
  </div>
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event" />
  
</template>

<script>
  import { Button } from 'iview';
  import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';

  import TemplateChooser from '../../components/TemplateChooser.vue';
  import BasicCreatePost from '../../components/CreatePostBasic.vue';
  import TravelCreatePost from '../../components/TravelCompetition.vue';

  export default {
    components: { TemplateChooser, BasicCreatePost, TravelCreatePost, Button },
    data(){
      return {
        selectedTemplate: null
      }
    },
    computed: {
      ...mapGetters([
        'isCreatingPost'
      ]),
      ...mapState(['journalist'])
    },
    methods: {
      ...mapActions(['getMyPosts']),
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
        await this.getMyPosts();
        currentPost = await this.journalist.posts.find(post => post.slug === this.$route.params.slug);
        let { id, title, body, keypoint: keyPoints, image_url: imageUrl, category, country, is_published:isPublished=false, slug } = currentPost;
        let updatedPost = { id, keyPoints, imageUrl, title, body, category, country, isPublished, slug };
        this.setPost(updatedPost);
      }

      if(this.isCreatingPost){
        this.selectedTemplate = 'basic';
      }

    }  
  }
</script>

<style>
  #btn-back {
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>