<template>
  <router-link :to="`posts/${post.slug}`"> 
    <div class="card-container" id="photo-contest" v-if="post.category === 7">
      <div id="card-hero">
        <img id="post-image" :src="post.image_url">
      </div>
      <div id="body-container">
        <div id="card-body">
          <h2 id="feed-travel-competition">
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
          <i class="fal fa-eye"></i> {{post.views}}
          </div>
        </div>            
      </div>
      <div class="card-container2"> 
        <div class="card-overlay">
          <h4>{{post.title}}</h4></br>
          <p>
            <i class="fas fa-camera-retro"></i>{{post.device_type}} 
            </br><span> <i class="fas fa-map-marker-alt"></i>{{post.location}}</span>
          </p> 
        </div>
        <router-link :to="`posts/${post.slug}`"> 
          <h5>READ STORY</h5>
        </router-link>
      </div>
    </div>

    <div class="card-container" v-else>
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
          <i class="fal fa-eye"></i> {{post.views}}
          </div>
        </div>
        
      </div>
      <div class="card-container22"> 
        <div class="container card-general-hover">
          <h4 class="my-5">{{post.title}}</h4>

          <div class="keypoints mt-2">
            <h3>Keypoints</h3>
            <ul class="mt-4">
              <li v-if="post.keypoint[0]">{{post.keypoint[0]}}</li>
              <li v-if="post.keypoint[1]">{{post.keypoint[1]}}</li>
              <li v-if="post.keypoint[2]">{{post.keypoint[2]}}</li>
              <p v-if="!post.keypoint[0] && !post.keypoint[1] && !post.keypoint[2]" class="keypoint-text">
                No keypoint availble for this post
              </p>
            </ul>
          </div>
        </div>
        <div id="hover-top-border">
          <router-link :to="`posts/${post.slug}`"> 
            <h5>READ STORY</h5>
          </router-link>
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

#post-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

.photo-contest-para{
  color:blue !important;
} 

.card-container {
  position: relative;
  height: 414px;
  margin-top: 32px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-family: 'Montserrat';
}

.card-container2 {
  background-image: url("./../assets/landingPage.jpg"); 
  height: 414px;  
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  font-family: 'Montserrat';
  opacity:0;  
  position: absolute; 
  top: 0; 
  bottom: 0;
  left: 0;
  right: 0;    
  transition: .5s ease; 
}

.card-overlay{
  height: 100%;
  width:100%;
  background: #000;
  opacity: .8;
}

.card-container2 h5{
  position:absolute;
  bottom:3rem;
  right:3rem;  
  font-weight: 800;
  color:blue;
}

.card-container2 div{ 
  color: #fff; 
}

.card-container2 h4{  
  font-weight:800;
  padding:2rem;
}

.card-container2 p{  
  font-weight:200;
  padding:2rem;
  line-height: 2.5;
  font-size:1.6rem;
}

.card-container2 .fa-camera-retro, .fa-map-marker-alt{  
   margin-right:10px;
   opacity: .3;
}


.card-container:hover .card-container2 { 
  opacity:1; 
} 


.card-container22 {
  height: 414px;  
  border: 1px solid rgba(168, 25, 25, 0.15);
  border-radius: 4px;
  font-family: 'Montserrat';
  opacity: 0;  
  position: absolute; 
  top: 0; 
  bottom: 0;
  left: 0;
  right: 0; 
  transition: .5s ease; 
}

.card-container22 h5{  
  text-align: right;
  color:blue; 
  padding:2rem;
  font-weight:800; 
}

.card-container22 div{ 
  color: #000; 
}

.card-container22 ul{
  font-size:1.4rem;
  margin-left:2rem;
}

.card-container22 ul li{
  list-style-type:disc;
  margin-left:2.5rem;
  margin-top:1rem;
  list-style-position: outside;
}

#hover-top-border{
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0; 
  height: 5rem;
  width: 100%;
}

.card-general-hover h4{  
  font-weight: 100;
  line-height: 2.5rem;
} 

.keypoints h3 {
  color: rgba(0, 0, 0, 0.5);
}

.keypoints ul {
  margin-left: -1rem;
}

.keypoints ul li {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}

.card-container:hover .card-container22 {
  opacity: 1;  
  background-color: #fff;
} 

#post-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

#feed-category p {
  color: rgba(53, 53, 53, 1) !important;
  font-size: 10px;
  text-transform: uppercase;
}

#feed-travel-competition p {
  color:blue !important;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none; 
  font-size: 16px;
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

#author-area p {
  color: black;
  opacity: 0.45;
  font-size: 10px;
  text-transform: uppercase;
}

#card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 15px;
  color:black;
  align-items: center;
}

#card-body {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

#contest-container #contest-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: relative;
  opacity: 0.8;
}

#contest-container {
  background-image: linear-gradient(#2c5364,#203A43,#0F2027 );
  color:rgba(255, 255, 255, 0.856);
  font-family: 'Montserrat';
}

#contest-author-area {
   color:white;
  opacity:0.8;
  font-size: 14px;
}

#contest-author-area p {
  color:white;
  font-size: 10px;
  text-transform: uppercase
}

#contest-image {
  border-radius: 2px;
}

.photo-contest {
  height: 414px;
}

.photo-contest .contest-img img {
  width: 100%;
  height: 414px;
  object-fit: cover;
  position: absolute;
}

/* Container holding the image and the text */
.img-container {
  position: relative;
  text-align: center;
  color: white;
  margin-top: 3.2rem;
}

.img-container img {
  width: 100%;
  height: 414px;
  object-fit: cover;
  border-radius: 3px;
}

.img-container img::after {
  background:rgba(0,0,0,0.6);
}

/* Bottom left text */
.bottom-left {
    position: absolute;
    bottom: 8px;
    left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.keypoint-text {
  margin-top: 5rem;
  font-weight: bold;
}
</style>

