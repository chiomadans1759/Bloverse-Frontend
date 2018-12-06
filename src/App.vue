<template>
  <div id="app">
    <LoadingIcon v-if="general.loading" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LoadingIcon from './components/Loading';

export default {
  name: 'app',
  components: { LoadingIcon },
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
