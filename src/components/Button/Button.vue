<template>
  <div>
    <button :class="customClass" @click.prevent="$emit('buttonClick')">
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
  }
}
</script>
