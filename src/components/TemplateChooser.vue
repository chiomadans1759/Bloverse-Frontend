<template>
  <div class="layout">
    <Row>
      <Col @click.native="$emit('selectTemplate', 'basic')" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class-name="paper9">
  
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047729/paper_1.png" class="paper1 paper3"><br />
        <div class="page1">
          <p class="page">Basic Template</p>
        </div>
      </Col>
      <Col class="notAllowed" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png" class="second ">
        <p class="page">Custom Template 1</p>
      </Col>
      <Col class="notAllowed" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png">
        <p class="page">Custom Template 2</p>
      </Col>
      <Col class="notAllowed" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
        <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png">
        <p class="page">Custom Template 3</p>
      </Col>
    </Row>
  </div>
</template>
<script>
  import { Row, Col, Layout } from 'iview';

  export default {
    components: { Row, Col, Layout },
  }
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
    margin-top: 35px;
  }

.paper3:hover {
  -webkit-transform:scale(1.1);
  -ms-transform:scale(1.1);
  transform:scale(1.1);
  cursor: pointer;
  transition: 1s ease;
  box-shadow: 5px 5px 5px #9e9e9e69;
  border-radius: 5px;
}
.notAllowed:hover{
  cursor: not-allowed
}
</style>

