<template>
  <nav>
    <Row class="header-row" type="flex" justify="space-between" align="middle">
      <Col class="brand">
        <router-link to="/"><img class="logo" src="https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png" ></router-link>
      </Col>
      <Col class="header-button">
        <router-link to="/creators/apply" class="auth register">Apply</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/creators/login" class="auth login">Login</router-link>
      </Col>
    </Row>
 </nav>
</template>
<script >
 import { Icon, Row, Col, Button } from 'iview';
  export default {
  	components: { Icon, Row, Col, Button }
  }
</script>


<style scoped>

.header-row{
  width: 90%;
  margin: 0 auto;
}

.logo {
height:90px;
margin-left: 2em;
}


.register {
  border: 1px solid #fefefe;
  margin-right: 2em;
  color: #2f80ed;
}

.register:hover {
  border: 1px solid #2f80ed;
}

.login {
  margin-left: 2em;
  border: 1px solid #2f80ed;
  background: #2f80ed;
  color: white;
}



.auth {
    padding: 10px 30px 10px 30px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 800;
  }

.header-nav{
  padding: 15px 40px 10px 40px;
}
</style>