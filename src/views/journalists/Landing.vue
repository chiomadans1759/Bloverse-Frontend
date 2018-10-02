<template>
  <WithFooter>
    <div class="layout">
      <Layout>
        <Content>
          <div class="landing-img">
            <section>
                <Row class="header-row" type="flex" justify="space-between" align="middle">
                  <Col class="brand">
                    <router-link to="/"><img class="logo" src="https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png" ></router-link>
                  </Col>
                  <Col class="header-button">
                    <!--<Button ghost shape="circle"  @click="displayModal=true">Sign-in</Button>-->
                    <router-link to="/journalist/apply" class="auth">Register</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <router-link to="/journalist/login" class="auth">Login</router-link>

                    <!--<Button class="btn register" type="default" shape="circle" @click="displayModal=true" ghost>Register</Button>
                    <Button class="btn login" type="primary" shape="circle"  @click="displayModal=true">Login</Button>-->
                  </Col>
                </Row>
                <div class="head-content">
                  <h4>Interactive stories from the global community</h4>
                  <p class="second">Connecting jounalists to the people</p>         
                </div>
                <Icon class="dropdown-icon" type="android-arrow-dropdown-circle"></Icon>                       
            </section>
          </div>
          <Row class="section-1" type="flex" justify="space-around">
            <Col :sm="10" class="section-description">
                <h2> Get started on Bloverse</h2>
                <p> Bloverse was created with you in mind. Have you ever thought about creating a news blog but then balked at the thought of the effort required?. Well I have good news! At bloverse we leverage state of the art AI techniques to make your life easier and help you on the journey to being an elite content creator. With our journalist ranking system you can see how you rank compared to others in your circle. The ultimate objective of bloverse is to create a platform with high quality content creators based on feedback from an engaged community. 
                Excited? You should be! #PressPlay #JoinTheBloverse</p>
                <Button class="know" type="primary" >Get Started </Button>
            </Col>
            <Col class="section-description" :sm="8">
                    <iframe width="400" height="200"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">                                        </iframe>
            </Col>
          </Row> 
          <Row class="section-2" type="flex" justify="space-around">
            <Col :sm="7" class="section-2-description">
              <Icon class="section-2-icon" type="ios-paper"></Icon>
              <h2>53082</h2>
              <p> Article have been publish </p>
            </Col>
            
            <Col :sm="7" class="section-2-description">
              <Icon class="section-2-icon" type="ios-create" md="md-create"></Icon>
              <h2>154</h2>
              <p> Content providers have joined </p>
            </Col>

            <Col :sm="7" class="section-2-description">
                <Icon class="section-2-icon" type="ios-people"></Icon>
                <h2>1785698</h2>
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
              <div class="imap">
                  <div ref="bubbles" style=" margin-top: -70px; width: 100%; height: 100%;"></div>
              </div>  
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  </WithFooter>
  
</template>

<script>
import { Button, Modal, Layout, Icon, Row, Content, Col } from "iview";
import WithFooter from '../../layouts/WithFooter';
import {page} from 'vue-analytics';


export default {
  components: { Button, Modal, Layout, Icon, Row, Content, Col, WithFooter },

  data: function() {
    return {
      displayModal: false,
      signingUp: false,
      processing: false
    };
  },
  methods: {
    // show: function () {
    //     this.visible = true;
    // }
  }, 
  mounted:function(){
    let mapp = this.$refs.bubbles;
    var bubble_map = new Datamap({
      element: mapp,
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true
      },
      fills: {
        defaultFill: '#ABDDA4',
        USA: 'blue',
        CAN: 'yellow',
        NIG: 'purple',
        ITA: 'orange',
        RUS: 'red'
      }
  });
  bubble_map.bubbles([
    {
      name: 'Journalist',
      radius: 5,
      centered: 'BRA',
      country: 'Brazil',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'EGY',
      country: 'Egypt',
      number: 30,
      fillKey: 'CAN',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'FRA',
      country: 'France',
      number: 30,
      fillKey: 'NIG',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'IND',
      country: 'India',
      number: 30,
      fillKey: 'ITA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'ITA',
      country: 'Italy',
      number: 30,
      fillKey: 'RUS',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'MLI',
      country: 'Mali',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'MLT',
      country: 'Malta',
      number: 30,
      fillKey: 'CAN',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'ZMB',
      country: 'Zambia',
      number: 30,
      fillKey: 'NIG',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'QAT',
      country: 'Qatar',
      number: 30,
      fillKey: 'ITA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'USA',
      country: 'United State of America',
      number: 30,
      fillKey: 'RUS',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'MCO',
      country: 'Mexico',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'ARG',
      country: 'Argentina',
      number: 30,
      fillKey: 'CAN',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'BEL',
      country: 'Belgium',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'BRA',
      country: 'Brazil',
      number: 30,
      fillKey: 'RUS',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'RUS',
      country: 'Russia',
      number: 30,
      fillKey: 'ITA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'FJI',
      country: 'Fiji',
      number: 30,
      fillKey: 'NIG',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'FIN',
      country: 'Finland',
      number: 30,
      fillKey: 'CAN',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'GEO',
      country: 'Georgia',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'KEN',
      country: 'Kenya',
      number: 30,
      fillKey: 'RUS',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'KWT',
      country: 'Kuwait',
      number: 30,
      fillKey: 'ITA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'BOL',
      country: 'Bolivia',
      number: 30,
      fillKey: 'NIG',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'MNE',
      country: 'Mongolia',
      number: 30,
      fillKey: 'CAN',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'AUS',
      country: 'Australia',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'GRL',
      country: 'GreenLand',
      number: 30,
      fillKey: 'RUS',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'PER',
      country: 'Peru',
      number: 30,
      fillKey: 'ITA',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'RWA',
      country: 'Rwanda',
      number: 30,
      fillKey: 'NIG',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'COG',
      country: 'Congo',
      number: 30,
      fillKey: 'CAN',
    },
    {
      name: 'Journalist',
      radius: 5,
      centered: 'MAR',
      country: 'Morocco',
      number: 30,
      fillKey: 'USA',
    },
    {
      name: 'Journalists',
      radius: 5,
      number: 10,
      country: 'Canada',
      centered: 'CAN',
      fillKey: 'ITA'
    }
  ], {
    popupTemplate: function(geo, data) {
      return '<div class="hoverinfo">' + data.number + ' Journalists in '  + data.country + ''
    }
  })
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

  .header-row{
    width: 90%;
    margin: 0 auto;
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

  .logo {
  height:90px;
  margin-left: 2em;
  }

  .header-button {
    font-size: 14px;
  }

  .header-button .btn {
    width: 9em;
    font-size: 1em;
  }

  .register {
    
    border: 2px solid;
    margin-right: 2em;
    

  }
  .login {
    margin-left: 2em;
    border: 2px solid #2d8cf0;
  }

  .imap {
    position: relative; 
    margin:0 auto; 
    width: 700px; 
    height: 500px;
  }

  @media screen and (max-width: 680px){
    .imap {
      width: 350px; 
    }
  }

  @media screen and (min-width: 681px)  and (max-width: 780px){
    .imap {
      width: 600px; 
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
    height: 17rem;
    border: none;
  }

  .section-2-description {
    padding: 20px;
    text-align: center;
    height: 100%;
    /* border: 1px solid green; */
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
    margin-top: 50px;
  }

</style>
