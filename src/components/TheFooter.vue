<template>
  <Footer id="footer-section">
    <Row class="footer-1" type="flex" justify="space-between">                         
      <Col class="footer-company-name">
        <span>Bloverse</span>
      </Col>
      <Col>
        <ul class="footer-list">
          <li><a href="#">About</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="/docs/#/policy">Privacy Policy</a></li>
        </ul>
      </Col>
      <Col>
        <ul class="footer-list">
          <li><a href="/docs/#/rules/journalist">House Rules (Journalists)</a></li>
          <li><a href="/docs/#/ranking/journalist">Ranking System (Journalists)</a></li>
          <li><a href="/docs/#/guides">Guides to Publish Article</a></li>
          <li><a href="/docs/#/faq/journalist">Frequently Asked Question (Journalists)</a></li>
        </ul>
      </Col>
      <Col>
        <ul class="footer-list">
          <li><a href="/docs/#/rules/commenter">House Rules (Commenters)</a></li>
          <li><a href="/docs/#/ranking/commenter">Ranking System (Commenters)</a></li>
          <li><a href="/docs/#/faq/commenter">Frequently Asked Question (Commenters)</a></li>
        </ul>
      </Col>
      <!--<Col>
        <ul class="footer-list">
          <li> 321 North Star 34th Street, </li>
          <li> Suit #100 </li>
          <li> Cupertino, 98103 </li>
        </ul>
      </Col>-->
    </Row>
    <Row type="flex" justify="space-between" id="footer-2">
      <Col>English</Col>
      <Col>(c) 2018 Bloverse. All Right Reserved</Col>
      <Col>
        <Icon class="footer-icon" type="logo-facebook"></Icon>
        <Icon class="footer-icon" type="logo-twitter"></Icon>
        <Icon class="footer-icon" type="logo-linkedin"></Icon>
        <Icon class="footer-icon" type="logo-instagram"></Icon>
      </Col>
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
    padding: 2rem 4rem;
    background: #363c44;
  }

  .footer-1 {
    margin-bottom: 4rem;
  }

  .footer-list {
    list-style: none;
    font-size: 14px;
    line-height: 23px;
    margin-bottom: 2rem;
  }

  .footer-list a {
    color: #d9d9d9;
  }

  .footer-list a:hover {
    color: var(--primary);
    text-decoration: underline;
  }

  .footer-icon {
    /* padding: 20px; */
    padding-right: 20px;
    font-size: 24px;
  }

  .footer-company-name {
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    color: white;
    font-style: inherit;
    margin-bottom: 2rem;
  }


  @media screen and (max-width:901px){
    .footer-company-name {
      width: 100%;
      text-align: center;
      
    }
  }

  
</style>