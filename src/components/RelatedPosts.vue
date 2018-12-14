<template>
<div class="pagee">
<div id="img-carousel">
  <h3 class="card-header-title">Related Topics</h3>
  <div class="related-posts-card">
    <div class="card-header"> 
    </div>

    <div class="card-body">
      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/1.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>30 crazy facts about shoes that will blow your mind...</h2>
            </router-link>
            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/2.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>How Tanazania is upgrading the lives of children...</h2>
            </router-link>
            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/3.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>The stylish men of West African regions are...</h2>
            </router-link>

            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/4.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>Attractions that will make you fall in love w...</h2>
            </router-link>
            <p>2 days ago</p>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="col-xs-5">
            <img src="@/assets/random-imgs/5.jpg" alt="">
          </div>

          <div class="col-xs-7">
            <router-link to="">
              <h2>New ford 3 has the VW Golf and Ford Focus in s...</h2>
            </router-link>
            <p>3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="related-card">
    <h4 style="font-family: 'Montserrat', sans-serif; margin-top: 4rem; font-weight: bold;">Related Topics</h4>
        <Row class="trending" >
            <carousel paginationActiveColor="#096DD9" paginationColor="#95C8D8" :perPageCustom="[[768, 3], [600, 2], [300,1]]" :autoplay="true" :autoplayTimeout=4000>
                <slide v-for="i in 5" :key="i" id="slider">
                    <Col>
                    <div class="card-bodyy">
                      <div class="post">
                        <div class="row">
                          <div class="col-xs-5">
                            <img src="@/assets/random-imgs/1.jpg" alt="" height="100">
                          </div>

                          <div class="col-xs-7">
                            <router-link to="">
                              <h2>30 crazy facts about shoes that will blow your mind...</h2>
                            </router-link>

                            <p>2 days ago</p>
                          </div>
                        </div>
                    </div>
                    </div>
                    </Col>
                </slide>
            </carousel>
        </Row>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { Row, Col, Card, Avatar } from 'iview';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'related-posts',
  components: { Row, Col, Card, Carousel, Slide, Avatar },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat');

.card-header-title{
  font-size: 16px;
  padding-bottom: 20px;
  font-weight: bold;
  
}
.related-posts-card {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  min-height: 17rem;
}

.related-posts-card .card-header-title {
  font-size: 17px;
  text-transform: capitalize;
  color: #666666;
}

.related-posts-card .card-body {
  min-height: 50rem;
  padding: 1rem 0rem;
}

.related-posts-card .post {
  width: 100%;
  padding: 1rem 2rem;
}

.related-posts-card .post img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}

.related-posts-card .post h2 {
  font-size: 15px;
  color: #333333;
  margin: 1rem 0rem;
}

.related-posts-card .post h2:hover {
  color: #2f80ed;
}

.related-posts-card .post p {
  color: #666666;
  font-size: 13px;
}
.trending {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  }

  #category-name {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 8px;
    left: 16px;
    color: #ffffff;
    text-transform: uppercase;
    }

    #trend-card {
      width:330px;
      margin-right: 1rem;
    }  

    #trend-img {
      height:210px; 
      width: 330px;
    } 

    #category-text {
      position: absolute;
      top: 120px;
      right: 16px;
      left: 16px;
      color: #ffffff;
      font-size: 12px;
      font-family: 'Montserrat', sans-serif;
      }

      #avatarr {
        position: absolute;
        bottom: 10px;
        left: 16px;
        }

      #user-name {
        position: absolute;
        color: #ffffff;
        font-family: 'Montserrat', sans-serif;
        bottom: 7%;
        left: 20%;
        font-size: 12px;
        float: left;
        }

</style>

<style>
 @media screen and (max-width: 600px) {

  .related-posts-card {
    display: none;
  }

  .card-header-title {
    display: none;
  }

  .trending-card {
    display: block !important;
  }

  .card-bodyy .post h2 {
  font-size: 15px;
  color: #333333;
  margin: 1rem 0rem;
}
.card-bodyy {
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  min-height: 10rem;
}

.card-bodyy img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}
}
@media (min-width: 1200px) {
  .related-card {
    display: none;
  }
}
</style>

