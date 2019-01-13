<template>
  <div>
    <Row id="paper-container">
      <Col @click.native="$emit('selectTemplate', 'basic')">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047729/paper_1.png">
        <div>
          <p class="page">Basic Template</p>
        </div>
      </Col>
      <Col @click.native="$emit('selectTemplate', 'travel')">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper_1.png">
        <div>
          <p class="page">Photo Contest</p>
        </div>
      </Col>
      <Col class="notAllowed">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png">
        <p class="page">Custom Template 1</p>
      </Col>
      <Col class="notAllowed">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png">
        <p class="page">Custom Template 2</p>
      </Col>
    </Row>
  </div>
</template>

<script>
import { Row, Col, Layout } from "iview";

export default {
  components: { Row, Col, Layout }
};
</script>

<style scoped>
  .second {
    margin-left: -10px;
  }

  .page {
    text-align: center;
  }

  .page1 {
    margin-left: -90px;
    margin-top: 30px;
  }

  #paper-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .notAllowed:hover {
    cursor: not-allowed;
  }

  @media screen and (max-width: 360px) {
    #paper-container {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      font-weight: 300;
    }

    #paper-container img {
      width: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    #paper-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 40px;
    }

    #paper-container img {
      width: 100%;
    }
  }
</style>

