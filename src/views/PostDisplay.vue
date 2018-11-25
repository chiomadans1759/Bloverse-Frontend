<template>
<div id="postdisplaycontainer">
   <div class="main-feed">
    <router-link v-if="isLoggedIn" :to="`/journalist/${auth.loggedInUser.userName}/posts`"> <Icon type="ios-arrow-round-back" /> Back to Dashboard</router-link>
    <h2 class="border">{{general.currentPost.title}}</h2>
    <ul class="summary-feed">
      <li v-for="point in general.currentPost.keypoint" :key="point.id">{{point}}</li>
    </ul>
      <social-sharing :url="url" :title="general.currentPost.title" :quote="general.currentPost.body" :description="general.currentPost.body" :media="general.currentPost.image_url" hashtags="bloverse" inline-template>
    <div class="share-links">
      <ion-icon name="heart-empty" style="font-size: 40px;"></ion-icon>
        <network network="facebook">
          <svg version="1.1" role="presentation" width="28" height="32" viewBox="0 0 448 512" class="fa-icon" color="#3B5998" style="font-size: 2em;"><path d="M448 56.7V455.2C448 468.9 436.9 479.9 423.3 479.9H309.1V306.5H367.3L376 238.9H309V195.7C309 176.1 314.4 162.8 342.5 162.8H378.3V102.3C372.1 101.5 350.9 99.6 326.1 99.6 274.5 99.6 239.1 131.1 239.1 189V238.9H180.7V306.5H239.1V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32H423.2C436.9 32 448 43.1 448 56.7z"></path><!----></svg>
        </network>
         <network network="twitter">
         <!-- twitter -->
         <svg version="1.1" role="presentation" width="28" height="32" viewBox="0 0 448 512" class="fa-icon" color="#1DA1F2" style="font-size: 2em;"><path d="M400 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H400C426.5 480 448 458.5 448 432V80C448 53.5 426.5 32 400 32zM351.1 190.8C351.3 193.6 351.3 196.5 351.3 199.3 351.3 286 285.3 385.9 164.7 385.9 127.5 385.9 93 375.1 64 356.5 69.3 357.1 74.4 357.3 79.8 357.3 110.5 357.3 138.7 346.9 161.2 329.3 132.4 328.7 108.2 309.8 99.9 283.8 110 285.3 119.1 285.3 129.5 282.6 99.5 276.5 77 250.1 77 218.2V217.4C85.7 222.3 95.9 225.3 106.6 225.7A65.4-65.4 0 0 0 77.4 171.1C77.4 158.9 80.6 147.7 86.3 138 118.6 177.8 167.1 203.8 221.5 206.6 212.2 162.1 245.5 126 285.5 126 304.4 126 321.4 133.9 333.4 146.7 348.2 143.9 362.4 138.4 375 130.9 370.1 146.1 359.8 158.9 346.2 167 359.4 165.6 372.2 161.9 384 156.8 375.1 169.9 363.9 181.5 351.1 190.8z"></path><!----></svg>
        </network>
        <network network="linkedin">
          <!-- linkedin -->
          <svg version="1.1" role="presentation" width="28" height="32" viewBox="0 0 448 512" class="fa-icon" color="#0077B5" style="font-size: 2em;"><path d="M100.3 480H7.4V180.9H100.3V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32 83.5 32 107.6 56.1 107.6 85.8 107.6 115.5 83.5 140.1 53.8 140.1zM448 480H355.3V334.4C355.3 299.7 354.6 255.2 307 255.2 258.7 255.2 251.3 292.9 251.3 331.9V480H158.5V180.9H247.6V221.7H248.9C261.3 198.2 291.6 173.4 336.8 173.4 430.8 173.4 448.1 235.3 448.1 315.7V480z"></path><!----></svg>
        </network>
    </div>
  </social-sharing>
    <img class="main-image" :src="general.currentPost.image_url" />
    <div id="main-body-section">
    <div class="main-body" v-html="general.currentPost.body"></div>    
    </div>
    <section id="trendweek">
      <Row type="flex" justify="space-between">
        <i-col id="texta" :sm="8">
          <h5><p>Similar</p></h5>    
        </i-col>       
      </Row>
    </section>
    </div>
  
  <div id="main-section">
    
</div>

    <!-- <section>
      <Row type="flex" justify="space-between">
        <Card class="postcard2" style="width:240px">
          <img src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799601/samples/animals/three-dogs.jpg" />
          <h2 id="cardhead"><p>ENTERTAINMENT</p></h2>
          <h2 id="cardtitle"><p>Lorem Ipsum is simply dummy</p></h2>   
        </Card>
        <Card class="postcard2" style="width:240px">
          <img src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799605/samples/ecommerce/leather-bag-gray.jpg" />
          <h2 id="cardhead"><p>ENTERTAINMENT</p></h2>
          <h2 id="cardtitle"><p>Lorem Ipsum is simply dummy</p></h2>                      
        </Card>
        <Card class="postcard2" style="width:240px">
          <img src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799886/mission-impossible-fallout-poster.jpg" />
          <h2 id="cardhead"><p>ENTERTAINMENT</p></h2>
          <h2 id="cardtitle"><p>Lorem Ipsum is simply dummy</p></h2>
        </Card> 
      </Row>
    </section> -->
 
</div>

</template>


<script>

import { Row, Col, Card, Input, Select, Option, Icon, FormItem, Form, Button} from 'iview';
import { mapGetters, mapState, mapActions } from 'vuex';
import { Facebook, Twitter, Linkedin} from 'vue-socialmedia-share';

export default {
  components: { Row, Col, Card, Input, Select, Option, Icon, FormItem, Form, Button, Facebook, Twitter, Linkedin },
  data: function(){
    return {
      newComment: '',
    }
  },
  computed: {
    url(){
      return `${this.$BASE_URL}posts/${this.general.currentPost.slug}`;
    },
    ...mapState(["general", "auth"]),
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["getPostBySlug"])
  },
  async created() {
    // fetch the data when the view is created and the data is
    // already being observed

    let { slug } = this.$route.params;
    await this.getPostBySlug({ slug });
    // this.postDetails = this.general.currentPost;
    // console.log(this.postDetails);
  },
  head: {
    // const this = self,
    title: function() {
      return {
        inner: `${this.general.currentPost.title}`
      };
    },
    // Meta tags
    meta: function() {
      return [
        { name: "application-name", content: "Bloverse" },
        {
          name: "description",
          content: "A platform for journalist",
          id: "desc"
        }, // id to replace intead of create element
        // ...
        // Twitter
        { name: "twitter:title", content: `${this.general.currentPost.title}` },
        // with shorthand
        { n: "twitter:description", c: `${this.general.currentPost.body}` },
        // ...
        // Google+ / Schema.org
        { itemprop: "name", content: `${this.general.currentPost.title}` },
        {
          itemprop: "description",
          content: `${this.general.currentPost.body}`
        },
        // ...
        // Facebook / Open Graph
        // { property: 'fb:app_id', content: '123456789' },
        { property: "og:title", content: `${this.general.currentPost.title}` },
        {
          property: "og:description",
          content: `${this.general.currentPost.body}`
        },
        // with shorthand
        { p: "og:image", c: `${this.general.currentPost.image_url}` }
        // ...
      ];
      // link tags
    }
    // link: [
    //   { rel: "author", href: "author", undo: false }, // undo property - not to remove the element
    //   {
    //     rel: "icon",
    //     href:
    //       "https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png",
    //     type: "image/png"
    //   }
    //   ]

    // with shorthand
    //   { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
    // ...
  }
};
</script>
<style>
#postdisplaycontainer{
display: flex;
flex-direction: column;
width:50%;
margin:auto;
padding: 10px;
justify-content: center;
align-content: center

}
.main-image{
  width: 100%;
  height:450px;
  object-fit: cover;
  object-position: 50%;
  border:2px solid #95a5a6;

}

.main-feed h2{
  font-size: 2rem;
}
.summary-feed{
  margin-top: 15px;
}
.summary-feed li{

  font-size: 1.2rem;
  color: #333333;
  list-style: none;
  font-weight: 600;
  padding: 8px 0;
  
}
.summary-feed li::before{
  content: "\2022"; 
  color: #C4C4C4; 
  font-weight: bold; 
  display: inline-block; 
  width: 1em; 
}
.share-links{
  width:50%;
  margin: 20px 0;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.main-body{
  padding: 20px 40px;
  width:100%;
}
.main-body > *{
  display: flex;
}

@media screen and (max-width: 360px) {
#postdisplaycontainer{
   width:100%;
   text-align: justify
}
.border{
  text-align: center
}
.share-links{
  width:100%;
  justify-content: space-evenly
}
.main-image{
  object-fit: contain;
  object-position: center;
  height:50%
}
}
@media screen and (max-width: 600px) {
#postdisplaycontainer{
    width:100%;
       text-align: justify
}
.border{
  text-align: center
}
.share-links{
  width:100%;
  justify-content: space-evenly
}
.main-image{
  object-fit:contain;
  object-position: center;
  height:50%
}
}


</style>
