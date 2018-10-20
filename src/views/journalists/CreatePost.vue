<template>
<div v-if="selectedTemplate !==null || isCreatingPost"> 
  <BasicCreatePost v-if="selectedTemplate === 'basic' " />
  <TravelCreatePost v-else-if="selectedTemplate === 'travel' " />
  </div>
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event" />
  
</template>

<script>
  import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';

  import TemplateChooser from '../../components/TemplateChooser.vue';
  import BasicCreatePost from '../../components/CreatePostBasic.vue';
  import TravelCreatePost from '../../components/TravelCompetition.vue';

  export default {
    components: { TemplateChooser, BasicCreatePost, TravelCreatePost },
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
      ...mapMutations(['setPost'])
    },
    async created(){
      let currentPost;
      if(this.$route.params.slug){
        await this.getMyPosts();
        currentPost = await this.journalist.posts.find(post => post.slug === this.$route.params.slug);
        let { id, title, body, keypoint: keyPoints, image_url: imageUrl, category, country, is_published:isPublished=false, slug } = currentPost;
        let updatedPost = { id, keyPoints, imageUrl, title, body, category, country, isPublished, slug };
        this.setPost(updatedPost);
      }

    }  
  }
</script>