<template>
  <div>
   <Row type="flex" justify="end">
    <Col>
      <Icon :style="{ marginRight: '1rem'}" type="android-apps"></Icon>
    </Col>
    <Col>
      <Icon type="android-apps"></Icon>
    </Col>
  </Row>
  <Row type="flex" justify="space-between">
    <Col v-for="post in journalist.posts" :md="11" :key="i">
      <PostCard :post="post" />
    </Col>
  </Row> 
  </div>
</template>


<script>
  import { Row, Col, Icon } from 'iview';
  import { mapState, mapActions } from 'vuex'

  import PostCard from '../../components/PostCard.vue';
  export default {
    components: { Row, Col, PostCard, Icon },
    computed: {
      ...mapState([
        'journalist'
      ])
    },
    created () {
        // fetch the data when the view is created and the data is
        // already being observed
        this.getMyPost()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'getMyPost'
    },
    methods: {
      ...mapActions([
        'getMyPost'
      ])
    }
  }

</script>



<style>


</style>
