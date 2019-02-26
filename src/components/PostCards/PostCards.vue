<template>
  <main id="bl-postcards" class="container bl-postcards">
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername" 
    />
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
    },
    hideUsername: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './PostCards.scss';
</style>
