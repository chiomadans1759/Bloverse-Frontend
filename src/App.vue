<template>
  <div id="app">
    <TheModal />
    <LoadingIcon v-if="general.loading" />
    <router-view v-else />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import TheModal from "@/components/TheModal"
import LoadingIcon from "@/components/Loading"

export default {
  name: "app",
  components: { LoadingIcon, TheModal },
  computed: {
    ...mapState(["general"])
  },
  methods: {
    ...mapActions(["setGeneralData"])
  },
  async created() {
    await this.setGeneralData();
  }
};
</script>

<style>
@import url("./assets/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css?family=Comfortaa|Montserrat");
</style>
