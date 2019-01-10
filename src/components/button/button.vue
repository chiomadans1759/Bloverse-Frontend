<template>
  <div>
    <button class="defaultButton" :class="customClass" @click="buttonClick">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    customClass: {
      type: String,
      required: false,
    },
  },
  methods: {
    buttonClick: function() {
      this.$emit('buttonClicked');
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
