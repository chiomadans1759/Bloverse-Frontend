<template>
  <section class="my-section">
    <Loading v-if="general.loading" message="Getting Feeds" />
    <Row class="body" type="flex" v-else justify="space-around" :style="{marginTop: '50px', marginBottom: '50px'}">
      <template v-if="postExists">
        <Col :xs="24" :sm="7" v-for="post in general.publishedPosts" :key="post.id" :style="{marginTop: '20px'}">
          <FeedCard :post="post"  />
        </Col>
      </template>
      <h1 v-else><br />Awww!!! This place is empty<br /><br /></h1>
    </Row>
  </section>
</template>


<script>
  import { mapState, mapActions } from 'vuex'
  import { Row, Col, Card } from 'iview';
  import FeedCard from '../components/FeedCard.vue';
  import Loading from '../components/Loading.vue';
  export default {
    name: 'FeedsSection',
    components: { Row, Col, Card, FeedCard, Loading },
    computed: {
      ...mapState([
        'general'
      ]),
      postExists(){
        return this.general.publishedPosts.length > 0;
      }
    },
    methods: {
      ...mapActions(['getAllPublishedPosts'])
    },
    async created () {
      // fetch the data when the view is created and the data is
      // already being observed
      await this.getAllPublishedPosts();
    }
  }
</script>