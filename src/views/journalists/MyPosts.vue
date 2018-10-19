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
  <Row type="flex" justify="space-between" v-if="showPosts">
    <Col v-for="post in journalist.posts" :md="11" :key="i">
      <PostCard :post="post" />
    </Col>
  </Row>
   <div v-else class="showposts">
    <h2>This Place looks empty !</h2><br />
    <router-link to="/journalist/username/posts/create" id="showbutton">Create Posts Here</router-link>
    </div>
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
      ]),

      showPosts: function () {
        return this.journalist.posts.length > 0
      }
    },
    async created () {
        // fetch the data when the view is created and the data is
        // already being observed
      await this.getMyPost()
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.showposts{
  text-align: center;
  margin-top: 15%;
}

.showposts h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 40px;
}

.showposts #showbutton {
  background: #1497C9;
  color: #fff;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
}

</style>
