<template>
  <Select v-model="row.status" :disabled="defaultStatus != 1">
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
  data(){
    return {
      defaultStatus: this.row.status
    }
  },
  watch: {
    "row.status": function(val) {
      this.$emit("statusChanged", val);
    }
  }
};
</script>
