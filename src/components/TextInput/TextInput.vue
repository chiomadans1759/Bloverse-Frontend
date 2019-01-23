<template>
  <form>
    <div class="form-group">
      <input 
        :type="email" 
        class="form-control defaultClass" 
        :class="customClass"
        :id="id" 
        :name="name"
        :value="value"
        :placeholder="placeholder"
        @change="onChange"
      />
    </div>
  </form>
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
  @import './TextInput.scss';
</style>
