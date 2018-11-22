<template> 
      <section>
          <div class = "container"> 
              <Col  :md="6" :sm="8" :xs="24">
                   <div class = "box1">   
                    <ul>
                      <li>Feeds</li>
                      <li>Categories
                          <ul>
                              <li><i class="fas fa-tv"> </i>Entertainment</li>
                              <li><i class="fas fa-business-time"> </i>Business</li>
                              <li><i class="far fa-futbol"> </i>Sports</li>
                              <li><i class="far fa-lightbulb"> </i>Technology</li>
                              <li><i class="far fa-thumbs-up"> </i>Politics</li>
                              <li><i class="far fa-handshake"> </i>Relationships</li>
                              <li><i class="fas fa-medkit"></i>Health</li>
                              <li><i class="fas fa-user-graduate"></i>Education</li> 
                              <li><i class="fas fa-glasses"> </i>Fashion</li>
                              <li><i class="fab fa-gratipay"> </i>Lifestyle</li>
                              <li><i class="far fa-calendar-alt"> </i>Events</li>
                              <li><i class="far fa-grin-squint-tears"> </i>Comedy</li>
                              <li><i class="fas fa-plane-departure"> </i>Travel</li>
                          </ul>
                      </li>
                  </ul>
                   </div>
              </Col> 
              <Col :sm="16" :md="12" :xs="24"   class = "box2">
                  <div class ="center-content">
                       <Row class = "center-content-header" type="flex" justify="space-between" align="middle">
                            <Col class ="collapse-menu" :sm="2" :xs="2" ><p>&#9776;</p> </Col>
                            <Col :md="4" :sm="4" :xs="4" >
                                <div class = "avarter-wrap">
                                    <img src ="./../../assets/punch.png"/>
                                </div>
                            </Col>
                            <Col :md="4" :sm="4" :xs="4"><p class="para1">Seyi Femi</p></Col>
                            <Col :sm="14" :xs="14" :md="16" ><p class="para2">3 hours ago</p></Col>
                        </Row>
                        <Row class="content-image">
                            <img src ="./../../assets/landingPage.jpg"/>
                        </Row>
                        <Row class ="center-content-footer">
                           <Row class="para3">We are confident of winning Osun gov election - PDP</Row>
                           <Row class="para4">
                               <Col class="icon1">
                                    <i class="fa fa-heart"><span> 235 </span></i> 
                                    <i class="fab fa-twitch"><span> 45</span></i>
                               </Col> 
                               <Col class="icon2">
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-ellipsis-v"></i>
                               </Col>  
                           </Row>
                        </Row>
                  </div>
                  <div class ="center-content">
                       <Row class = "center-content-header" type="flex" justify="space-between" align="middle">
                            <Col :md="4" >
                                <div class = "avarter-wrap">
                                    <img src ="./../../assets/punch.png"/>
                                </div>
                            </Col>
                            <Col :md="4" ><p class="para1">Seyi Femi</p></Col>
                            <Col :sm="16" :md="16" :xs="16"><p class="para2">3 hours ago</p></Col>
                        </Row>
                        <Row class="content-image">
                            <img src ="./../../assets/landingPage.jpg"/>
                        </Row>
                        <Row class ="center-content-footer">
                           <Row class="para3">We are confident of winning Osun gov election - PDP</Row>
                           <Row class="para4">
                               <Col class="icon1">
                                    <i class="fa fa-heart"><span> 235 </span></i> 
                                    <i class="fab fa-twitch"><span> 45</span></i>
                               </Col> 
                               <Col class="icon2">
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-ellipsis-v"></i>
                               </Col>  
                           </Row>
                        </Row>
                  </div>
                  <div class ="center-content">
                       <Row class = "center-content-header" type="flex" justify="space-between" align="middle">
                            <Col :md="4" :sm="4" :xs="4" >
                                <div class = "avarter-wrap">
                                    <img src ="./../../assets/punch.png"/>
                                </div>
                            </Col>
                            <Col :md="4" :sm="4" :xs="4" ><p class="para1"> Seyi Femi</p></Col>
                            <Col :sm="16" :md="16" :xs="16"><p class="para2">3 hours ago</p></Col>
                        </Row>
                        <Row class="content-image">
                            <img src ="./../../assets/landingPage.jpg"/>
                        </Row>
                        <Row class ="center-content-footer">
                           <Row class="para3">We are confident of winning Osun gov election - PDP</Row>
                           <Row class="para4">
                               <Col class="icon1">
                                    <i class="fa fa-heart"><span> 235 </span></i> 
                                    <i class="fab fa-twitch"><span> 45</span></i>
                               </Col> 
                               <Col class="icon2">
                                    <i class="fa fa-reply"></i>
                                    <i class="fa fa-ellipsis-v"></i>
                               </Col>  
                           </Row>
                        </Row>
                  </div>
            
              </Col>
              <Col  :md="6" :sm="24" :xs="24" class = "box3" type="flex" align="middle" > 
                    <Row class ="box3-content" offset ="4" :sm="24" :md="16" :xs="24"></Row>
                    <Row class ="box3-content" offset ="4" :sm="24" :md="16" :xs="24"></Row>
              </Col>
          </div>
      </section>   
</template>

<script>
import { Button,Row, Col, Icon, Input, Form, FormItem } from 'iview';
//import ConsumerLoginFooter from '../../components/ConsumerLoginFooter.vue';
    
export default {
  components: { Button, Row, Col, Icon, Input, Form, FormItem}
}
</script>

<style scoped>
   
  /*  .container > div{ 
        border: 1px #ccc solid;
   } */
    .container{        
        width:100%;
    }
    .box1{  
       margin-top:1.5rem;
       margin-left:5rem;  
    }
    .box1 ul li{
        list-style-type: none;
        padding-top:.4rem;
        font-size:1rem;
        color:#333333;
        display:block;
    }
    .box1 i{
        width:2rem;    
        color:#333333;
    }   
    .box2{ 
        display:flex;
        flex-direction:column;  
    }
   
    .center-content{ 
        border:1px solid #ccc;
        margin-top:1.5rem;         
        border-radius:5px; 
        flex:1;
        height:31.25rem;  
    }
    .center-content-header{ 
        height:5rem;         
    }
     .collapse-menu{
         display:none;
     }
      .avarter-wrap{  
         width:3rem;
         height:3rem; 
         border:2px solid #ccc; 
         text-align: center;  
         padding:.5rem 0;          
         border-radius: 50%; 
         margin-left:2rem;      
     }
       .avarter-wrap img{  
         width:35px;
         height:12px;  
         vertical-align:middle;             
     }
    .para1{ 
        font-weight:800;
        }
    .para2{ 
        text-align:right;
        padding-right:2rem; 
        color:#9c9c9c;
        }
    .content-image{
       display: flex;
       height:18.75rem;
    }
    .content-image img{ 
        flex:1;
    }
    .center-content-footer{ 
        height:7.5rem;  
        align-items:center;
        width:100%;        
    }
     .para3{ 
        font-weight:800;
        font-size: 1rem;
        padding: 1.5rem 0 2rem 2rem; 
     }
    .para4{ 
        font-weight:800;
        font-size: 1rem;
        padding-left: 2rem;
        padding-bottom: 2rem;
        display:flex;  
        margin-top:2rem; 
        }
    
     .box3{                
        align-items: center; 
    }
    .icon1{
        flex:5;  
        color: #333333;         
        align-items: left; 
    }
    .icon1 span{
        font-size:12px;
        text-align:center;        
    }
    .fa-heart{
        padding-right:1.5rem;
    }
    .fa-reply {
        padding-right:2rem; 
    }
     .icon2{
        flex:1;            
        color: #333333;
    }
    .box3-content{
        border: 1px solid #ccc; 
        height:20rem;
        width:70%;
        margin:1.5rem 0 1rem 0;
        border-radius:5px;   
    }
    
@media only screen and (max-width: 600px) {
      .box1 ul li{ 
        font-size:.7rem; 
    }
      .center-content{  
        margin-top:1rem; 
    }
      .box1 i{
        width:1.5rem;     
    }
      .box1{  
       margin-top:1.5rem;
       margin-left:3rem;  
    }
    
    .container{ 
        display:flex;
        flex-direction:column; 
        width:90%; 
        margin:auto; 
    }
    
      .avarter-wrap{  
         width:2rem;
         height:2rem;   
         padding-top:.12rem;   
         margin-left:1rem;      
     }
       .avarter-wrap img{  
         width:25px;
         height:10px;               
     }
     
     .para3{  
        font-size: .7rem;
        padding: 1.2rem 0 1rem 1rem; 
     }
     .para4{   
        padding-left: 1rem; 
        }
    .icon1{
        flex:2;  
        color: #333333;         
        align-items: left; 
    }
    
      .content-image{  
        height:50%;
    }
     .collapse-menu {
        display:block; 
        color: #333333; 
        font-size:1.5rem;
        text-align:right;
        cursor: pointer;
        margin:0;
    }
     .center-content{ 
        border:1px solid #ccc;
        margin-top:.7rem;         
        border-radius:5px; 
        flex:1;
        height:18.75rem;  
    }
    .center-content-header{ 
        height:20%;         
    } 
    .center-content-footer{ 
        height:30%;       
    }
     .box1 {
        display: none;
    }
    .box3 {
        display: none;
    }   
}

@media only screen and (max-width: 840px) {
   .box3 {
        display: none;
    }
    .container{    
        width:98%;  
    }
    .content-image img{ 
        flex:1;
        width:10px;
    }
      .content-image{  
        height:55%;
    }
     
     .center-content{ 
        height:26.75rem;  
    }
    .center-content-header{ 
        height:17%;         
    } 
    .center-content-footer{ 
        height:28%; 
}
}

</style>
