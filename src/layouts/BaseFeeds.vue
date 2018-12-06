<template>
  <div>
    <LoginModal :showModal="showModal"/>
    <FeedsHeader @showModal="showModal = $event"/>
    <router-view></router-view>
    <FeedsFooter/>
  </div>
</template>

<script>
import FeedsHeader from "../components/FeedsHeader.vue";
import FeedsFooter from "../components/FeedsFooter.vue";
import LoginModal from "@/components/LoginModal";

export default {
  components: { FeedsHeader, FeedsFooter, LoginModal },
  data() {
    return {
      showModal: false
    };
  }
};
</script>
