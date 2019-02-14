<template>
  <main id="error-alert">
    <div class="alert alert-danger error" role="alert">
      <span class="d-flex justify-content-end">
        <i class="fal fa-times error-icon"></i>
      </span>
      <h4 v-if="heading" class="alert-heading" >{{heading}}</h4>
      <p class="text"><slot></slot></p>
    </div>
  </main>
</template>

<script>
export default {
  name:'Error',
  props: {
    heading: {
      type: String,
      required: false,
      default: ""
    }
  }

}
</script>

<style lang="scss" scoped>
@import './ErrorAlert'
</style>

