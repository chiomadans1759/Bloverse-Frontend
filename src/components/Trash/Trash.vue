<template>
  <main id="bl-trash" class="container bl-trash">
    <TrashItem :hideCardBorder="hideCardBorder" />
    <TrashItem :hideCardBorder="hideCardBorder" />
    <TrashItem :hideCardBorder="hideCardBorder" />
    <TrashItem :hideCardBorder="hideCardBorder" />
  </main>
</template>

<script>
import TrashItem from './TrashItem';

export default {
  name: 'PostCards',
  components: { TrashItem },
  props: {
    hideCardBorder: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
  @import './Trash.scss';
</style>
