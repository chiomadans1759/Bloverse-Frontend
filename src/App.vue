<template>
  <div id="app">
    <rise-loader v-if="loading" :loading="loading" :color="color" :size="size" :margin="margin"></rise-loader>
    <transition v-else name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import RiseLoader from 'vue-spinner/src/RiseLoader.vue'
  export default {
    name: 'app',
    data(){
      return {
        loading: true,
        color: '#000080',
        margin: '300px 0 0 0'
      }
    },
      components: {
        RiseLoader
      },
    methods: {
      ...mapActions([
        'setGeneralData'
      ])
    },
    async mounted(){
      await this.setGeneralData();
      this.loading = false;
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
