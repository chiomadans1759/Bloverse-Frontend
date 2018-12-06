<template>
  <div>
    <h3 class="page_intro_name">Dashboard</h3>
    <Row :gutter="32" id="stat-wrapper" v-if="show">
      <Col :sm="8" :xs="24">
        <stat-card variant="fade" title="views" id="stat-point1" :stats="{ key:[ views.today, views.week, views.total] ,value:['Today' , 'This Week']}" />
      </Col>
      <Col :sm="8" :xs="24">
        <stat-card variant="primary" title="published" id="stat-point2" :stats="{ key:[articles.today, articles.week,  articles.total ] , value:[ 'Today' ,'This Week' ,'Articles']}" />
      </Col>
      <Col :sm="8" :xs="24">
        <stat-card variant="secondary" title="points" id="stat-point3" :stats="{ key:[`${datas.categoryRank[0]} of ${datas.categoryRank[1]}`, `${datas.countryRank[0]} of ${datas.countryRank[1]}` , `${datas.point}`] , value:['Category' ,'Country' , 'Ranking']}" />
      </Col>
    </Row>

    <Row :gutter="32" v-if="show" type="flex" justify="center">
      <Col :sm="16" :xs="24">
        <Card id="map-card">
          <div class="map-stat">
            <div class="map-stat-keys">
              <h4 class="stat-header">Views</h4>
              <p v-for="(data, index) in chartData" 
              :key="index" 
              v-if="index > 0">
              <span> {{ data[0] }} </span>
              </p>
              <p class="map-stat-total">Total</p>
            </div>
            <div class="map-stat-values">
              <div class="blue-icon"></div>
              <p v-for="(data, index) in chartData" 
              :key="index" 
              v-if="index > 0">
              <span>{{ data[1] }}</span>
              </p>
              <p class="map-stat-total-num">{{ chartData.filter((e, i) => i !== 0).reduce((acc, a) => acc + a[1], 0) }}</p>
            </div>
          </div>
          <div id="map-wrapper">
            <GChart
              type="GeoChart"
              :data="chartData"
              ref="chartData"
              :resizeDebounce="500"
              :width="100"
            />
          </div>
        </Card>
      </Col>
    </Row>
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
      categories: '',
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
#stat-wrapper {
  margin-bottom: 6rem;
  color: #828282;
}

#map-card {
  height: 40rem;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.map-stat {
  width: 22rem;
  height: auto;
  background-color: #F5F5F5;
  position: absolute;
  right: 1.25rem;
  top: 0.9375rem;
  border-radius: 0.5rem;
  padding: 2rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}

.stat-header {
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 1rem;
}

.blue-icon {
  width: 1rem;
  height: 1rem;
  background-color: #096DD9;
  border-radius: 100%;
  margin-bottom: 1.5rem;
}

.map-stat-values {
  color: #096DD9;
  font-size: 1.5rem;
  font-weight: bold;
}

.map-stat-total {
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;
}

.map-stat-total-num {
  margin-top: 2rem;
}

#map-wrapper {
  height: 25rem;
  margin: 1.25rem auto;
  width: 50rem;
}

#stat-point2 {
  color: #FFFFFF;
  background-image: linear-gradient(to right ,#840000, #B10B0B);
  display: flex;
  flex-direction: column;
}

#stat-point3 {
  color: #FFFFFF;
  background-image: linear-gradient(to right, #087700,  #368700);
  display: flex;
  flex-direction: column;
}

#stat-point1 {
  color: #FFFFFF;
  background-image: linear-gradient(to right, #087700,  #368700);
  display: flex;
  flex-direction: column;
}

.page_intro_name {
  margin-top: 3%;
  font-weight: 100;
  font-size: 2rem;
  margin-bottom: 1%;
}

.stat-card {
  padding: 1.8125rem !important;
  height: 20rem;
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
}

@media screen and (max-width: 360px) {
#stat-wrapper stat-card{
width:100%
}
#map-card{
  display: none;
 border:1px solid blue
}

}
  @media screen and (max-width: 600px) {
#stat-wrapper stat-card{
  width:100%
}
#map-card{
  display:none;
  border:1px solid blue
}
}
</style>
