<template> 
      <section>
          <div class = "container"> 
              <Col :sm="24" :md="6" :xs="24" class = "box1">
                   <div>
                       Sidebar Menu Here
                   </div>
              </Col> 
              <Col :sm="24" :md="12" :xs="24" class = "box2">
                  <div class ="center-content">
                       <div class = "center-content-header">
                            <Col class = "avarter" :sm="4" :md="4" :xs="4">
                                <div class = "avarter-wrap">
                                    <img src ="./../../assets/punch.png"/>
                                </div>
                            </Col>
                            <Col :sm="4" :md="4" :xs="4"><p class="para1">Seyi Femi</p></Col>
                            <Col :sm="16" :md="16" :xs="16"><p class="para2">3 hours ago</p></Col>
                        </div>
                        <div class="content-image">
                            <img src ="./../../assets/landingPage.jpg"/>
                        </div>
                        <div class ="center-content-footer">
                           <p class="para3">We are confident of winning Osun gov election - PDP</p>
                           <p class="para4"><i class="fa fa-heart"></i> 235 
                                <span class = "span1"><i class="fa fa-comment"></i> 45</span>
                                <span class = "span2"><i class="fa fa-reply"></i></span>
                                <span class = "span3"><i class="fa fa-ellipsis-v"></i></span>
                           </p>
                        </div>
                  </div>
              </Col>
              <Col :sm="24" :md="6" :xs="24" class = "box3">
                    <div class ="box2-content">
                       
                    </div>
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

    .box1{  
        
    }  
    .box2{ 
        display:flex;
        
    }
    .box3{  
    }
    .center-content{ 
        border:1px solid #ccc;
        flex:1;  
    }
    .center-content-header{ 
        height:80px;
        display:flex;
        overflow:hidden; 
        align-items:center;
        width:100%;        
    }
     .avarter{           
     }
      .avarter-wrap{  
         width:3rem;
         height:3rem; 
         border:2px solid #ccc; 
         text-align: center;  
         padding:.5rem 0;          
         border-radius: 50%; 
         margin:3rem;      
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
        color:#9c9c9c;
        }
    .content-image{
       display: flex;
    }
    .content-image img{ 
        flex:1;
    }
    .center-content-footer{ 
        height:120px; 
        overflow:hidden; 
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
        }
    .span1{
        padding: 0 20px;
    }
    .span2{
        text-align:right;
        padding-left:55%;
    }
    .span3{
        padding: 0 3rem;
        text-align:right;
    }
    .box2-content{
        border: 1px solid #ccc; 
        height:10rem;
        width:60%;    
    }
    
@media only screen and (max-width: 600px) {
    
}

</style>
