<template>
  <BaseDocs
    title="Ranking System"
    about="Have a points-based system for each article read based on the following metrics;"
  >
    <Row type="flex" justify="right">
      <Col>
        <h3 class>Ranking System</h3>
      </Col>
    </Row>
    <div>
      <ol>
        <li v-for="rank in ranks" :key="rank.id">
          <b>{{rank.question}}</b>
          <br>
          {{rank.answer}}
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
      ranks: data.ranking[this.$route.params.person]
    };
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      this.ranks = data.ranking[to.params.person];
    }
  }
};
</script>

<style scoped>
ol {
  list-style: circle;
  margin-left: 0;
}

li {
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 12px;
  padding-left: 20px;
  width: 80%;
}

h3 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 25px;
}
</style>
