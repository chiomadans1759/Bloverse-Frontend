<template>
  <main id="bl-postcards" class="container bl-postcards" :class="customClasses">
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername"
      :hideMainActions="hideMainActions" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername"
      :hideMainActions="hideMainActions" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername"
      :hideMainActions="hideMainActions" 
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername"
      :hideMainActions="hideMainActions"
    />
    <post-card
      :hideCardBorder="hideCardBorder"
      :listView="listView"
      :hideUsername="hideUsername"
      :hideMainActions="hideMainActions"
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
    },
    customClasses: {
      type: Array,
      default: []
    },
    hideMainActions: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './PostCards.scss';
</style>
