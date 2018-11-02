<template>
  <div id="app">
    <LoadingIcon v-if="loading" />
    <router-view v-else />
  </div>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex'
  import LoadingIcon from './components/Loading';
  export default {
    name: 'app',
    components: { LoadingIcon },
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
      ...mapState(['auth', 'general'])
    },
    async created(){
      let loaded = await this.setGeneralData();
      this.loading = !loaded;
      //this.loading = false;
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

:root {
  --primary: #2F80ED;
}
body{
  margin: 0px;
}
</style>
