<template>
  <section class="my-section">
    <Row class="body" type="flex" justify="space-around" :style="{marginTop: '50px', marginBottom: '50px'}">
      <Col :xs="24" :sm="7" v-for="post in general.publishedPosts" :key="post.id" :style="{marginTop: '20px'}">
        <FeedCard :post="post"  />
      </Col>
    </Row>
  </section>
</template>


<script>
  import { mapState, mapActions } from 'vuex'
  import { Row, Col, Card } from 'iview';
  import FeedCard from '../components/FeedCard.vue';
  export default {
    name: 'FeedsSection',
    components: { Row, Col, Card, FeedCard },
    async created () {
        // fetch the data when the view is created and the data is
        // already being observed
        await this.getAllPublishedPosts()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'getAllPublishedPosts'
    },
    methods: {
      ...mapActions([
        'getAllPublishedPosts'
      ])
    },
    computed: {
      ...mapState([
        'general'
      ])
    }
  }
</script>