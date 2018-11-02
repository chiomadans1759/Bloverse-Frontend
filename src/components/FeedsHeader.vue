<template>
  <header id="feeds-header">
   
   
     
          <router-link class ="logo-wrapper" to="/"><img src="https://res.cloudinary.com/naera/image/upload/v1537182542/bloverse/FINAL.png" style="width:350px;height:80px" alt="" id="lead"></router-link>
   
       
        
          <router-link to="/journalist" id="write">Write</router-link>
     
        </div>
     
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
/* #feeds-header {
  margin-bottom:30px; */



  #feeds-header {
    background-color:#f1f2f6;
    width:100%;
   
    padding:10px 15px;
   
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
       display: flex;
  justify-content: space-between;

  align-items: center;
   
   
  }
 



  #write {
    color: grey;
    font-size: 25px;

    
  }
  #write:hover{
    color:#2F80ED;
   }
</style>