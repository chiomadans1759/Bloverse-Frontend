<template>
  <nav>
    <Row type="flex" justify="space-between" class="header-nav">
      <Col>
        <img src="https://res.cloudinary.com/naera/image/upload/v1532035571/bloverse/b_blue.png" style="heigh:15px">
        <span style="height: 30px; font-size: 24px; font-weight: bold">BLOVERSE</span>
      </Col>
      <Col>
        <Button type="primary"  shape="circle" ghost>Register</Button>
        <Button type="primary" shape="circle" style="color: white">Log in</Button>
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
.header-nav{
  padding: 15px 40px 10px 40px;
}
</style>