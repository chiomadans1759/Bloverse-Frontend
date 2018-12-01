<template> 
<div class ="layout">
    <Layout>
        <Content>
            <div class="general"> 
                <HeaderGeneral/> 
                <Row class="container1"> 
                    <Col :md="12" :sm="8" :xs="24" class="left">
                        <Col offset="5" :md="14" :sm="14" :xs="16" class="left-contain">
                            <p>Interactive stories from the global community <br/><span>Connecting creators to the people</span></p>
                            <button>GET STARTED</button>
                        </Col>
                    </Col>  
                    
                    <Col :md="12" :sm="24" :xs="24" class ="right">  
                        <img :src="require('./../../assets/jlanding.jpg')" alt="Journalists Landing"> 
                    </Col>   

                </Row>

                <Row class="container2"> 
                    <Col :md="12" :sm="8" :xs="24" class="left2">
                        <Col offset="10" :md="14" :sm="14" :xs="16" class="left-contain2"> 
                            <video class="video" controls>
                                <source src="./../../assets/intro.mp4" type="video/mp4"> 
                                    Your browser does not support HTML5 video.
                            </video> 
                        </Col> 
                    </Col>  
                    
                    <Col :md="12" :sm="24" :xs="24" class ="right2"> 
                        <Col offset="2" :md="11" :sm="14" :xs="16" class="right-contain2">
                            <h2>About Us</h2>
                            <p>Bloverse was created with you in mind. Have you ever thought of creating a news blog but then balked at the thought of the effort.</p>
                            <router-link  to="#" style="font-family: 'Montserrat', sans-serif;">
                               Know More
                            </router-link>
                        </Col>             
                    </Col>  
                </Row>
                <Row class="container3"> 
                        <Col :md="8" :sm="8" :xs="8">
                            <h1>{{general.metrics.publishedPost}}</h1>
                            <p>ARTICLES POSTED</p>
                        </Col> 
                        <Col :md="8" :sm="8" :xs="8" class="center">
                            <h1>{{general.metrics.journalists}}</h1>
                            <p>CONTENT PROVIDERS</p>
                        </Col> 
                        <Col :md="8" :sm="8" :xs="8">
                            <h1>{{general.metrics.views.total}}</h1>
                            <p>VISITORS</p>
                        </Col>   
                </Row>
        <FeedsFooter/>
            </div>
       </Content>
    </Layout>
    </div> 
</template>

<script>
import { Button, Row, Col, Icon, Input, Form, Content, Layout, Header} from "iview";
import { mapState, mapActions } from 'vuex';
import HeaderGeneral from '../../components/HeaderGeneral.vue'; 
import FeedsFooter from '../../components/FeedsFooter.vue'; 

export default {
  components: {
    Button, Row, Col, Icon, Input, Form, Content, Layout, Header, HeaderGeneral, FeedsFooter
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
@import url('https://fonts.googleapis.com/css?family=Montserrat');

    .general{
        z-index: 10;
    }
    .container1{
        width:100%; 
        display:flex;
        margin:0;
        height:50rem;
    }
    .left{ 
        background-image: linear-gradient(rgb(2, 9, 110), rgba(4, 37, 128)); 
    }
    .left-contain{
        margin-top:18%;         
    }
    .left p{
        font-size:4rem;
        color:#fff;
        letter-spacing: 2px;
        padding:2rem 0;
        line-height: 1.2;
        font-weight: 200;
        opacity: .7;
        font-family: 'Montserrat', sans-serif;
    }
    .left span{
        font-size:1.5rem; 
        font-family: 'Montserrat', sans-serif;
    }
   .left button{ 
        border-radius:2px; 
        color: rgb(12, 54, 243); 
        border: none;
        padding: .8rem 2rem;
        background-color: #fff;  
        margin-top:3rem; 
        font-family: 'Montserrat', sans-serif;
        }   
    .right{
        background-color:#000;
        height:100%;
    }
   
    .right img{
        width:100%;
        height:100%;
        object-fit: cover;
        object-position: 50%;
        position: absolute;
        opacity: 0.5;
        border-radius: 10px;
        top:0; 
    } 
    .container2{ 
        display:flex; 
        background-color: rgb(230, 221, 221);
    }
    .left-contain2{
        margin-top:8%;
        height:80%; 
    }
    .right2{ 
        height:50vh;
    }
    .right-contain2{
        margin-top:12%;         
    }
     .right-contain2 p{
        font-size:15px; 
        margin:2rem 0;    
        font-family: 'Montserrat', sans-serif; 
    } 
    .video{
        width:100%;
        border-radius: 10px;
        height:100%;
        object-fit: cover;
        box-shadow: 2px 2px 20px 2px #888888;
    }
     .container3{ 
        display:flex; 
        background-color: rgb(230, 221, 221);
        height:fit-content;
    }
    .container3 h1{
        font-size:3rem;
        line-height:2;
        color:black;
        font-weight:600;
        opacity: 6;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
    }
    .container3 p{
        font-family: 'Montserrat', sans-serif;
        font-size:1.3rem;
        line-height:1;
        color:black;
        opacity: 6;
        text-align: center;
    }
    .container3 > div{ 
        margin:8rem 0;
    }
    .center{
        border-right:2px solid #ccc;
        border-left:2px solid #ccc;
    }
</style>
