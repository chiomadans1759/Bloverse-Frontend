<template>
    <section class="position-content">
        <Row type="flex" justify="center">
            <Col span="4">
                <div class="profile-img">
                    <p id="circle"></p>
                </div>
                    </Col>
                    <Col id="profile-container"  span="8">
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
        <Row  type="flex" justify="center">
            <Col span="12">
                <p id="article-list">Articles</p>
                <p id="horizon-line"></p>
            </Col>
            <Col>
                  <ConsumersFeeds /> 
            </Col>
        </Row>
    </section>
</template>

<script>
import { Row, Col, Button } from 'iview';
import ConsumersFeeds from '../../components/ConsumersFeeds.vue';

export default {
  components: { Row, Col, Button, ConsumersFeeds }
    
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
        border-radius:5px; 
        height:31.25rem; 
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
        justify-content: space-between;
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
        width:140px;
        font-size: 18px

    }

    @media screen and (max-width: 360px) {
  .position-content {
    flex-direction: column;
  }
}
@media screen and (max-width: 600px) {
  .position-content {
    flex-direction: column;
  }
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

