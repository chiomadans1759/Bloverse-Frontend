<template>
  <BasicCreatePost v-if="selectedTemplate === 'basic'" />
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event" />
  
</template>

<script>
  import TemplateChooser from '../../components/TemplateChooser.vue';
  import BasicCreatePost from '../../components/CreatePostBasic.vue';

  export default {
    components: { TemplateChooser, BasicCreatePost },
    data(){
      return {
        selectedTemplate: null
      }
    },
    watch: {
      selectedTemplate(val){
        console.log(val);
      }
    }

    
  }
</script>