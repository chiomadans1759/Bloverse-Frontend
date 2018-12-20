<template>
  <BaseDocs
    title="FAQ"
    about="Answers to our most-popular questions: registration, posting articles & more."
  >
    <Row type="flex" justify="space-between">
      <Col>
        <h3 class="">Most Popular FAQs</h3>
      </Col>
      <Col :sm="7" :xs="24">
        <Input placeholder="Search FAQs" />
      </Col>
    </Row> 
    <div class ="toggle-section"> 
      <div class="toggle-select" v-for="(question, index) in questions" :key="index"> 
        <input class="toggle-box" :id="`identifier-${index+1}`" type="checkbox" >
        <label :for="`identifier-${index+1}`">{{question.question}}</label>
        <div v-html="question.answer"></div> 
      </div>
    </div>

  </BaseDocs>
</template>


<script>
import { Row, Col, Input } from 'iview';
import BaseDocs from '../layouts/BaseDocs.vue';
import data from '../data.js';

export default {
  components: { BaseDocs, Row, Col, Input },
  data: function(){
    return {
      questions: data.faq[this.$route.params.person]
    }
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      this.questions = data.faq[to.params.person]
    }
  }

}

</script>

<style scoped>
.toggle-box {
  display: none;
}

.toggle-box + label {
  cursor: pointer;
  display: block;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 19px;
}

.toggle-box + label + div {
  display: none;
  margin-bottom: 10px;
}

.toggle-box:checked + label + div {
  display: block;
  margin-left: 46px;
  font-size: 14px;
  line-height: 19px;
  width: 80%;

}

.toggle-box + label:before {
    background-color: #2F80ED;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    content: "+";
    display: block;
    float: left;
    font-weight: bold;
    height: 20px;
    line-height: 20px;
    margin-right: 25px;
    text-align: center;
    width: 20px;
}

.toggle-box:checked + label:before {
  content: "\2212";
}

.toggle-section{
  margin-top: 30px;
}

    
</style>
