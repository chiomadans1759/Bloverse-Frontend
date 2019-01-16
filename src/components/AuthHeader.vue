<template>
  <header id="feeds-header">
    <Row class="feeds-row" type="flex" justify="space-between" align="middle">
      <Col>
     <router-link to="/" class="router-link"><img class="logo" src="./../assets/Asset 1.svg" style="height:50px" /><span id="logo-text">bloverse</span></router-link>
     </Col>
     <span class="button-links">
     <router-link to="/creators/login" id="login-button">login</router-link>
     <router-link to="/creators/apply" id="apply-button">apply</router-link>
     </span> 
     
    </Row>
  </header>
</template>

<script>
import { Row, Col } from 'iview';

export default {
  components: {Row, Col}
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');

.feeds-row {
 width: 90%;
 margin: 0 auto;
 padding:3*98px;
}
.router-link {
  display: flex;
}
.button-links {
  display: flex;
  margin-bottom: 0.5rem;
}
#feeds-header {
  background-color: #ffffff;
}
#logo-text {
  font-size: 32px;
  font-family: 'Comfortaa', cursive;
  color: #096DD9;
  margin-left: 1rem;
  font-weight: 500;
}
#login-button {
  font-family: 'Montserrat', sans-serif;
  border: 1px inset #096DD9;
  color: #096DD9;
  margin-top: 1rem;
  font-size: 14px;
  padding :5px 10px;
  text-transform: uppercase; 
  border-radius: 4px;
  text-align: center;
  margin-right:2rem;
}
#apply-button {
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to right, #096DD9 40%, #07b1e0 100%);
  color: #fff;
  margin-top: 1rem;
  font-size: 14px;
  padding :5px 10px;
  text-transform: uppercase; 
  border-radius: 4px;
  text-align: center;
}

</style>

