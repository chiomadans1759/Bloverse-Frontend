<template>
  <Row>
    <Col>
      <Row>
        <Card id="card-content"> a </Card>
      </Row>
    </Col>
  </Row>
</template>

<script >
import { Icon, Row, Col, Card } from "iview";

export default {
  components: { Icon, Row, Col, Card}
}
</script>

<style scoped>
  #card-content {
    width: 100%;
    border:1px solid red
  }

  @media only screen and (max-width: 600px) {
    #advert-direction {
      display: none;
    }
  }

  @media only screen and (max-width: 840px) {
    #advert-direction {
      display: none;
    }
  }

  @media only screen and (max-width: 300px) {
    #advert-direction {
      display: none;
    }
  }
</style>
