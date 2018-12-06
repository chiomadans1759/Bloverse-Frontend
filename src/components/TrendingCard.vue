<template>
  <main class="pt-5">
    <h4 class="mt-5 mb-4 text-bold" id="trend-card-heading">Top Stories</h4>

    <Row class="trending">
      <carousel
        paginationActiveColor="#096DD9"
        paginationColor="#95C8D8"
        :perPageCustom="[[768, 3], [1024, 4], [600, 2], [300,1]]"
        :autoplay="true"
        :autoplayTimeout="4000"
      >
        <slide v-for="post in general.trendingPost" :key="post.id" id="slider">
          <Col>
            <Card id="trend-card">
              <div class="trend-img">
                <img :src="post.image_url">
              </div>
              <div>
                <!-- <p id="category-name">Category</p> -->
                <p class="text-bold" id="category-text">{{post.title}}</p>
                <Avatar shape="square" id="avatarr"/>
                <span id="user-name">{{post.author.first_name}} {{post.author.last_name}}</span>
              </div>
            </Card>
          </Col>
        </slide>
        <slide v-for="i in 9" :key="i" id="slider">
          <Col>
            <Card id="trend-card">
              <div class="trend-img">
                <img src="./../assets/trending/business.jpg">
              </div>
              <div>
                <p id="category-name">Category</p>
                <p class="text-bold" id="category-text">I took a break from mum guilt for the day</p>
                <Avatar shape="square" id="avatarr"/>
                <span id="user-name">John Doe</span>
              </div>
            </Card>
          </Col>
        </slide>
      </carousel>
    </Row>
  </main>
</template>

<script>
import { Row, Col, Card, Avatar } from "iview";
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapState } from "vuex";
import FeedCard from "./FeedCard.vue";

export default {
  name: "TrendingCards",

  components: { Row, Col, Card, Carousel, Slide, Avatar },
  methods: {
    ...mapActions(["getAllTrendingPosts"])
  },
  async created() {
    await this.getAllTrendingPosts();
  },
  computed: {
    ...mapState(["general"])
  }
};
</script>

<style scoped>
.trending {
  display: flex;
  justify-content: space-between;
}

#category-name {
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 8rem;
  left: 16px;
  color: #ffffff;
  text-transform: uppercase;
}

#trend-card-heading {
  margin-left: 6%;
}

#trend-card {
  width: 285px;
  margin-right: 1rem;
}

.trend-img {
  height: 210px;
  width: 100%;
  margin: auto;
}

.trend-img > img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.trend-img::after {
  display: block;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9));
  margin-top: -210px;
  height: 100%;
  width: 100%;
  content: "";
  border-radius: 4px;
}

#category-text {
  position: absolute;
  top: 100px;
  right: 16px;
  left: 16px;
  color: #ffffff;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
}

#avatarr {
  position: absolute;
  bottom: 20px;
  left: 16px;
  height: 24px;
  width: 24px;
}

#user-name {
  position: absolute;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  bottom: 11%;
  left: 18%;
  font-size: 12px;
  float: left;
}
</style>

<style>
.VueCarousel-wrapper {
  width: 88vw !important;
}

@media only screen and (max-width: 767px) {
  .VueCarousel-wrapper {
    width: 90vw !important;
  }

  #trend-card {
    width: 500px;
  }

  #trend-img {
    height: 210px;
    width: 300px;
  }
}
</style>
