<template>
  <BasicCreatePost v-if="selectedTemplate === 'basic' || isCreatingPost" />
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event" />
  
</template>

<script>
  import { mapGetters } from 'vuex';

  import TemplateChooser from '../../components/TemplateChooser.vue';
  import BasicCreatePost from '../../components/CreatePostBasic.vue';

  export default {
    components: { TemplateChooser, BasicCreatePost },
    data(){
      return {
        selectedTemplate: null
      }
    },
    computed: {
      ...mapGetters([
        'isCreatingPost'
      ])
    },  
  }
</script>