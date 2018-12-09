<template>
  <nav>
    <Row class="header-row" type="flex" justify="space-between" align="middle">
      <Col class="brand">
        <router-link to="/">
          <img class="logo" src="./../assets/Logo - White.svg" style="height:50px; margin-bottom: 1rem;" >
        </router-link>
      </Col>
      <Col class="header-button">
        <login-button class="pt-2 mr-3" color="white" />
        <router-link to="/creators/apply" id="c-button">apply</router-link>
      </Col>
    </Row>
 </nav>
</template>

<script >
import { Icon, Row, Col, Button } from "iview";
import LoginButton from "./LoginButton";

export default {
  components: { Icon, Row, Col, Button, LoginButton }
};
</script>


<style scoped>
.header-row {
  width: 90%;
  margin: 0 auto;
  background: transparent;
  z-index: 2;
  position: absolute; 
  padding:2rem 0 0 5rem;
}

#l-text {
  font-size: 32px;
  margin-top: 1rem;
  font-family: 'Comfortaa', cursive;
  color: #fff; 
  font-weight: 500;
}
#j-button {
  font-family: 'Montserrat', sans-serif;
  border: 1px inset #ffffff;
  color: #ffffff;
  margin-top: 1rem;
  font-size: 14px;
  padding :5px 10px;
  text-transform: uppercase; 
  border-radius: 4px;
  text-align: center;
  margin-right:2rem;
}

#c-button {
  font-family: 'Montserrat', sans-serif;
  background: #ffffff;
  color: #096DD9;
  margin-top: 1rem;
  font-size: 14px;
  padding :7px 10px;
  text-transform: uppercase; 
  border-radius: 4px;
  text-align: center;
}

@media screen and (max-width: 600px) {
  #l-text {
  font-size: 2rem; 
}
#j-button, #c-button{  
  font-size: 1rem;  
} 
.header-row {
  width: 95%; 
  padding:2rem 0 0 1rem;
} 
}
</style>
