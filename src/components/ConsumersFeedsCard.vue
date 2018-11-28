<template>
  <Row id="feedscardcontainer">
    <Col class = "box2">
        <div class ="center-content">
            <Row class = "center-content-header" type="flex" justify="space-between" align="middle">
                <!-- <Col class ="collapse-menu" :sm="2" :xs="2" ><p>&#9776;</p> </Col> -->
                <Col :md="4" :sm="4" :xs="4" >
                        <img src ="./../assets/punch2.png" style="margin-left: 2rem;"/>
                </Col>
                <Col :md="4" :sm="4" :xs="4"><p class="para1">Seyi Femi</p></Col>
                <Col :sm="14" :xs="14" :md="16" ><p class="para2">3 hours ago</p></Col>
            </Row>
            <Row class="content-image">
                <img src ="./../assets/landingPage.jpg" />
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
    </Row>
</template>

<script >
import { Icon, Row, Col} from "iview"; 

export default {
  components: { Icon, Row, Col },
  data () {
    return {
      postPoints: [
        { id: 1,
          point: 'The Peoples Democratic Party has said that it has the confidence of winning Osun state governorship supplementary election.',
        },
        { id: 2,
          point: 'The election holds in seven polling units in the state on Thursday.',
        },
        { id:3,
          point: 'The Peoples Democratic Party has said that it has the confidence of winning Osun state governorship supplementary election.'
        }
      ]
    }
  }
}
</script>

<style scoped> 
    
     .box2{ 
        display:flex;
        flex-direction:column;  
    }
    .center-content{ 
        border:1px solid #E0E0E0;
        margin-top:1.5rem;         
        border-radius:5px; 
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
        width:100%;
        height:100%;
        object-fit: cover;
        object-position:center;
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

    #keypoints{
   text-align: center;
   font-size: 24px;
   font-weight: 400;
   line-height: 32px;
   color: #1D2129;
   padding: 20px 0;
}
#summary-cards-content{
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgb(236, 230, 230);
  padding: 15px 15px;
  text-align: left;
}
    
@media only screen and (max-width: 600px) {
   .center-content{  
        margin-top:1rem; 
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
        margin-top:.7rem;    
        flex:1;
        height:18.75rem;  
    }
    .center-content-header{ 
        height:20%;         
    } 
    .center-content-footer{ 
        height:30%;       
    }  
}

@media only screen and (max-width: 840px) {
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
