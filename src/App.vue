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
import LoadingIcon from './components/Loading';

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
@import url('assets/stylesheets/utility.scss');
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');


#app {
  font-family: 'Avenir', 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f5f5;
}

:root {
  --primary: #2F80ED;
}

body{
  margin: 0px;
  background-color: #f5f5f5;
}
</style>
