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
                <iframe src="https://www.youtube.com/embed/EjRM4DMdnGw"></iframe>
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
            <Col :md="8" :sm="8" :xs="8">
              <h3>{{general.metrics.publishedPost}}</h3>
              <p>ARTICLES POSTED</p>
            </Col>
            <Col :md="8" :sm="8" :xs="8" class="center">
              <h3>{{general.metrics.journalists}}</h3>
              <p>CONTENT PROVIDERS</p>
            </Col>
            <Col :md="8" :sm="8" :xs="8" v-if="show">
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
  margin-top: 18%;
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
  padding: 0.8rem 2rem;
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

.left-contain2 {
  margin-top: 8%;
  height: 80%;
  float: right;
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

iframe {
  width: 100%;
  border-radius: 10px;
  height: 100%;
  overflow: hidden;
  border: none !important;
  object-fit: cover;
  box-shadow: 2px 2px 20px 2px #888888;
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

@media screen and (max-width: 840px) {
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
.right-text {
    margin-top: 50%;
	}
	
.left {
    display: none;
	}
.right2 {
   height: 26vh;
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
  .right2 .left2 {
    height: fit-content;
  }
  .left-contain2 {
    float: left;
  }
  .container3 > div {
    margin: 1rem 0 7rem 0;
  }
  .container3 h3 {
    font-size: 1.2rem;
  }
  .container3 p {
    font-size: .5rem;
  }
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
    .container3 > div {
      margin: 1rem 0 7rem 0;
    }
    .right2 {
    height: 30vh;
    }
  .right-text p {
    font-size: 12px; 
    }
  }

</style>
