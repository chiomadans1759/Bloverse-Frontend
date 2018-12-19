<template>
  <main id="trending">
    <h4 class="mb-4 text-bold" id="trend-card-heading">Top Stories</h4>
    <div class="desktop">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <ol class="carousel-indicators" v-show="general.trendingPost.length > 4">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            v-show="general.trendingPost.length > 8"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row no-gutters">
              <div class="col-3" v-if="general.trendingPost.length > 0">
                <trending-card :post="general.trendingPost[0]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 1">
                <trending-card :post="general.trendingPost[1]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 2">
                <trending-card :post="general.trendingPost[2]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 3">
                <trending-card :post="general.trendingPost[3]"/>
              </div>
            </div>
          </div>

          <div class="carousel-item" v-if="general.trendingPost.length > 4">
            <div class="row no-gutters">
              <div class="col-3">
                <trending-card :post="general.trendingPost[4]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 5">
                <trending-card :post="general.trendingPost[5]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 6">
                <trending-card :post="general.trendingPost[6]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 7">
                <trending-card :post="general.trendingPost[8]"/>
              </div>
            </div>
          </div>

          <div class="carousel-item" v-if="general.trendingPost.length > 8">
            <div class="row no-gutters">
              <div class="col-3">
                <trending-card :post="general.trendingPost[9]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 9">
                <trending-card :post="general.trendingPost[10]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 10">
                <trending-card :post="general.trendingPost[11]"/>
              </div>

              <div class="col-3" v-if="general.trendingPost.length > 11">
                <trending-card :post="general.trendingPost[12]"/>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          v-show="general.trendingPost.length > 4"
        >
          <i class="fal fa-chevron-left"></i>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          v-show="general.trendingPost.length > 4"
        >
          <i class="fal fa-chevron-right" style="color: #fff; blur: none;"></i>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <!-- For Mobile View -->
    <div class="mobile">
      <carousel
        :autoplay="true"
        paginationColor="#73C2FB;"
        paginationActiveColor="#096DD9"
        :autoplayTimeout="3000"
      >
        <slide v-for="(post, index) in general.trendingPost" :key="index">
          <trending-card :post="post"/>
        </slide>
      </carousel>
    </div>
  </main>
</template>

<script>
import { Row, Col, Avatar } from "iview";
import { Carousel, Slide } from "vue-carousel";
import { mapActions, mapState } from "vuex";
import TrendingCard from "./TrendingCard.vue";

export default {
  name: "trending",
  data() {
    return {
      pages: null
    };
  },
  components: { Row, Col, Avatar, Carousel, Slide, TrendingCard },
  methods: {
    ...mapActions(["getAllTrendingPosts"]),

    countPages() {
      let pages = Math.ceil(this.general.trendingPost.length / 3);
      this.pages = pages;
    }
  },
  async created() {
    await this.getAllTrendingPosts();
    setInterval(async () => {
      await this.getAllTrendingPosts();
    }, 100000);
  },
  computed: {
    ...mapState(["general"])
  },
  filters: {
    categoryName(cat_id, category) {
      let ct = category.filter(cat => {
        cat.id == cat_id;
      });
      return ct.name;
    },

    reduceText(text) {
      if (text.length > 50) {
        return text.substring(0, 50) + "...";
      } else {
        return text;
      }
    }
  }
};
</script>
  1
<style scoped>
#trending .mobile {
  display: none;
}

#trending .carousel-indicators {
  top: 13rem;
}

#trending .carousel-indicators li {
  margin: 0rem 1rem;
  background: #096dd9;
  border: 1px solid rgba(0, 0, 0, 0.15);
  opacity: 0.6;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

#trending .carousel-indicators li.active {
  margin: 0rem 1rem;
  background: #096dd9;
  border: 1px solid rgba(0, 0, 0, 0.15);
  opacity: 1;
  width: 8px;
  height: 8px;
  margin-top: -2px;
}

#trending .carousel-control-next {
  margin-top: 4.5rem;
  margin-right: -1.2rem !important;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

@media only screen and (max-width: 980px) {
  #trending .carousel-indicators li {
    width: 5px;
    height: 5px;
  }

  #trending .carousel-indicators li.active {
    width: 8px;
    height: 8px;
  }
}

#trending .carousel-control-next {
  margin-top: 4.5rem;
  margin-right: -1.5rem;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

#trending .icon .carousel-control-prev {
  margin-top: 4.5rem;
  margin-right: -1.5rem;
  border-radius: 50%;
  width: 38px;
  height: 38px;
}

#trending .carousel-control-next-icon,
.carousel-control-prev-icon {
  font-size: 10px;
  filter: none;
  font-size: 40rem !important;
}

#trending .carousel-control-prev {
  margin-top: 4.5rem;
  margin-left: -1.7rem;
  background-color: #000000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa; /*10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

#trending .carousel-control-next {
  margin-top: 4.5rem;
  margin-left: -1.7rem;
  background-color: #000000;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa; /*10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid #aaaaaa;
  filter: blur(0.5px);
}

#trending .carousel-control-next {
  margin-top: 4.5rem;
  margin-right: -1.5rem;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background-color: #dddddd;
  border: 1px solid #aaaaaa;
}

@media only screen and (max-width: 980px) {
  #trending .mobile {
    display: block;
  }

  #trending .desktop {
    display: none;
  }

  #trending .carousel-indicators {
    display: none;
  }

  #trending .carousel-inner {
    height: 100%;
  }

  #trending .carousel-control-next {
    margin-top: 4.5rem;
    margin-left: -1.7rem;
    background-color: #000000;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    background: #bdc3c7;
    background: -webkit-linear-gradient(
      to right,
      #2c3e50,
      #bdc3c7
    );
    background: linear-gradient(
      to right,
      #2c3e50,
      #bdc3c7
    );
    border: 1px solid #aaaaaa;
    border: 1px solid #aaaaaa;
    filter: blur(0.5px);
  }
}

@media only screen and (min-width: 300px) {
	#trending .card {
		height: 170px;
		margin-right: 0.8rem;
	}
	#trending .card .card-img-overlay {
		padding-top: 3rem;
	}
}
</style>
