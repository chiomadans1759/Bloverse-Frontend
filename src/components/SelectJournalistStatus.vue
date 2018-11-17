<template>
  <Select v-model="row.status">
    <Option :value="1">Pending</Option>
    <Option :value="2">Accept</Option>
    <Option :value="3">Reject</Option>
  </Select>
</template>

<script>
import { Select, Option } from "iview";
export default {
  components: { Select, Option },
  props: { row: Object },
  watch: {
    "row.status": function(val) {
      //console.log(val);
      this.$emit("statusChanged", val);
    }
  }
};
</script>