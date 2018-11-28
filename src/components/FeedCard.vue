<template>
  <router-link :to="`posts/${post.slug}`">
  <div class="card-container">
    <div class="main-feed-card">
      <div id="card-hero">
        <Avatar :src="post.author.image_url"/> 
        <h2 id="feed-category"><p>{{category}}</p></h2> 
      </div>
      
      <div id="card-body">
      <h2 id="card-title"><p>{{post.title}}</p></h2>
      <img :src="imageUrl" />
      </div>
      <ul class="summary-cards">
      <li id="summary-cards-content" v-for="point in post.keypoint" :key="point.id">{{point}}</li>
      </ul>

      <div id="card-footer">
        <p>{{post.author.first_name}} {{post.author.last_name}} | {{post.published | customizedTime}}</p>
        <div id="views">
        <Icon type="md-eye" /> {{post.views}} 
        <Icon type="md-text" /> 54
        </div>
      </div>
      
    </div>
  </div>
  </router-link>
</template>

<script >
import { Card, Avatar, Icon } from "iview";
import { mapState } from "vuex";

export default {
  name: "FeedCard",
  props: { post: Object },
  components: { Card, Avatar, Icon },
  computed: {
    imageUrl: function() {
      return this.post.image_url;
    },
    ...mapState(["general"]),
    category() {
      const postCategory = this.general.categories.find(
        category => category.id === this.post.category
      );
      return postCategory.name;
    }
  },
  filters: {
    summarize: function(value) {
      if (!value) return "";
      return value.substring(0, 60);
    }
  }
};
</script>

<style scoped>
.main-feed-card img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 50%
}
.main-feed-card{
  position: relative;
  width:95%;
  height:450px;
  background:white;
  margin:20px auto;
  box-shadow: 0 20px 20px rgba(0,0,0,.08);
  white-space: normal;  
  color:#333;
  transition: top ease 4s;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between
  
}
.main-feed-card:hover{
 transition: 0.5s ease;
  
}
.summary-cards{
  position: absolute;
  height: 45%;
  width: 88%;
  opacity: 0;
  transition: .5s ease;
  background: rgba(26, 25, 25, 0.452);
  margin-top: 8.2rem;
}
#summary-cards-content{
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  text-align: left;
  color: #ffffff;
  font-size: 12px;
}
.main-feed-card:hover .summary-cards {
  
  opacity: 1;
  transition:  0.5s ease;

}
#keypoints{
  text-align: center;
   font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: #1D2129;
  padding: 20px 0;
}
#card-hero .ivu-avatar{
  height: 48px;
  width:48px;
  border-radius: 100%;
  background-color: white
}
#card-hero{
  display: flex;
  justify-content: space-between;
  align-items: center
}
#feed-category{
  border:2.5px solid #2f80ed;
  color:#2f80ed;
  padding:10px 15px;
 
  border-radius: 10px;

}
#card-title{
  font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 12px;
    color: #1D2129;
    text-transform: capitalize
}


#card-footer{
  border-top:2px solid rgb(236, 230, 230);
  font-size: 11px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 10px
  
}

</style>

