<template>
  <nav>
    <Row type="flex" justify="space-between" class="header-nav">
      <Col>
        <router-link to="/">
          <img src="https://res.cloudinary.com/naera/image/upload/v1532035571/bloverse/b_blue.png" style="heigh:15px">
          <span style="height: 30px; font-size: 24px; font-weight: bold">BLOVERSE</span>
        </router-link>
      </Col>
      <Col>
       <router-link to="/journalist/apply" class="auth">Register</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
       <router-link to="/journalist/login" class="auth1">Login</router-link>
      </Col>
    </Row>
 </nav>
</template>
<script >
 import { Icon, Row, Col, Button } from 'iview';
  export default {
  	components: { Icon, Row, Col, Button },
  	data () {
            return {
            }
  	},
    methods: {
        }

    }
</script>


<style scoped>
img{
      width: 24px;
      /* padding-left: 20px; */
}

Button{
  color: blue;
  margin:2px 20px 0 20px ;
  padding-right: 30px;
  padding-left: 30px;
}
 .auth {
    background: #FFFFFF;
    padding: 10px 30px 10px 30px;
    border-radius: 10px;
    border: 1px solid #2f80ed;
    color: #2f80ed;
  }

.auth:hover {
  color: #2f80ed;
}
  .auth1 {
    background: #2f80ed;
    color: #FFFFFF;
    padding: 13px 30px 13px 30px;
    border-radius: 10px;
  }
.header-nav{
  padding: 15px 40px 10px 40px;
}
</style>