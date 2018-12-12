<template>
  <div class="layout" id="journalist-landing">
    <Layout>
      <Content>
        <div>
					<HeaderGeneral/>
          <Row class="container1">
            <Col :md="12" :sm="0" :xs="0" class="left">
              <Col offset="3" :md="20" :sm="14" :xs="16" class="left-contain">
                <h1>Interactive stories from the global community</h1>
                <p>Connecting creators to the people</p>
                <button>GET STARTED</button>
              </Col>
            </Col>

            <Col :md="12" :sm="24" :xs="24" class="right">
              <img :src="require('./../../assets/jlanding.jpg')" alt="Journalists Landing">
              <Col offset="1" :md="0" :sm="22" :xs="22" class="right-text">
                <h1>Interactive stories from the global community</h1>
                <p>Connecting creators to the people</p>
                <button>GET STARTED</button>
              </Col>
            </Col>
          </Row>
 
          <Row class="container2">
            <Col :md="12" :sm="10" :xs="24" class="left2">
                <Col offset="2" :md="14" :sm="22" :xs="20" class="left-contain2">  
                <a href="https://www.youtube.com/embed/EjRM4DMdnGw" class="video-btn popup-youtube">
                  <img src ="./../../assets/video-image.jpg"/>              
                  <button class="pulse-button"><i class="far fa-play-circle"></i></button>
                </a>
                <div id="video-overlay" class="video-overlay">
                  <a class="video-overlay-close"></a>
                </div>
                </Col>
            </Col>

            <Col :md="12" :sm="14" :xs="24" class="right2">
              <Col offset="2" :md="12" :sm="20" :xs="20" class="right-contain2">
                <h2>About Us</h2>
                <p>Bloverse was created with you in mind. Have you ever thought of creating a news blog but then balked at the thought of the effort.</p>
                <router-link to="#" style="font-family: 'Montserrat', sans-serif;">Know More</router-link>
              </Col>
            </Col>
          </Row>

          <Row class="container3">
            <Col :md="8" :sm="8" :xs="24">
              <h3>{{general.metrics.publishedPost}}</h3>
              <p>ARTICLES POSTED</p>
            </Col>
            <Col :md="8" :sm="8" :xs="24" class="center">
              <h3>{{general.metrics.journalists}}</h3>
              <p>CONTENT PROVIDERS</p>
            </Col>
            <Col :md="8" :sm="8" :xs="24" v-if="show">
              <h3>{{general.metrics.views.total}}</h3>
              <p>VISITORS</p>
            </Col>
          </Row>
          <TheFooter/>
        </div>
      </Content>
    </Layout>
  </div>
</template>

<script>
import {
  Button,
  Row,
  Col,
  Icon,
  Input,
  Form,
  Content,
  Layout,
  Header
} from "iview";
import { mapState, mapActions } from "vuex";
import HeaderGeneral from "../../components/HeaderGeneral.vue";
import TheFooter from "../../components/TheFooter.vue";

export default {
  components: {
    Button,
    Row,
    Col,
    Icon,
    Input,
    Form,
    Content,
    Layout,
    Header,
    HeaderGeneral,
    TheFooter
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapState(["general"])
  },
  methods: {
    ...mapActions(["getGeneralMetrics"])
  },
  mounted: async function() {
    await this.getGeneralMetrics();
    this.show = true;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Comfortaa|Montserrat");

#journalist-landing {
  font-family: "Comfortaa", cursive;
}

.container1 {
  width: 100%;
  display: flex;
  margin: 0;
  height: 80vh;
}

.left {
  background-image: linear-gradient(rgb(2, 9, 110), rgba(4, 37, 128));
}

.left-contain {
  margin-top: 12%;
}

.left h1 {
  color: #ffffff;
  letter-spacing: 3px;
  padding: 2rem 0 1rem;
  line-height: 1.5;
  font-weight: 200;
  opacity: 0.9;
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  margin: 2rem 8rem 0rem 2rem;
}

.left p {
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
	font-size: 14px;
  opacity: .7;
	margin-bottom: 1rem;
  margin-left:2rem;
}

.left button {
  border-radius: 2px;
  color: rgb(12, 54, 243);
  border: none;
  padding: 0.5rem 1rem;
  background-color: #fff;
  margin-top: 2rem;
  margin-left:2rem;
  font-family: "Montserrat", sans-serif;
}

.right {
  background-color: #000;
  height: 100%;
}

.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50%;
  position: absolute;
  opacity: 0.5;
  background-size: cover;
  border-radius: 10px;
  top: 0;
}

.container2 {
  display: flex;
  background-color: rgb(230, 221, 221);
}


.right2 {
  height: 50vh;
}

.right-contain2 {
  margin-top: 14%;
}

.right-contain2 p {
  font-size: 15px;
  margin: 2rem 0;
  font-family: "Montserrat", sans-serif;
}
.right-contain2 h2 {
    font-weight: 600;
  }
.left-contain2 {
  margin-top: 8%;
  height: 80%;
  float: right; 
  display: block;
  overflow: hidden;
  border-radius: 12px; 
}
.left2 img {
  width: 100%; 
  height: 100%;  
  border: none;
  object-fit: cover;  
  object-position: 50%;
  position: absolute; 
  background-size: cover; 
  top: 0;
}

.container3 {
  display: flex;
  background-color: rgb(230, 221, 221);
  height: fit-content;
}

.container3 h3 {
  font-size: 2rem;
  line-height: 2;
  color: black;
  font-weight: 600;
  opacity: 6;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

.container3 p {
  font-family: "Montserrat", sans-serif;
  font-size: .8rem;
  line-height: 1;
  color: black; 
  text-align: center;
}

.container3 > div {
  margin:6rem 0;
}

.center {
  border-right: 2px solid #ccc;
  border-left: 2px solid #ccc;
}

.fa-play-circle{
  color:#fff;
  font-size:2rem;
}
.pulse-button {
  position: absolute;
  width: 5rem;
  height: 5rem;
  top:38%;
  left:38%;
  border: none;
  box-shadow: 0 0 0 0 rgb(42, 120, 238);
  border-radius: 50%;
  background-color:rgb(51, 127, 240);
  /* background-image: linear-gradient(rgb(2, 9, 110), rgba(4, 37, 128));  */
  background-size:cover;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover 
{
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
 
@media screen and (max-width: 840px) {
  .pulse-button {
  position: absolute;
  width: 4rem;
  height: 4rem;
  top:34%;
  left:38%;
  }
  .right-text {
		margin-top: 30%;
    text-align:center; 
	}
	.container1{
    height:70vh;
  }
  .right-text h1 {
		font-size: 1.85rem; 
		color: #ffffff;
	}
	
  .right-text p {
		font-size: 16px;
		margin-top: 1rem;
		color: #cccccc;
	}
	
  .right-text button {
    border-radius: 2px;
    color: rgb(12, 54, 243);
    border: none;
    padding: 0.6rem 1rem; 
    margin-top: 2rem;
  }
  .right2 {
    height: 30vh;
  }
  .right-contain2 {
    margin-top: 7%;
  } 
  .container3 > div {
    margin: 1rem 0 5rem 0;
  }
  .container3 p{
    font-size:.7rem;
  }
}
@media screen and (max-width: 603px) {

.container3 {
  flex-direction:column;
  padding-bottom:6rem;
  }
.center {
  border:none;
}
.right-text {
    margin-top: 50%;
	}
	
.left {
    display: none;
	}
.right2 {
   height: 26vh;
   height: fit-content;
   order:1;
}
.left2 {
    order:2;
  }
.right-text h1 {
  font-size: 1.6rem;
  color: #ffffff;
	}
	
  .right-text p {
		font-size: .9rem;
		margin-top: 1rem;
		color: #cccccc;
	}
	
  .container2 {
    flex-direction: column;
  }
  
  .left-contain2 {
    float: left;
    height:30vh;
  }
  .container3 > div {
    margin: 1rem 0 1rem 0;
  }
  /* .container3 h3 {
    font-size: 1.2rem;
  }
  .container3 p {
    font-size: .5rem;
  } */
  .right-contain2 {
    margin-top: 7%;
    height: fit-content;
  }
  .right-contain2 p {
    font-size: .8rem;
    margin: 1rem 0;
  }
}
  @media screen and (max-width: 322px) {
    .right-contain2 p {
      font-size: .75rem;
      margin: 0.5rem 0;
    }
    .right-contain2 h2 {
      font-size: 1.3rem;
    }
    .right-text {
      margin-top: 50%;
    }
    .left {
      display: none;
    } 
    .right2 {
    height: 30vh;
    }
  .right-text p {
    font-size: 12px; 
    }
  }

</style>
