<template>
    <div class="layout">
      <Layout v-if="post">
        <Row>
          <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }" class-name="paper3">
          <a v-on:click="post = false">
            <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047729/paper_1.png" class="paper1"><br />
            </a>
            <div class="page1">
              <p class="page">Basic Template</p>
            </div>
          </Col>
          <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png" class="second">
            <p class="page">Custom Template 1</p>
          </Col>
          <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png">
            <p class="page">Custom Template 2</p>
          </Col>
          <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
            <img src="https://res.cloudinary.com/di11juunm/image/upload/v1538047817/paper21.png">
            <p class="page">Custom Template 3</p>
          </Col>
        </Row>
      </Layout>
      <FillCreate v-else />
    </div>
</template>
<script>
    import FillCreate from './FillCreate.vue'

    export default {
      data() {
        return {
          post: true
        }
      },
      components: {
        FillCreate
      }
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

.paper3 {
  
}
</style>

