<template>
  <header id="feeds-header">
    <Row id="feeds-row" type="flex" justify="space-around" align="middle">
        <Col>
          <router-link to="/"><img src="https://res.cloudinary.com/aolfiligre/image/upload/v1533663492/freed.png" alt="" id="lead"></router-link>
        </Col>
       
        <Col>
          <router-link to="/journalist" id="write">Write</router-link>
        </Col>
         <Col :sm="3">
           <Select v-model="country" placeholder="Choose Country" id="country">
              <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
          <Col :sm="3">
           <Select v-model="categories" placeholder="Choose categories" id="categories">
              <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
          </Col>
    </Row>   
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
#feeds-header {
  margin-bottom:30px;

}
#country {
  width: 100%;
}
  #feeds-row {
    background-color:#2f80ed;
    width:100%;
    height:80px;
    position: relative;
  }
  .ivu-input-wrapper{
    margin:25px 0;
  }
   #catrow {
    height: 60px;
    width: 100%;
    background-color:#f5f6fa ;
    color: #151516;
    position: absolute;
    margin: 0% !important;
    padding-top: 15px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
}
  
  #catrow ul {
    padding: 0;
    margin: 0;
    
  }
  #catrow p{
    font-size: 21px;
    font-weight: 300;
  }
  #catrow li {
    display: inline;
    float: left;
  }
  #catrow a {
    display: inline-block;
    width: 100px;
    text-align: center;
    text-decoration: none;
    padding: 10px 0;
    color: #eee;
    text-decoration: none;
  }
  #catrow li:hover {
    background-color: #444;
  }
  #catrow a#openup {
    display: none;
  }
  #lead {
    width:50px;
    height:70px;
    margin: 5px 35px
  }

  #write {
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 15px;
    display:flex;
    margin-left:900px;
  }
  #write:hover{
    color: #FFFFFF;
   }
</style>