<template>
  <main id="bl-postcards" class="container bl-postcards">
    <post-card :hideCardBorder="hideCardBorder" />
    <post-card :hideCardBorder="hideCardBorder" />
    <post-card :hideCardBorder="hideCardBorder" />
    <post-card :hideCardBorder="hideCardBorder" />
  </main>
</template>

<script>
import PostCard from './PostCard';

export default {
  name: 'PostCards',
  components: { PostCard },
  props: {
    hideCardBorder: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import './PostCards.scss';
</style>
