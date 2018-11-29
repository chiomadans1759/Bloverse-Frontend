<template>
    <section class="position-content">
`        <Row type="flex" justify="center">
            <Col span="4">
                <div class="profile-img">
                    <p id="circle"></p>
                </div>
                    </Col>
                    <Col id="profile-container" :sm="16" :md="12" :xs="24" >
                        <div class="profile-content">
                             <h1>Seyi Femi</h1>
                             <Button id="profile-button" type="default">Follow</Button>
                        </div>
                        <p id="profile-title">Blogger, Journalist, Media Personality</p>
                        <p id="profile-subtitle">Editor at PunchNG</p>
                        <div type="flex" justify="space-between" style="flex-direction:column">
                            <span id="profile-follow">112 Following &nbsp;&nbsp;&nbsp;&nbsp;
                            300 Watchers </span>
                        </div>
                        
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span="16">
                <p id="article-list">Articles</p>
                <p id="horizon-line"></p>
            </Col>
        </Row>
        <div>
            <div  v-for="i in 4" :key="i" id="card-directions">
                  <ConsumersFeedsCard /> 
            </div>
        </div>
    </section>
</template>

<script>
import { Row, Col, Button } from 'iview';
import ConsumersFeedsCard from '../../components/ConsumersFeedsCard.vue';

export default {
  components: { Row, Col, Button, ConsumersFeedsCard }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

    #circle {
    background: rgb(214, 209, 209);
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
    .position-content{ 
        margin-top:2.5rem;         
      
}

.summary-cards{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: white;
 
  font-size: 1rem;
}
    #profile-title {
        font-size: 24px;
        line-height: 28px;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 0.5rem;
    }

    #profile-subtitle {
        color: #828282;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 0.5rem;
    }

    #profile-follow {
        color: #828282;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 0.5rem; 
    }

    #profile-watchers {
        color: #828282;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 0.5rem; 
    }

    #article-list {
        margin-top: 4rem;
        color: #333333;
        font-size: 18px;
        margin-left: 1rem;

    }

    #horizon-line {
        border-bottom: 1px solid #333333;
    }
    .profile-content{
        display: flex;
        width: 90%
        /* padding:15px 45px 15px 0 */
    }
.position-content h1{
    font-size: 2rem;

}
#profile-container{
    
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

    #profile-button{
        width:120px;
        font-size: 15px;
        margin-left: 4rem;
    }
    #card-directions {
      width:50%;
      margin: auto;
    
     
    }
      
</style>

<style>
 #profile-avatar {
    width: 150px;
    height: 150px;
}

#profile-button {
    width: 70px;
}
</style>

