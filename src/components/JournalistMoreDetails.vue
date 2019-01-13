<template>
  <section>
    <Row type="flex" align="Middle" justify="space-between">
      <Col>
        <p>Phone: {{row.phone}}</p>
        <p>Email: {{row.email}}</p>
      </Col>
      <Col>
        <h5>Articles</h5>
        <p v-for="article in row.articles" :key="article">
          <a :href="article">{{article}}</a>
        </p>
      </Col>
      <Col>
        <p>Linked In:
          <a :href="row.linkedIn">{{row.linkedIn}}</a>
        </p>
        <p>Twitter:
          <a :href="row.twitter">{{row.twitter}}</a>
        </p>
      </Col>
    </Row>
  </section>
</template>

<script>
import { Row, Col } from "iview";

export default {
  components: { Row, Col },
  props: { row: Object }
};
</script>
