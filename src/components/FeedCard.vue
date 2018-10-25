<template>
  <router-link :to="`posts/${post.slug}`">
    <Card class="feed-card">
      <img :src="imageUrl" />
      <h2 id="category"><p>{{category}}</p></h2>
      <h2 id="title"><p>{{post.title}}</p></h2>
    </Card>
  </router-link>
</template>

<script >
  import { Card } from 'iview';
  import { mapState } from 'vuex';

  export default {
    name: 'FeedCard',
    props: { post: Object},
    components: { Card },
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
  
  .feed-card {
    color:#828282;
  }
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

  #summary {
    margin: 10px 40px;
    font-size: 18px;
  }
</style>


<style>
  .feed-card .ivu-card-body{
    height: 400px;
    border: 1px solid #E0E0E0;
    padding: 0px;

  }
</style>