<template>
  <main id="bl-postcards" class="container bl-postcards">
    <post-card />
    <post-card />
    <post-card />
    <post-card />
  </main>
</template>

<script>
import PostCard from './PostCard';

export default {
  name: 'PostCards',
  components: { PostCard }
}
</script>

<style lang="scss" scoped>
  @import './PostCards.scss';
</style>
