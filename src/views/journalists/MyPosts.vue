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
  <Row v-if="posts" type="flex" justify="space-between">
    <Col v-for="post in posts" :md="11" :key="post.id">
      <PostCard :post="post" />
    </Col>
  </Row>
  <div v-else>
    <h1>Loading Posts...</h1>
  </div> 
  </div>
</template>


<script>
  import { Row, Col, Icon } from 'iview';
  import { mapState } from 'vuex'

  import PostCard from '../../components/PostCard.vue';
  export default {
    components: { Row, Col, PostCard, Icon },
    data: function(){
      return {
        posts: null
      }
    },
    computed: {
      // mix this into the outer object with the object spread operator
      ...mapState([
        'session',
      ])
    },
    mounted: async function(){
      try {
        let config = { headers: {'Authorization': `Token ${this.session.token}`}};
        let response = await this.$http.get('/api/v1/users/posts/', config);
        let { data, status } = response;
        this.posts = data.data.posts;
      }catch(error){
        console.log(error.response);
      }
      
    }
  }

</script>



<style>


</style>
