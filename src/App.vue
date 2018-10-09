<template>
  <div id="app">
    <h2 v-if="loading">Loading...</h2>
    <transition v-else name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
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
