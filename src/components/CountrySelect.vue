<template>
<div id="country-container">
     
    <Row  class="country-wrapper" gutter="16">
        <Col id ="country-card" v-for="(val, index) in countryFlags" :key="index" :sm="24" :md="8">
            <Card id="card-wrapper">
                <Img :src="val.imgURL" id="card-img" /> <p id="country-name">{{val.name}}</p>
                <p id="position-circle"><ion-icon name="checkmark-circle" id="icon-circle"></ion-icon></p>
            </Card>
        </Col>
    </Row>
    </div>
</template>

<script>
import { Row, Col, Card } from 'iview';
import countryFlags from '../countryFlags.js';

export default {
  components: { Row, Col, Card },
  data () {
    return {
      countryFlags 
    }
  }

}
</script>

<style>
#country-container {
    width:100% ;
    display: flex;
    justify-content: center;
    align-items: center
}
#country-card{
    margin-bottom: 20px
}
#card-img {
    height: 144px;
    margin-top: -40px;
    margin-left: -20px;

}
#icon-circle {
    color: #2F80ED;
    font-size: 20px;
}
#card-wrapper {
    height: 100px;
}
#country-name {
    margin-top: -30%;
    margin-left: 60%;
}
#position-circle {
    margin-left: 95%;
    margin-top: 10px;
}
@media screen and (max-width: 360px) {
#position-circle {
    margin-left: 95%;
    margin-top: -5px;
 }
}
@media screen and (max-width: 600px) {
  #position-circle {
    margin-left: 95%;
    margin-top: -5px;
 }
}
</style>

