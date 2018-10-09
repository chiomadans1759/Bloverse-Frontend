<template>
  <div id="app">
      <router-view v-if="general.categories" />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'app',
    data(){
      return {
        loading: true
      }
    },
    methods: {
      ...mapActions([
        'setGeneralData'
      ])
    },
    computed: {
      ...mapState([
        'general'
      ])
    },
    async mounted(){
      this.$Loading.start();
      await this.setGeneralData();
      if(this.general.categories)
        this.$Loading.finish();
      else
        this.$Loading.error();
      //this.loading = false;
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

:root {
  --primary: #2F80ED;
}
</style>
