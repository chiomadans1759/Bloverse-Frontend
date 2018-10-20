<template>
<div v-if="selectedTemplate !==null || isCreatingPost"> 
  <BasicCreatePost v-if="selectedTemplate === 'basic' " />
  <TravelCreatePost v-else-if="selectedTemplate === 'travel' " />
  </div>
  <TemplateChooser v-else @selectTemplate="selectedTemplate=$event" />
  
</template>

<script>
  import { mapGetters } from 'vuex';

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
      ])
    },  
  }
</script>