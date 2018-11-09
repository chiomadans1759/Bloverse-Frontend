<template>
    <div class="layout">
      <Layout>
        <Content>
          <div class="landing-img">
            <section>
                <Header />
                <div class="head-content">
                  <h4>Interactive stories from the global community</h4>
                  <p class="second">Connecting creators to the people</p>         
                </div>
                <Icon class="dropdown-icon" type="android-arrow-dropdown-circle"></Icon>                       
            </section>
          </div>
          <Row class="section-1" type="flex" justify="space-around">
            <Col :sm="10" class="section-description">
                <h2> Get started on Bloverse</h2>
                <p> Bloverse was created with you in mind. Have you ever thought about creating a news blog but then balked at the thought of the effort required?. Well I have good news! At bloverse we leverage state of the art AI techniques to make your life easier and help you on the journey to being an elite content creator. With our journalist ranking system you can see how you rank compared to others in your circle. The ultimate objective of bloverse is to create a platform with high quality content creators based on feedback from an engaged community. 
                Excited? You should be! #PressPlay #JoinTheBloverse</p>
                <Button class="know" type="primary" ><router-link to="/creators/apply" id="getStarted">Get Started</router-link> </Button>
            </Col>
            <Col class="section-description" :sm="10">
                <iframe width="400" height="400"
                  src="https://www.youtube.com/embed/EjRM4DMdnGw">                           
               </iframe>
            </Col>
          </Row> 
          <Row class="section-2" type="flex" justify="space-around">
            <Col :sm="7" class="section-2-description">
              <Icon class="section-2-icon" type="ios-paper"></Icon>
              <h2>{{general.metrics.publishedPost}}</h2>
              <p> Article have been published</p>
            </Col>
            
            <Col :sm="7" class="section-2-description">
              <Icon class="section-2-icon" type="ios-create" md="md-create"></Icon>
              <h2>{{general.metrics.journalists}}</h2>
              <p> Content providers have joined </p>
            </Col>

            <Col :sm="7" class="section-2-description">
                <Icon class="section-2-icon" type="ios-people"></Icon>
                <h2>{{general.metrics.views.total}}</h2>
                <p>Unique visitors have accessed the site </p>
            </Col>
          </Row>
                     <!-- <Row class="section-3" type="flex" justify="space-around">
                        <div class="section-3-header"> <span class="underline">Top Journalists</span> </div> 
                            <i-Col span="6" class="section-3-content">
                                <img src="images/person1.jpeg" width=100px height=100px>
                                <h2> White Guy </h2>
                                <p> description</p>
                            </i-Col>
                            <i-Col span="6" class="section-3-content">
                                    <img src="images/person2.jpeg" width=100px height=100px>
                                    <h2> White Lady </h2>
                                    <p> description</p>
                            </i-Col>
                            <i-Col span="6" class="section-3-content">
                                    <img src="images/person4.jpeg" width=100px height=100px>
                                    <h2> Black Guy </h2>
                                    <p> description</p>
                            </i-Col>
                        </Row>   -->
          <Row class="section-4" type="flex" justify="space-around" >
            <Col class="map-section" span="20">
              <span class="underline"> Active Regions</span>
                  <GChart
                    type="GeoChart"
                    :data="chartData"
                    :options="chartOptions"
                    id="maps"
                  />
            </Col>
          </Row> 
        </Content>
      </Layout>
    </div>
  <!-- </WithFooter> -->
  
</template>

<script>
import { Button, Modal, Layout, Icon, Row, Content, Col } from "iview";
// import WithFooter from '../../layouts/WithFooter';
import { mapState, mapActions, mapGetters } from 'vuex';
import { page } from 'vue-analytics';
import { GChart } from 'vue-google-charts';
import Header from '@/components/HeaderGeneral'


export default {
  components: { Button, Modal, Layout, Icon, Row, Content, Col, Header, GChart },
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Country', 'views',],
        ['Nigeria', 65],
        ['Kenya', 10],
        ['France', 11],
        ['India', 3]
      ],
      chartOptions: {
        chart: {
          title: 'Country Views'
        }
      }
    }
  },
  computed: {
    ...mapState([
      'general'
    ])
  },
  methods: {
    ...mapActions([
      'getGeneralMetrics'
    ])
  },
  mounted:
    async function(){
    await this.getGeneralMetrics();
  }
};
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }

  .landing-img {
    background: url("https://res.cloudinary.com/aolfiligre/image/upload/v1533747277/pjimage_1.jpg") no-repeat;
    width: 100%;
    height:600px; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: scroll; 

  }

  .landing-img > section{
    color: #FFFFFF;
    padding-top: .4rem; 
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .dropdown-icon {
    font-size: 35px;
    margin-top: 6%;
  }

  

  #maps {
   top: 10%;
   left: 10%; 
   width: 700px; 
   height: 500px;
   position: relative;
  }

  @media screen and (max-width: 680px){
    #maps {
      width: 350px; 
      top: 0%;
      left: 0%;
      position: relative;
    }
  }

  @media screen and (min-width: 681px)  and (max-width: 780px){
    #maps {
      width: 600px;
      top: 0%;
      left: 0%; 
      position: relative;
    }
  }

  .head-content {
    font-size: 16px;
  }

  .head-content h4{
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
  .head-content .second{
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
    margin-top: 1rem;
  }

  .section-1 {
    padding-top: 40px;
    padding-bottom: 40px;
    /* border:1px solid green; */
    background: white;
  }
  .section-description {
    /* border:1px solid yellow; */
    margin: auto;
    padding: 20px;
  }

  /* /* .section-description > button {
    margin-top: 20px;
    width: 7rem; 
  } */

  .know {

  padding-left:20px;
  padding-right:20px;
  margin-top: 30px;   


  }

  .section-description > h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  iframe {
    width: 100%;
    height: 27rem;
    border: none;
  }

  .section-2-description {
    padding: 20px;
    text-align: center;
    height: 100%;
    height: 100%;
  }
  .section-2 {
    color: white;
    height: 100%;
    padding: 20px;
    background: linear-gradient(to right, #2d9cdb 0%, #56ccf2 100%);
  }

  .section-2-icon {
    font-size: 45px;
  }

  .section-2-description > h2 {
    margin-top: 6px;
    font-size: 48px;
    margin-bottom: 6px;
  }

  .section-2-description > p {
    font-size: 18px;
  }

  .section-3 {
    text-align: center;
    background: #e5e5e5;
    /* color: white; */
    /* padding-bottom: 30px; */
    /* padding-top: 20px; */
    /* padding: 20px 20px 30px 30px; */
  }

  .underline {
    text-decoration: none;
    position: relative;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }

  .underline:after {
    right: 0;
    position: absolute;
    content: "";
    width: 60%;
    height: 3px;
    bottom: -4px;
    left: 0;
    margin: 0 auto;
    background: #2f80ed;
  }

  .auth {
    background: transparent;
    padding: 5px 30px 5px 30px;
    border-radius: 20px;
    border: 2px solid #fff;
  }

  .auth1 {
    background: #2f80ed;
    color: #FFFFFF;
    padding: 5px 30px 5px 30px;
    border-radius: 20px;
    border: 2px solid #2f80ed;
  }
  .section-3-header {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .section-3-content > img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .section-3-content > h2 {
    margin-top: 30px;
    margin-bottom: 0rem;
    font-size: 24px;
  }

  .section-3-content > p {
    margin-bottom: 30px;
  }

  .section-4 {
    /* border: 1px solid green; */
    width: 100%;
    padding: 20px;
    height: 500px;
    background: white;
    /* background: #E5E5E5; */
    text-align: center;
  }
  .map-section {
    /* border: 1px solid green; */
    background: white;
    border-radius: 4px;
  
  }
  
  #getStarted {
    color: #fff;
  }

</style>
