<template>
  <header id="feeds-header">
    <!-- <router-link class ="logo-wrapper" to="/"><img src="https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png" style="width:40px;height:50px" alt="" id="lead"> &nbsp; -->
    <router-link to="/"><span id="header-text">Bloverse</span>
    </router-link>
    <router-link to="/creators" id="write">Create Content</router-link>


    <!-- <Row id="catrow" :gutter="40" type="flex" justify="center" >
      <Col><p>Entertainment</p> </Col>
      <Col><p>Business</p> </Col>
      <Col><p>Sport</p></Col>
      <Col><p>Technology</p></Col>
      <Col><p>Politics</p></Col>
      <Col><p>Health</p> </Col>
    </Row> -->
  </header>
</template>


<script>
  import { Row, Col, Input, Select, Option } from 'iview'
  import { mapState, mapMutations } from 'vuex'

  export default {
    components: { Row, Col, Input, Select, Option },
     computed: {
      ...mapState([
        'general'
      ])
    },
  }
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
/* #feeds-header {
  margin-bottom:30px; */
#feeds-header {
  background-color:#fff;
  padding:10px 15px;
  border-bottom: 2px solid rgb(236, 230, 230);
  /* box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19); */
  display: flex;
  justify-content: space-between;
  align-items: center;
   
  }

  #write {
    color:#2F80ED;
    font-size: 20px;
    border: 2px solid #2F80ED;
    margin-right: 20px;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;

  }

  #write:hover{
    color:#2F80ED;
   }

   #header-text{
     font-size: 40px;
     font-weight:  bold;
     letter-spacing: 3px;
     font-family: 'Raleway', sans-serif;
     color: rgb(25, 109, 235);
   }
</style>