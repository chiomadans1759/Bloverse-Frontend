<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions([
      'setGeneralData'
      ])
  },
  mounted(){
    this.setGeneralData()
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
