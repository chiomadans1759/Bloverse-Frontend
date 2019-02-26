<template>
  <main id="bl-postcards" class="container bl-postcards">
    <post-card :hideCardBorder="hideCardBorder" :listView="listView" />
    <post-card :hideCardBorder="hideCardBorder" :listView="listView" />
    <post-card :hideCardBorder="hideCardBorder" :listView="listView" />
    <post-card :hideCardBorder="hideCardBorder" :listView="listView" />
    <post-card :hideCardBorder="hideCardBorder" :listView="listView" />
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
    listView: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './PostCards.scss';
</style>
