<template>
  <Card class="feed-card">
    <img :src="imageUrl" />
    <h2 id="category"><p>{{post.category.name}}</p></h2>
    <h2 id="title"><p>{{post.title}}</p></h2>
    <h2 id="summary"><p>{{post.body | summarize}}</p></h2>
  </Card>
</template>

<script >
  import { Card } from 'iview';
  export default {
    name: 'FeedCard',
    props: { post: Object},
    components: { Card },
    computed: {
      imageUrl: function(){
        return this.post.image_url;
      },
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
  
  .feed-card img{
    display: block;
    object-fit: cover;
    width: 100%;
    height: 200px;
    border: 1px block #ddd;
    cursor: pointer;
  }

  #category{
    margin-top: 20px;
    color: #2F80ED;
    text-align: center;
    font-size: 18px;
    font-weight: 500;

  }
  #title{
    margin-top: 15px;
    color: #828282;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }

  #summary{
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    text-align: justify;
    font-size: 14px;
    font-weight: 300;
    color:#828282;
    
  }
</style>


<style>
  .feed-card .ivu-card-body{
    height: 400px;
    border: 1px solid #E0E0E0;
    padding: 0px;

  }
</style>