<template>
  <Footer id="footer-section">
    <Row type="flex" justify="space-between" id="footer-2">
      <Col>English</Col>
      <Col>
        <ul class="footer-list">
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
      <Col>(c) 2018 Bloverse. All Right Reserved</Col> 
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
  }
 
  .footer-list {
    list-style: none;
    font-size: 12px;
    line-height: 23px; 
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

  .footer-icon { 
    padding-right: 20px;
    font-size: 24px;
  }
 
  @media screen and (max-width:840px){
    
  }

  
</style>
