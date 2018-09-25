<template>
  <div>
    <Row :gutter="32" id="stat-wrapper">
      <Col :sm="8">
        <stat-card variant="fade" title="views" :stats="{ today: 30, week: 250, total: 12800 }" />
      </Col>
      <Col :sm="8">
        <stat-card variant="primary" title="published" :stats="{ today: 30, week: 250, total: 1670 }" />
      </Col>
      <Col :sm="8">
        <stat-card variant="success" title="points" :stats="{ today: 2, week: 10, total: 200 }" />
      </Col>
    </Row>

    <Row :gutter="32">
      <Col :sm="16">
        <Card id="map-card">
          <h2 slot="title" class="title">Total Visits</h2>
          <span slot="extra">
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
            <div ref="activityMap" class="map"></div>
          </div>
        </Card>
      </Col>
      <Col :sm="8">
        <Card id="trending-card">
          <h2 slot="title" class="title">Trending</h2>
               <Row type="flex" justify="space-around">
            <Col span="10">
              <Select placeholder="Region" v-model="region">
                <Option >Entertainment</Option>
              </Select>
            </Col>
            <Col span="10">
              <Select placeholder="Subregion" v-model="subRegion">
                <Option >Nigeria</Option>
              </Select>
            </Col>
          </Row>
          <Row type="flex" :gutter="16" justify="center" id="entities-wrapper">
            <Col class="entity" v-for="i in 9" :key="i">
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
  import { Row, Col, Card, Select, Option, locale, Avatar, Icon } from 'iview';
  import DashboardStatDisplayCard from '../../components/JournalistStatDisplayCard.vue';
  import lang from 'iview/dist/locale/en-US';

  // configure language
  locale(lang);

  
  export default {
    components: {
      Row, Col, Card, Select, Option, Avatar, 
      StatCard: DashboardStatDisplayCard,
      Icon
    },
    data: function(){
      return {
        region: '',
        subRegion: '',
        country: '',
      }
    },
    mounted: function(){
      let mapElement = this.$refs.activityMap;
      var map = new Datamap({element: mapElement,
        fills: {
          defaultFill: '#C4C4C4',
        },
        geographyConfig: {
          highlightFillColor: '#2F80ED',
          highlightBorderColor: '#2F80ED',
          highlightBorderWidth: 4,
          highlightBorderOpacity: 2,
          popupTemplate: function(geography, data) { //this function should just return a string
          return '<div class="hoverinfo stat-info"><p class="country"><strong>' + geography.properties.name + '</strong></p><p class="views">1200 page views</p></div>';
        },
        }
      });
    }
  } 
</script>


<style scoped>

  #stat-wrapper {
    margin-bottom: 30px;
  }

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    font-size: 24px;
    color: #828282;
  }

  #trending-card {
    height: 450px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow:hidden;
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
    margin-top: 20px;
    height: 300px;
  }

  #entities-wrapper {
    width: 98%;
    margin: auto !important;
    /* padding-left: 8px; */
  }

  .entity{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .entity-pix{
    width:25%;
    height:60px;
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
    overflow:hidden;
  }

  .stat-info {
    width: 120px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 2px;

  }

  .stat-info > p{
    margin: 0;
    padding: 0;
  }

  .stat-info .country {
    font-weight: bold;
  }



</style>
