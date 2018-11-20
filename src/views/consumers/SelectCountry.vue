<template>
    <section class="country-section">
        <p id="regText">Choose your region</p>
       <Row >
            <Col>
              <CountrySelect />
            </Col>
        </Row>

    </section>
</template>

<script>
import { Row, Col, Card } from 'iview';
import CountrySelect from '../../components/CountrySelect.vue';

export default {
  components: { Row, Col, Card, CountrySelect }
    
}
</script>

<style>
.country-wrapper {
    margin: auto;
    width: 80%;
}
#regText {
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
    color: #4F4F4F;
    margin: 4rem 0 2rem 8rem;

}


@media screen and (max-width: 360px) {
  #regText {
   margin: 4rem 0 2rem 5rem;
  }
}
@media screen and (max-width: 600px) {
    #regText {
   margin: 4rem 0 2rem 5rem;
  }
}
</style>
