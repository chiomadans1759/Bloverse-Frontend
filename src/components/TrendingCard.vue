<template>
    <div>
    <h4 style="font-family: 'Montserrat', sans-serif; margin-top: 4rem; font-weight: bold;">Top Stories</h4>
    <Row class="trending" >
        
            <carousel paginationActiveColor="#096DD9" paginationColor="#95C8D8" :perPageCustom="[[768, 3], [1024, 4], [600, 2], [300,1]]" autoplay="true"  easing>
                <slide v-for="i in 16" :key="i" id="slider">
                    <Col>
                    <Card style="width:276px;">
                        <div style="text-align:left">
                            <img src="./../assets/trending/business.jpg" style="height:210px; width: 275px;">
                        </div>
                        <div>
                            <p id="category-name">Category</p>
                            <p id="category-text">I took a break from mum guilt for the day</p>
                             <Avatar shape="square" id="avatarr"/>
                             <span id="user-name"> John Doe </span>
                            <!-- <p>A high quality UI Toolkit based on Vue.js</p> -->
                        </div>     
                    </Card>
                    </Col>
                </slide>
            </carousel>
        
    </Row>
    </div>
</template>

<script>
import { Row, Col, Card, Avatar } from 'iview';
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Row, Col, Card, Carousel, Slide, Avatar },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

    .trending {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
    }

    #category-name {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        top: 8px;
        left: 16px;
        color: #ffffff;
        text-transform: uppercase;
        }

    #category-text {
        position: absolute;
        top: 120px;
        right: 16px;
        left: 16px;
        color: #ffffff;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        }

        #avatarr {
            position: absolute;
            bottom: 10px;
            left: 16px;
        }

        #user-name {
           position: absolute;
           color: #ffffff;
           font-family: 'Montserrat', sans-serif;
           bottom: 7%;
           left: 30%;
           font-size: 12px;
        }

</style>

<style>
.VueCarousel-wrapper{
    width: 90vw !important;
}
</style>

