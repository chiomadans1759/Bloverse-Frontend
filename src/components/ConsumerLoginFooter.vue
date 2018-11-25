<template>
  <Footer id="footer-section" type="flex" justify="left">
    <Row type="flex" justify="left">
      <Col id = "english">English</Col>
      <Col class="footer-list">
        <ul >
          <li><a href="#">About</a></li>          
          <li><a href="#">Company</a></li>          
          <li><a href="#">Products</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><router-link to="/policy">Privacy Policy</router-link></li>          
          <li><a href="#">Support</a></li>          
          <li><a href="#">Chrome Extension</a></li>
        </ul>
      </Col>
      <Col class="copy">(c) 2018 Bloverse. All Right Reserved</Col> 
    </Row>                                  
  </Footer>
</template>

<script>
import { Row, Col, Icon } from 'iview';

export default {
  components: { Row, Col, Icon }
}
</script>


<style scoped>
  #footer-section {
    color: #d9d9d9;
    padding: 1.4rem 4rem;
    background: #363c44;
    height:fit-content;
  }
 
  .footer-list {
    list-style: none;
    font-size: .9rem;
    line-height: 23px;
    padding-left:4rem;
  }
  .copy{
    position: absolute;
    right:0;
    padding-right:2rem;
  }
  ul li {
    display: inline-block; 
    padding:0 10px;   
  }

  .footer-list a {
    color: #ccc;
  }

  .footer-list a:hover {
    color: var(--primary);
    text-decoration:none;
    color:#fff;
  }
 
   @media screen and (max-width:600px){
  .footer-list { 
    font-size: .5rem; 
  } 
   ul li { 
    padding:0 .3rem;
    width:50%;   
  } 
   #footer-section {    
    font-size:.6rem;
    padding-top:.2rem;
   }
  
}
  @media screen and (max-width:840px){
  .footer-list { 
    font-size: .6rem;
    line-height: .6rem;  
    padding-left: 2rem;
  } 
   ul li { 
    padding:0 .3rem;   
  } 
   #footer-section {  
    font-size:.6rem;
    padding-left: 0.5rem; 
    height:100%; 
}
 .copy{ 
    padding-right:.5rem;
  }
  
}
  
</style>
