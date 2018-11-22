<template>
  <WithHeader>
    <section id="doc-section">
      <header id="doc-section-header">
        <h1>{{title}}</h1>
        <p v-html="about"></p>
      </header>
      <section id="doc-section-content">
        <div>
          <slot></slot>
        </div>
        <Row id="links" type="flex" justify="space-between">
          <Col>
            <router-link to="/faq">Previous</router-link>
          </Col>
          <Col>
            <router-link to="/rules">Next</router-link>
          </Col>
        </Row>
      </section>
    </section>
  </WithHeader>
</template>


<script>
import { Row, Col } from 'iview';
import WithHeader from './WithHeader'

export default {
  props: ['title', 'about'],
  components: { Row, Col, WithHeader }
}


</script>

<style scoped>
  #doc-section {
    margin-top: 120px;
    font-family: "Open Sans";
  }

  #doc-section-header {
    background-color: var(--primary);
    color: #FFFFFF;
    padding: 2.5rem 10rem;
  }

  #doc-section-content {
    margin: 5rem 10rem;
    min-height: 538px;
    background: #FFFFFF;
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.15);
    padding: 2rem 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 5px solid var(--primary);

  }


  @media screen and (max-width:801px){

    #doc-section-header {
      padding: 2.5rem 4rem;
    }

    #doc-section-content {
      margin: 5rem 4rem;
      min-height: 538px;
      background: #FFFFFF;
      box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.15);
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

    }
  }
</style>
