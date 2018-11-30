<template>
  <WithFooter>
    <AuthHeader />
    <slot></slot>
  </WithFooter>
</template>

<script>
import AuthHeader from '../components/AuthHeader.vue';
import WithFooter from './WithFooter.vue';

export default {
  components: { AuthHeader, WithFooter }
}
</script>
