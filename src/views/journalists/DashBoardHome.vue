<template>
  <div>
    <h3 class="page_intro_name">Dashboard</h3>
    <Row :gutter="32" id="stat-wrapper">
      <Col :sm="8">
        <stat-card variant="fade" title="views" id="stat-point1" :stats="{ key:[ views.today, views.week, views.total] ,value:['Today' , 'This Week' ,'Articles']}" />
      </Col>
      <Col :sm="8">
        <stat-card variant="primary" title="published" id="stat-point2" :stats="{ key:[articles.today, articles.week,  articles.total ] , value:[ 'Today' ,'This Week' ,'Articles']}" />
      </Col>
      <Col :sm="8">
      <!-- {{views}} -->
        <stat-card variant="secondary" title="points" id="stat-point3" :stats="{ key:[`${datas.categoryRank[0]} of ${datas.categoryRank[1]}`, `${datas.countryRank[0]} of ${datas.countryRank[1]}` , `${datas.point}`] , value:['Category' ,'Country' , 'Ranking']}" />
      </Col>
    </Row>

    <Row :gutter="32">
      <Col :sm="16">
        <Card id="map-card">
          <h2 slot="title" class="title">Total Visits</h2>
          <span slot="extra">
            <ion-icon name="add" id="extra-icon"></ion-icon>
            <ion-icon name="remove" id="extra-icon"></ion-icon>
            <!-- Zoom out and zoom in for map -->
          </span>
          <Row :gutter="16" id="select-wrapper">
            <Col span="8">
              <Select placeholder="Region" v-model="region">
                <Option >No item yet</Option>
              </Select>
            </Col>
            <Col span="8">
              <Select placeholder="Subregion" v-model="subRegion">
                <Option >No item yet</Option>
              </Select>
            </Col>
            <Col span="8">
              <Select placeholder="Country" v-model="country">
                <Option >No item yet</Option>
              </Select>
            </Col>
          </Row>
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
      <Col :sm="8">
        <Card id="trending-card">
          <h2 slot="title" class="title">Trending</h2>
              <Row type="flex" justify="space-around">
            <Col span="10">
              <Select v-model="categories" placeholder="Categories" id="categories">
                <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{item.name}}</Option>
              </Select>
            </Col>
            <Col span="10">
              <Select v-model="country" placeholder="Country" id="country">
                <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{item.name}}</Option>
              </Select>
            </Col>
          </Row>
          <Row type="flex" :gutter="16" justify="left" id="entities-wrapper">
            <Col :sm="4" class="entity" v-for="i in 9" :key="i">
              <router-link to="/entity">
                <Avatar src="https://res.cloudinary.com/naera/image/upload/v1530033169/bloverse/ca6df9c3826fa48bf487c553b4a8fb62.jpg" />
                <p>Drake</p>
              </router-link>
            </Col>

          </Row>
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
    Icon
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
  }
};
</script>


<style scoped>
#stat-wrapper {
  margin-bottom: 30px;
  color: #828282;
}

.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #9da19c;
}

#trending-card {
  height: 450px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

#map-card {
  height: 450px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

#select-wrapper {
  width: 80%;
  margin: auto !important;
}

#map-wrapper {
  /* margin-top: 20px; */
  height: 250px;
  margin: 20px auto;
  width: 400px;
}

#entities-wrapper {
  width: 98%;
  margin: auto !important;
  /* padding-left: 8px; */
}

#stat-point2 {
  color: #2f80ed;
}

#stat-point3 {
  color: #6fcf97;
}
#stat-point1 {
  color: #56ccf2;
}

#extra-icon {
  font-size: 17px;
  font-weight: 700;
  color: #2f80ed;
  margin-left: 10px;
  border: 2px solid #2f80ed;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
}
.entity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page_intro_name {
  /* margin-top:3%; */

  margin-top: 3%;
  font-weight: 100;
  font-size: 18px;
  margin-bottom: 1%;
}

.entity-pix {
  width: 25%;
  height: 60px;
  margin-top: 20px;
}

.entity .ivu-avatar {
  height: 60px;
  width: 60px;
  margin-top: 20px;
  border-radius: 40px;
  margin-right: 8px;
  margin-left: 8px;
}

.entity p {
  text-align: center;
}

.map {
  height: 100%;
  max-width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.stat-info {
  width: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
}

.stat-info > p {
  margin: 0;
  padding: 0;
}

.stat-info .country {
  font-weight: bold;
}
.stat-card {
  padding: 29px !important;
  height: 180px;
  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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
</style>
