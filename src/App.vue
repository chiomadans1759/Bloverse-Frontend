<template>
  <div id="app">
    <TheModal />
    <LoadingIcon v-if="general.loading" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TheModal from '@/components/TheModal';
import LoadingIcon from '@/components/Loading';

export default {
  name: 'app',
  components: { LoadingIcon, TheModal },
  computed: {
    ...mapState(['general'])
  },
  methods: {
    ...mapActions([
      'setGeneralData'
    ])
  },
  async created(){
    await this.setGeneralData();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');
@import url('./assets/css/bootstrap.min.css');
@import url('./assets/css/utility.css');

#app {
  /* font-family: 'Avenir', 'Roboto', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5 !important;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  /* overflow-x: hidden !important; */
}
body{
    background-color: #f5f5f5 !important;
}

:root {
  --primary: #2F80ED;
}
</style>
