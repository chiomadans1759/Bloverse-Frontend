<template>
    <WithFooter>
        <ConsumerHeader />
        <router-view></router-view>
    </WithFooter>
</template>

<script>
import ConsumerHeader from "../components/ConsumerHeader.vue";
import WithFooter from "./WithFooter.vue";

export default {
  components: { ConsumerHeader, WithFooter }
  
}
</script>

