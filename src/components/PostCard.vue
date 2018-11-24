<template>
  <router-link :to="route">
    <Card id="post-card" @click.native="processClick">
      <Row type="flex" justify="space-between">
        <Col span="8">
          <img :src="imageUrl" />
        </Col>
        <Col span="14" id="body">
          <Row type="flex" justify="end">
           <Col>
             <Icon type="md-checkbox" class="icon1" v-if="post.is_published" />
             <Icon type="ios-folder" class="icon2" v-else />
           </Col>
          </Row>
          <h3>{{post.title}}</h3>
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
  </router-link>

</template>


<script>
import { Card , Row, Col, Icon } from 'iview';
import { mapState } from 'vuex';

export default {
  props: ['post'],
  components: { Card, Row, Col, Icon },
  computed: {
    imageUrl: function(){
      return this.post.image_url;
    },
    route(){
      let url;
      if(this.post.is_published)
        url = `/posts/${this.post.slug}`
      else
        url = `/creators/${this.auth.loggedInUser.userName}/posts/${this.post.slug}/edit`

      return url;
    },
    ...mapState(['auth']) 
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
    height: 180px;
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

  .icon1 {
    color: #26E248;
    font-size: 20px;
    margin-top: -40px;
  }

  .icon2 {
    color: #26B7E2;
    font-size: 20px;
    margin-top: -40px;
  }
</style>
