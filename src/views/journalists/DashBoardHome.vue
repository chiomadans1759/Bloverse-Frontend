<template>
  <div id="journalist-dashboard">
     <div class="sidebar-header">
        <router-link to="/" class="router-link">
          <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
        </router-link>
      </div>
    <div class="container pt-5" style="margin-left: -3rem;">
      <Row :gutter="32" v-if="show" id="stats">
        <Col :sm="8" :xs="24" id="icon-fix">
          <stat-card variant="fade" icon="fal fa-eye" title="views" id="stat-point1" :stats="{ key:[ views.today, views.week, views.total] ,value:['Today' , 'This Week']}" />
        </Col>
        <Col :sm="8" :xs="24" id="icon-fix">
          <stat-card variant="primary" icon="fal fa-rocket" title="published" id="stat-point2" :stats="{ key:[articles.today, articles.week,  articles.total ] , value:[ 'Today' ,'This Week' ,'Articles']}" />
        </Col>
        <Col :sm="8" :xs="24" id="icon-fix">
          <stat-card variant="secondary" icon="fal fa-star" title="points" id="stat-point3" :stats="{ key:[`${datas.categoryRank[0]} of ${datas.categoryRank[1]}`, `${datas.countryRank[0]} of ${datas.countryRank[1]}` , `${datas.point}`] , value:['Category' ,'Country' , 'Ranking']}" />
        </Col>
      </Row>
      <div class="show-map">
      <div class="row" v-if="show">
        <div class="col-md-8">
          <GChart
            type="GeoChart"
            :data="chartData"
            ref="chartData"
            style="width: 75%;"/>
        </div>

        <div class="col-md-4">
          <h3 class="text-uppercase mb-3">Views <span id="blue-c"></span></h3>

          <ul class="list-group">
            <li class="list-group-item rounded-0">
              <div class="row">
                <div class="col">
                  <p v-for="(data, index) in chartData" 
                    :key="index" 
                    v-if="index > 0"
                    style="font-size: 14px;" class="mb-2">
                    <span> {{ data[0] }} </span>
                  </p>
                </div>

                <div class="col-auto">
                  <p v-for="(data, index) in chartData" 
                    :key="index" 
                    v-if="index > 0" class="mb-3">
                    <span>{{ data[1] }}</span>
                  </p>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col">
                  <h4>TOTAL</h4>
                </div>

                <div class="col-auto">
                  <p>{{ chartData.filter((e, i) => i !== 0).reduce((acc, a) => acc + a[1], 0) }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Row, Col, Card, Select, Option, locale, Avatar, Icon } from "iview";
import { mapActions, mapGetters, mapState } from "vuex";
import lang from "iview/dist/locale/en-US";
import { GChart } from "vue-google-charts";
import { Carousel, Slide } from 'vue-carousel';
import DashboardStatDisplayCard from "../../components/JournalistStatDisplayCard.vue";
// configure language
locale(lang);

export default {
  components: {
    Row,
    Col,
    Card,
    Select,
    Option,
    Avatar,
    GChart,
    StatCard: DashboardStatDisplayCard,
    Icon,
    Carousel, 
    Slide
  },
  data(){
    return {
      show: false,
      region: '',
      subRegion: '',
      country: '',
      categories: ''
    }
  },
  computed: {
    ...mapState(["general"]),
    chartData() {
      let newData = [["Country", "views"]];
      let countries = this.views.countries;
      Object.keys(countries).forEach(country => {
        newData.push([country, countries[country]]);
      });

      return newData;
    },
    ...mapGetters(["views", "articles", "datas"])
  },
  methods: {
    ...mapActions(["getMyMetrics"])
  },
  mounted: async function() {
    await this.getMyMetrics();
    this.show = true;
  }
};
</script>


<style scoped>
#journalist-dashboard #stats {
  margin-bottom: 3rem;
}

#journalist-dashboard #stats #icon-fix {
  overflow: hidden;
}

.sidebar-header {
  display: none;
}

#journalist-dashboard #stats .stat-card {
  padding: 1.8125rem !important;
  -webkit-box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3125rem;
  background-color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 0.7rem;
  overflow: hidden;
}

#blue-c:before {
  content: ' \25CF';
  font-size: 20px;
  margin-left: 2rem;
  color: #096DD9;
}

#journalist-dashboard #stats #stat-point1 {
  color: #FFFFFF;
  background-image: linear-gradient(to right top, #4db6ac, #37a991, #2a9b73, #298c54, #2e7d32);
  width: 314px ;
  height: 166px;
  bottom: 0;
}

#journalist-dashboard #stats #stat-point2 {
  color: #FFFFFF;
  background-image: linear-gradient(to right top, #b10b0b, #c4190b, #d82509, #eb3106, #ff3d00);
  overflow: hidden;
  width: 314px ;
  height: 166px;
}

#journalist-dashboard #stats #stat-point3 {
  color: #FFFFFF;
  background-image: linear-gradient(to right top, #4db6ac, #37a991, #2a9b73, #298c54, #2e7d32);
  width: 314px;
  height: 166px;
}

#journalist-dashboard .list-group .list-group-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 360px) {
  #stat-wrapper stat-card {
    width:100%;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 600px) {
  #stat-wrapper stat-card {
    width:100%;
    margin-bottom: 1rem;
  }

  .show-map {
    display: none;
  }

  #icon-fix {
    margin-bottom: 1rem;
  }

  #stats {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    text-align: center;
    margin-left: -5rem;
  }

  .sidebar-header {
  display: block;
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-bottom: -3rem;
}
}
</style>
