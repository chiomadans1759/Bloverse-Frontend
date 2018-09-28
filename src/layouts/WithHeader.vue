<template>
  <WithFooter>
    <Header />
    <slot></slot>
  </WithFooter>
</template>

<script>
  import Header from '../components/HeaderGeneral.vue';
  import WithFooter from './WithFooter.vue';

  export default {
    components: { Header, WithFooter }
  }
</script>