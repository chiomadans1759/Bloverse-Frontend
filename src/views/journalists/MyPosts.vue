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
  <Row v-if="post" type="flex" justify="space-between">
    <Col v-for="i in 10" :md="11" :key="i">
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
        posts: null,
        post: { title: 'Lorem ipsum dolor sit amet, consectetur  ', body: 'Integer aliquam auctor facilisis. Donec egestas in turpis id rutrum. Ut eget ullamcorper lorem, quis rhoncus neque. Duis tincidunt sed urna ac tincidunt. Phasellus vitae tellus in lacus condimentum rhoncus. Phasellus a tincidunt massa, in dictum sapien. Vestibulum consequat quis odio ut vulputate. Donec in convallis turpis. Vivamus metus metus, viverra ut imperdiet in, consequat nec sem. In dapibus congue risus nec malesuada. In quis orci non tortor imperdiet rutrum. Phasellus purus ante, aliquam in semper nec, ultricies a tortor. Nullam sagittis ultrices purus eget pellentesque. In tempor dolor non nisi vulputate varius. Sed tortor augue, ullamcorper consequat lorem fringilla, vehicula bibendum dolor.', image_url: 'https://res.cloudinary.com/naera/image/upload/v1532594342/945_S_fuswub.png' } //this is dummy post for show
      }
    },
    computed: {
      // mix this into the outer object with the object spread operator
      ...mapState([
        'session',
      ])
    },
    mounted: async function(){
      /*try {
        let config = { headers: {'Authorization': `Token ${this.session.token}`}};
        let response = await this.$http.get('/api/v1/users/posts/', config);
        let { data, status } = response;
        this.posts = data.data.posts;
      }catch(error){
        console.log(error.response);
      }*/
      
    }
  }

</script>



<style>


</style>
