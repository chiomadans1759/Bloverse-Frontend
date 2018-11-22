<template>
    <section class="country-section">
        <p id="regText">Choose your region</p>
       <Row >
            <Col>
              <CountrySelect />
            </Col>
            <Col id="select-button">
                <Button type="primary" id="btn-style">Next</Button>
            </Col>
            <Col>
                <RecentlyRead />
            </Col>
        </Row>

    </section>
</template>

<script>
import { Row, Col, Card, Button } from 'iview';
import CountrySelect from '../../components/CountrySelect.vue';
import RecentlyRead from '../../components/RecentlyRead.vue';

export default {
  components: { Row, Col, Card, Button, CountrySelect, RecentlyRead }
    
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
#select-button {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
#btn-style {
    font-size: 15px;
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
