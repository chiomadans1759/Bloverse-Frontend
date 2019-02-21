<template>
  <main id="success-alert">
    <div class="alert alert-success success" role="alert">
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
  @import './SuccessAlert';
</style>

