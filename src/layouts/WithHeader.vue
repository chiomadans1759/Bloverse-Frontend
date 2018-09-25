<template>
  <WithFooter>
    <TheHeader />
  </WithFooter>
</template>

<script>
  import Header from '../components/HeaderGeneral.vue';
  import WithFooter from '../components/WithFooter.vue';

  export default {
    components: { Header, WithFooter }
  }
</script>