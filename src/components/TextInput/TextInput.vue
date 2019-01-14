<template>
  <input
    class="defaultClass"
    :id="id"
    :name="name"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    :class="customClass"
    @change="onChange"
    />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: {
      type: String
    },
    name: {
      type: String,
    },
    value: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    customClass: {
      type: String
    },
    onChange: {
      type: Function
    }
  },
}
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
