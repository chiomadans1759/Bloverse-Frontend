<template>
  <section class="my-section">
    <div class="heading">
      <h3 class="title">{{title}}</h3>
      <hr class="underline" />
    </div>
    <Row class="body" type="flex" justify="space-between">
      <Col :xs="24" :sm="7" v-for="post in posts" :key="post.id" >
        <FeedCard :post="post"  />
      </Col>

    </Row>
  </section>
</template>


<script>
  import { Row, Col, Card } from 'iview';
  import FeedCard from './FeedCard.vue';
  export default {
    name: 'FeedsSection',
    components: { Row, Col, Card, FeedCard },
    props: { 
      title: { type: String, required: true },
      posts: { type: Array, required: true } 
    },
    data: function() {
      return {

      }
    }
  }
</script>