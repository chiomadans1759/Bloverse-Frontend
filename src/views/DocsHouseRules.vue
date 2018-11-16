<template>
  <BaseDocs
    title="House rules"
    about='The conversation here is moderated according to The community rules. Please <a href="#">read the rules</a> before joining the discussion.'
  >
    <Row type="flex" justify="right">
      <Col>
        <h3 class="">House rules</h3>
      </Col>
    </Row> 
    <div> 
      <ol>
        <li v-for="(rule,index) in rules" :key="index"> 
          {{rule}}
        </li>
      </ol>
    </div>
  </BaseDocs>
</template>


<script>
import { Row, Col, Input } from "iview";
import BaseDocs from "../layouts/BaseDocs.vue";
import data from "../data.js";

export default {
  components: { BaseDocs, Row, Col, Input },
  data: function() {
    return {
      rules: data.rules[this.$route.params.person]
    };
  },
  watch: {
    $route(to, from) { // eslint-disable-line
      // react to route changes...
      this.rules = data.rules[to.params.person];
    }
  }
};
</script>
<style scoped>
ol {
  /* list-style: none; */
  margin-left: 0;
}

li {
  /* counter-increment: custom; */
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 12px;
  padding-left: 20px;
  width: 80%;
}

/* ol li:before
{
    content: counter(custom) " ";  
    padding-right: 20px; 
} */

/* ol li:first-child {
    counter-reset: custom;   
} */

h3 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 25px;
}
</style>