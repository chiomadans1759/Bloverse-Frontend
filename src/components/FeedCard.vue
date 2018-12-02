<template>
  <router-link :to="`posts/${post.slug}`">
    <div id="photo-contest">
      <div id="contest-container">
        <img id="contest-image" :src="post.image_url" >
        <div id="contest-info">
          <div id="info-top">
            <p></p>
          </div>
           <div id="card-footer">
           <div id="body-mid">
        <Avatar id="author-image" :src="post.author.image_url"/> &nbsp;&nbsp;
        <span id ="contest-author-area">{{post.author.first_name}} {{post.author.last_name}}  <p>{{post.published | customizedTime}}</p></span>
        </div>
        <div id="views">
           <i class="far fa-eye"></i> {{post.views}}
           </div>
        </div>

        </div>
      </div>
    </div>
    
    <div class="card-container">
      <div id="card-hero">
        <img id="post-image" :src="post.image_url">
      </div>
      <div id="body-container">
        <div id="card-body">
          <h2 id="feed-category">
            <p>{{category}}</p>
          </h2>
          <div id="body-start">
        <h2 id="card-title"><p><strong>{{post.title}}</strong></p></h2>
       
        </div>
        </div>
        <div id="card-footer">
           <div id="body-mid">
        <Avatar id="author-image" :src="post.author.image_url"/> &nbsp;&nbsp;
        <span id ="author-area">{{post.author.first_name}} {{post.author.last_name}}  <p>{{post.published | customizedTime}}</p></span>
        </div>
        <div id="views">
           <i class="far fa-eye"></i> {{post.views}}
           </div>
        </div>
        
      </div>
    </div>
  </router-link>
</template>

<script>
import { Row, Col, vSelect, Card, Avatar, Icon } from "iview";
import { mapState } from "vuex";

export default {
  name: "FeedCard",
  components: { Row, Col, Card, vSelect, Avatar, Icon },
  props: {
    post: Object
  },
  computed: {
    ...mapState(["general"]),
    category() {
      const postCategory = this.general.categories.find(
        category => category.id === this.post.category
      );
      return postCategory.name;
    }
  }
};
</script>
 <style>
 @import url('https://fonts.googleapis.com/css?family=Montserrat');

#post-image{
   width:100%;
   height:220px;
   object-fit: cover;
   border-top-right-radius: 4px;
   border-top-left-radius: 4px;
    
 }
 .card-container{
   
   height:414px;
   margin-top: 32px;
   background: white;
   border:1px solid rgba(0, 0, 0, 0.15);
   border-radius:4px;
   font-family: 'Montserrat';
   
 }
 #feed-category p {
   color:rgba(53, 53, 53, 1) !important;
   font-size: 10px;
   text-transform: uppercase;
 }

#post-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.card-container {
  height: 414px;
  margin-top: 32px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-family: "Montserrat";
}
#feed-category p {
  color: rgba(53, 53, 53, 1) !important;
  font-size: 10px;
  text-transform: uppercase;
}
#card-title p {
  color: rgba(52, 50, 61, 1);
  font-size: 16px;
  font-weight: 400;
}
#body-container {
  margin: 16px;
  height: 155px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
#author-image {
  border-radius: 2px;
}
#body-start {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  height: 120px;
  padding: 10px 0;
}
#body-mid {
  display: flex;
  align-items: center;
}
#views{
color:black;
opacity: 0.85;

}
#author-area p{
 
    color: black;
    opacity: 0.45;
    font-size: 10px;
    text-transform: uppercase
}
#card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 15px;
  color:black;
  align-items: center
}
#card-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

#contest-container #contest-image{
width:100%;
height:414px;
object-fit: cover;
position: relative;
opacity:0.8;

}
#contest-container {
  background-image: linear-gradient(#2c5364,#203A43,#0F2027 );
  color:rgba(255, 255, 255, 0.856);
   font-family: 'Montserrat';

}
#contest-author-area{
   color:white;
  opacity:0.8;
  font-size: 14px
}
#contest-author-area p{
  color:white;
  
    font-size: 10px;
    text-transform: uppercase}
#contest-image{
    border-radius: 2px;
}
 </style>

