<template>
  <main id="trending-card">
    <h4 class="mb-4 text-bold" id="trend-card-heading">Top Stories</h4>
    <div class="desktop">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
      <ol class="carousel-indicators" v-show="general.trendingPost.length > 4">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" v-show="general.trendingPost.length > 8"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row no-gutters">
            <div class="col-3">
              <router-link :to="`posts/${general.trendingPost[0].slug}`"> 
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[0].image_url" alt="Card image" >
                  <div class="card-img-overlay">
                    <h5 class="card-title">{{categoryName}}</h5>
                    <p class="card-text">
                      {{general.trendingPost[0].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[0].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[0].author.first_name}} {{general.trendingPost[0].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
              </router-link>
            </div>

            <div class="col-3" v-if="general.trendingPost.length > 1">
              <router-link :to="`posts/${general.trendingPost[1].slug}`"> 
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[1].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">{{categoryName}}</h5>
                    <p class="card-text">
                      {{general.trendingPost[1].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[1].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[1].author.first_name}} {{general.trendingPost[1].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
              </router-link>
            </div>

            <div class="col-3" v-if="general.trendingPost.length > 2">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[2].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[2].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[2].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[2].author.first_name}} {{general.trendingPost[2].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3" v-if="general.trendingPost.length > 3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[3].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[3].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[3].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[3].author.first_name}} {{general.trendingPost[3].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item" v-if="general.trendingPost.length > 4">
          <div class="row no-gutters">
            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[4].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[4].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[4].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[4].author.first_name}} {{general.trendingPost[4].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[5].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[5].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[5].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[5].author.first_name}} {{general.trendingPost[5].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[6].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[6].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[6].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[6].author.first_name}} {{general.trendingPost[6].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[7].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[7].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[7].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[7].author.first_name}} {{general.trendingPost[7].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item" v-if="general.trendingPost.length > 4">
          <div class="row no-gutters">
            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[8].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[8].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[8].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[8].author.first_name}} {{general.trendingPost[8].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[9].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[9].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[9].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[9].author.first_name}} {{general.trendingPost[9].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[10].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      {{general.trendingPost[10].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[10].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[10].author.first_name}} {{general.trendingPost[10].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card text-white">
                <img class="card-img" :src="general.trendingPost[11].image_url" alt="Card image">
                  <div class="card-img-overlay">
                    <h5 class="card-title">{{post.category}}</h5>
                    <p class="card-text">
                      {{general.trendingPost[11].title}}
                    </p>
                    <div class="author mt-4">
                    <img class="rounded mr-3" :src="general.trendingPost[11].author.image_url" alt="">
                    <span>
                      {{general.trendingPost[11].author.first_name}} {{general.trendingPost[11].author.last_name}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" v-show="general.trendingPost.length > 4">
        <i class="fal fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" v-show="general.trendingPost.length > 4">
        <i class="fal fa-chevron-right" style="color: #fff; blur: none;"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>

  <!-- For Mobile View -->
  <div class="mobile">
    <carousel
     :autoplay= true
     paginationColor="#73C2FB;"
     paginationActiveColor="#096DD9"
     :autoplayTimeout="3000">
      <slide v-for="(post, index) in general.trendingPost" :key="index" v-if="index < 3">
        <router-link :to="`posts/${post.slug}`"> 
         <div class="card text-white">
           <img class="card-img" :src="post.image_url" alt="Card image">
              <div class="card-img-overlay">
                <h5 class="card-title">{{category}}</h5>
                  <p class="card-text">
                    {{post.title}}
                  </p>
                <div class="author mt-4">
                  <img class="rounded mr-3" :src="post.author.image_url" alt="">
                   <span>{{post.author.first_name}} {{post.author.last_name}}</span>
                </div>
              </div>
            </div>
        </router-link>
      </slide>
    </carousel>
  </div>
  </main>
</template>

<script>
import { Row, Col, Avatar } from "iview";
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapState } from "vuex";

export default {
  name: "TrendingCards",
  components: { Row, Col, Avatar, Carousel, Slide },
  methods: {
    ...mapActions(["getAllTrendingPosts"])
  },
  async created() {
    await this.getAllTrendingPosts();
    setInterval(async () => {
      await this.getAllTrendingPosts();
    }, 100000)
  },
  computed: {
    ...mapState(["general"]),
    categoryName() {
      if (this.category) {
        let category = this.general.trending.find(
          category => category.id == this.category.id
        );
        return category;
      }
    }
  }
};
</script>

<style scoped>

.mobile {
  display: none;
}

#trending-card {
  height: auto;
  margin: 0rem 0rem 5rem;
}

#trend-card-heading {
  font-size: 16px;
  font-weight: 800;
}

#trending-card .card {
  height: 180px;
  box-shadow: none !important;
  border: 0px !important;
  border-radius: 0px !important;
  margin-right: 0.4rem;
}

#trending-card .card::after {
  display: block !important;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)) !important;
  height: 100% !important;
  content:'\A';
  position: absolute;
  width: 100%; 
  height: 100%;
  top: 0; 
  left: 0;
}

#trending-card .card img {
  height: 100%;
}

#trending-card .carousel-indicators {
  top: 13rem;
}

#trending-card .carousel-indicators li {
  margin: 0rem 1rem;
  background: #096DD9;
  border: 1px solid rgba(0, 0, 0, 0.15);
  opacity: 0.6;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

#trending-card .carousel-indicators li.active {
  margin: 0rem 1rem;
  background: #096DD9;
  border: 1px solid rgba(0, 0, 0, 0.15);
  opacity: 1;
  width: 8px;
  height: 8px;
  margin-top: -2px;
}

#trending-card .carousel-control-next {
  margin-top: 4.5rem;
  margin-right: -1.2rem !important; 
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

@media only screen and (max-width: 980px) {
  #trending-card .carousel-indicators li {
    width: 5px;
    height: 5px;
  }

  #trending-card .carousel-indicators li.active {
    width: 8px;
    height: 8px;
  } 
}

#trending-card .card .card-img-overlay {
  padding-top: 3rem;
  z-index: 1;
}

#trending-card .card .card-img-overlay .card-title {
  font-size: 13px;
}

#trending-card .card .card-img-overlay .card-text {
  font-weight: bold;
  font-size: 13px;
}

#trending-card .carousel-control-next {
  margin-top: 4.5rem;
  margin-right: -1.5rem; 
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

#trending-icon .carousel-control-prev {
  margin-top: 4.5rem;
  margin-right: -1.5rem; 
  border-radius: 50%;
  width: 38px;
  height: 38px;
 
}

#trending-card .carousel-control-next-icon, .carousel-control-prev-icon{
  font-size: 10px;
  filter: none;
  font-size: 40rem !important;
}

@media only screen and (max-width: 980px) {
  #trending-card .card .card-img-overlay .card-text {
    font-size: 11px;
  }
}

#trending-card .card .card-img-overlay .author img {
  width: 24px;
  height: 24px;
  margin-top: -0.3rem;
  border-radius: 4px;
}

#trending-card .carousel-control-prev {
  margin-top: 4.5rem;
  margin-left: -1.7rem; 
  background-color: #000000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa; /*10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

#trending-card .carousel-control-next {
  margin-top: 4.5rem;
  margin-left: -1.7rem; 
  background-color: #000000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa; /*10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

#trending-card .carousel-control-next {
  margin-top: 4.5rem;
  margin-right: -1.5rem; 
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background-color: #dddddd;
  border: 1px solid #aaaaaa;
}

@media only screen and (max-width: 980px) {

.mobile {
  display: block;
}

.desktop {
  display: none;
}

#trending-card .carousel-indicators {
  display: none;
}


 #trending-card .card .card-img-overlay {
  padding-top: 1rem;
}

#trending-card .card {
  height: 160px;
  margin-right: 0.8rem;
}

#trending-card .carousel-inner {
  height: 100%;
}

#trending-card .carousel-control-next {
  margin-top: 4.5rem;
  margin-left: -1.7rem; 
  background-color: #000000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa; /*10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

@media only screen and (min-width: 300px) {
  #trending-card .card {
  height: 170px;
  margin-right: 0.8rem;
}
 #trending-card .card .card-img-overlay {
  padding-top: 3rem;
}

  }
}

</style>
