<template>
  <nav>
    <Row class="header-row" type="flex" justify="space-between" align="middle">
      <Col class="brand">
        <router-link to="/"><img class="logo" src="./../assets/Asset 1.svg" style="height:50px" ><span id="l-text">bloverse</span></router-link>
      </Col>
      <Col class="header-button">
       <router-link to="/creators/login" id="j-button">login</router-link>
        <router-link to="/creators/apply" id="c-button">apply</router-link>
      </Col>
    </Row>
 </nav>
</template>
<script >
import { Icon, Row, Col, Button } from "iview";

export default {
  components: { Icon, Row, Col, Button }
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
  margin-left: 1rem;
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

</style>
