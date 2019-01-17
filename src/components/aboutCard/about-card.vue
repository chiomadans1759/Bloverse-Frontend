<template>
  <div>

    <div class="about-body">
    <div :class="customClass">
      <slot></slot>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "About-card",
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  @import './about.scss';
</style>
