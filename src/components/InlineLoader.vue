<template>
  <div class="bl-inline-spinner" :class="customClass">
    <i class="demo-spin-icon-load ivu-icon ivu-icon-ios-loading"  />
  </div>
</template>

<script>
import { Spin, Icon } from "iview";

export default {
  props: ["message", "customClass"],
  components: { Spin, Icon }
};
</script>

<style>
  .bl-inline-spinner {
    color: #4b8ce9;
    text-align: center;
    margin: 5rem 0;
  }

  .bl-inline-spinner > i {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    .bl-inline-spinner > i {
      font-size: 2rem
    }
  }
</style>
