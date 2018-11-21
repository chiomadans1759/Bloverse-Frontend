<template> 
      <section>
          <div class = "container">
              <div class = "box1">
                  <ul>
                      <li>Feeds</li>
                      <li>Categories
                          <ul>
                              <li>Entertainement</li>
                              <li>Business</li>
                              <li>Sports</li>
                              <li>Technology</li>
                              <li>Politics</li>
                              <li>Relationships</li>
                              <li>Health</li>
                              <li>Fashion</li>
                              <li>Lifestyle</li>
                              <li>Events</li>
                              <li>Comedy</li>
                              <li>Travel</li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <div class = "box2">
                  <div class ="center-content">
                        <div class = "center-content-header">
                            <img src ="./../../assets/punch.png" />
                            <p>Seyi Femi</p>
                            <p>3 hours ago</p>
                        </div>
                        <img src ="./../../assets/landingPage.jpg" />
                        <div></div>
                  </div>
              </div>
              <div class = "box3">
                    footer here
              </div>
          </div>
      </section>   
</template>

<script>
import { Button,Row, Col, Icon, Input, Form, FormItem } from 'iview';
//import { mapState } from 'vuex'; 
//import ConsumerLoginFooter from '../../components/ConsumerLoginFooter.vue';
import BaseConsumer from '../../layouts/BaseConsumer';
    
export default {
  components: { Button, Row, Col, Icon, Input, Form, FormItem, BaseConsumer}
}
</script>


<style scoped>
   .container{
       display:flex;
   }
    .container > div{ 
        border: 1px #ccc solid;
   }
    .box1{
        flex:3;
        padding:3rem;
    }
    .box2{
        flex:6;
        display:flex;
    }
    .box3{
        flex:3;
    }
    .center-content{
        margin:1rem 4rem;
        border:2px solid #ccc;
        flex:1;
        height:80px;
    }
    .center-content-header{
        display: flex;
    }
@media only screen and (max-width: 600px) {
    
}

</style>
