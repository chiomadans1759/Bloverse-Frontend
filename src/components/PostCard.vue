<template>
  <Card id="post-card" @click.native="processClick" v-if="!havePosts">
    <Row type="flex" justify="space-between">
      <Col span="8">
        <img :src="imageUrl" />
      </Col>
      <Col span="14" id="body">
        <Row type="flex" justify="end">
         <Col>
           <Icon type="md-checkbox" />
         </Col>
        </Row>
        <h2>{{post.title}}</h2>
        <p>
          {{post.body | summarize}}....
        </p>
        <Row :style="{marginTop: '1.5rem'}" type="flex" justify="space-between">
          <Col>
            <Icon type="md-eye" /> 24K
          </Col>
          <Col>
            <Icon type="ios-heart-outline"></Icon> 1200
          </Col>
          <Col>
            <Icon type="chatbox"></Icon> 200
          </Col>
          <Col>
            <span>22/07/18</span>
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
  <h3 v-else>Please Create a post</h3>

</template>


<script>
  import { Card , Row, Col, Icon } from 'iview';
  export default {
    props: ['post'],
    components: { Card, Row, Col, Icon },
    computed: {
      imageUrl: function(){
        return this.post.image_url;
      },
      isPublished: function(){
        return this.post.is_published;
      }
    },
    methods: {
      processClick: function(){
        let url = `posts/${this.post.id}`;

        if(!this.isPublished)
          url += '/edit';
        this.$router.push(url)
        }
      },
    filters: {
      summarize: function (value) {
        if (!value) return ''
        return value.substring(0, 60)
      }
    }
  }

</script>



<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

  #post-card {
    height: 150px;
    margin: 2rem 0;
    cursor: pointer;

  }

  #post-card #body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


</style>

<style>
  #post-card .ivu-card-body {
    padding: 0px 16px 0px 0px;
    height: 100%;
  }

  #post-card .ivu-card-body > * {
    height: 100%;
  }
</style>