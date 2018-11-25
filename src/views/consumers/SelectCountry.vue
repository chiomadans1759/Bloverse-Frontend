<template>
    <section class="country-section">
        <p id="regText">Choose your region</p>
        <Row>
            <Col>
              <CountrySelect />
            </Col>

            <Col id="select-button">
                <Button @click="goToCat" type="primary" id="submit-countries">SUBMIT</Button>
            </Col>
        </Row>
    </section>
</template>

<script>

import { Row, Col, Card, Button } from "iview";
import CountrySelect from "../../components/CountrySelect.vue";

export default {
  components: { Row, Col, Card, Button, CountrySelect },
  methods: {
    goToCat() {
      this.$router.push("/web/category");
    }
  }
}

</script>

<style>
.country-section {
  padding: 1rem 0rem 5rem;
}
.country-wrapper {
  margin: auto;
  width: 80%;
}
#regText {
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: #4f4f4f;
  margin: 4rem 0 2rem 7rem;
}
#register-button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
#select-button {
  text-align: center;
}
#select-button button {
  margin-top: 3rem;
  height: 3rem;
}

@media screen and (max-width: 360px) {
  #regText {
    margin: 4rem 0 2rem 3rem;
  }
}
@media screen and (max-width: 600px) {
  #regText {
    margin: 4rem 0 2rem 3rem;
  }
}
</style>
