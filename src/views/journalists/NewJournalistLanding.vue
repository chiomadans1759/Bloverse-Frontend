<template> 
<div class ="layout">
    <Layout>
        <Content>
            <div class="general"> 
                <HeaderGeneral/> 
                <Row class="container1"> 
                    <Col :md="12" :sm="0" :xs="0" class="left">
                        <Col offset="5" :md="14" :sm="14" :xs="16" class="left-contain">
                            <p>Interactive stories from the global community <br/><span>Connecting creators to the people</span></p>
                            <button>GET STARTED</button>
                        </Col>
                    </Col>  
                    
                    <Col :md="12" :sm="24" :xs="24" class ="right">  
                        <img :src="require('./../../assets/jlanding.jpg')" alt="Journalists Landing">
                        <Col offset="1" :md="0" :sm="22" :xs="22" class="right-text">
                            <p>Interactive stories from the global community <br/><span>Connecting creators to the people</span></p>
                            <button>GET STARTED</button>
                        </Col> 
                    </Col>   

                </Row>

                <Row class="container2"> 
                    <Col :md="12" :sm="10" :xs="24" class="left2">
                        <Col offset="2" :md="14" :sm="22" :xs="20" class="left-contain2"> 
                            <iframe 
                                src="https://www.youtube.com/embed/EjRM4DMdnGw">                           
                            </iframe>
                        </Col> 
                    </Col>  
                    
                    <Col :md="12" :sm="14" :xs="24" class ="right2"> 
                        <Col offset="2" :md="11" :sm="20" :xs="20" class="right-contain2">
                            <h2>About Us</h2>
                            <p>Bloverse was created with you in mind. Have you ever thought of creating a news blog but then balked at the thought of the effort.</p>
                            <router-link tag="know-more" to="/web">
                                <a>Know More</a>
                            </router-link>
                        </Col>             
                    </Col>  
                </Row>
                <Row class="container3"> 
                        <Col :md="8" :sm="8" :xs="8">
                            <h1>156K</h1>
                            <p>ARTICLES POSTED</p>
                        </Col> 
                        <Col :md="8" :sm="8" :xs="8" class="center">
                            <h1>7K</h1>
                            <p>CONTENT PROVIDERS</p>
                        </Col> 
                        <Col :md="8" :sm="8" :xs="8">
                            <h1>100K</h1>
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
import HeaderGeneral from '../../components/HeaderGeneral.vue'; 
import FeedsFooter from '../../components/FeedsFooter.vue'; 

export default {
  components: {
    Button, Row, Col, Icon, Input, Form, Content, Layout, Header, HeaderGeneral, FeedsFooter
  }
};
</script>

<style scoped> 
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
    }
    .left span{
        font-size:1.5rem; 
    }
   .left button{ 
        border-radius:2px; 
        color: rgb(12, 54, 243); 
        border: none;
        padding: .8rem 2rem;
        background-color: #fff;  
        margin-top:3rem; 
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
        background-size: cover;
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
        float:right;
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
    } 
    iframe{
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
    }
    .container3 p{
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


@media screen and (max-width: 840px) {
    .right-text{  
        text-align: center;        
        margin-top:25%;         
    }
    .right-text p{ 
        color:#fff;         
        font-size:3rem; 
        font-weight: 800;        
    }
    .right-text span{        
        font-size:2rem;
        font-weight: 100;
    }
    .right-text button{ 
        border-radius:2px; 
        color: rgb(12, 54, 243); 
        border: none;
        padding: .8rem 2rem;
        background-color: #fff;  
        margin-top:2rem; 
    } 
    .right2{ 
        height:30vh;
    }
    .right-contain2{
        margin-top:7%;         
    }
    .container3 > div{ 
        margin:4rem 0;
    }
}
@media screen and (max-width: 603px) {
    .right-text{          
        margin-top:50%;         
    }
    .right-text p{      
        font-size:2.5rem;         
    }
    .right-text span{        
        font-size:1.5rem; 
    } 
    .container2{ 
        flex-direction:column; 
    }
    .right2 .left2{ 
        height: fit-content;
    }
    .left-contain2{     
        float:left;
    }
    .container3 > div{ 
        margin:1rem 0 4rem 0;
    }
    .container3 h1{
        font-size:2rem; 
    }
    .container3 p{
        font-size:1rem; 
    }
    .right-contain2{
        margin-top:7%; 
        height: fit-content;        
    }
    .right-contain2 p{
        font-size:1.2rem; 
        margin:1rem 0;     
    } 
}
@media screen and (max-width: 322px) {
    .right-contain2 p{
        font-size:1.3rem;
        margin:.5rem 0;       
    }
    .right-contain2 h2{
        font-size:2rem;     
    } 
    .right-text{          
        margin-top:70%;         
    }
}
</style>
