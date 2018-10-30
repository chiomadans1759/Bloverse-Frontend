<template>
  <router-link :to="`posts/${post.slug}`">
  <div class="container">
    <Card class="feed-card">
      <div id="sectionWidth">
        <Avatar icon="person" /> &nbsp; <span>John Doe <p style="float: right; margin-top: 5px;">3 hours ago</p></span>
      </div>
      <img :src="imageUrl" />
      <h2 id="category"><p>{{category}}</p></h2>
      <h2 id="title"><p>{{post.title}}</p></h2>
      <footer>
        <Icon type="md-heart" /> 234
        <Icon type="md-text" style="margin-left: 15px;" /> 54
        <span style="margin-left: 80px;"><Icon type="ios-share-alt" style="transform:rotate(180deg); font-size: 15px;" /><Icon type="md-more" style="margin-left: 30px; font-size: 15px;" /></span>
      </footer>
    </Card>
  </div>
  </router-link>
</template>

<script >
  import { Card, Avatar, Icon } from 'iview';
  import { mapState } from 'vuex';

  export default {
    name: 'FeedCard',
    props: { post: Object},
    components: { Card, Avatar, Icon },
    computed: {
      imageUrl: function(){
        return this.post.image_url;
      },
      ...mapState(['general']),
      category(){
        const postCategory = this.general.categories.find( category => category.id === this.post.category);
        return postCategory.name;
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

.container {
  margin: 30px;
}
  
  .feed-card {
    color:#828282;
    margin : 0 !important;
  }
  .feed-card img{
    display: block;
    object-fit: cover;
    width: 100%;
    height: 150px;
    border: 1px block #ddd;
    cursor: pointer;
  }
  footer{
    position: absolute;
    bottom: 0;
    margin: 20px;
  }

  #category{
    margin-top: 20px;
    color: #2F80ED;
    text-align: center;
    font-size: 13px;
    font-weight: 500;

  }
  #title{
    margin-top: 15px;
    color: #828282;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
  }

  #summary {
    margin: 10px 40px;
    font-size: 18px;
  }
  #sectionWidth {
    height: 6vh;
    margin: 5px;
  }
</style>


<style>
  .feed-card .ivu-card-body{
    height: 400px;
    border: 1px solid #E0E0E0;
    padding: 0px;

  }
</style>