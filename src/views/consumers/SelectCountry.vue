<template>
    <section class="country-section">
        <p id="regText">Choose your region</p>
       <Row type="flex" justify="space-between" class="country-wrapper">
            <Col class="entity" v-for="i in 15" :key="i" span="8">
              <router-link to="">
                <Card id="card-wrapper"></Card>
              </router-link>
            </Col>

          </Row>

    </section>
</template>

<script>
import { Row, Col, Card } from 'iview';

export default {
  components: { Row, Col, Card }
    
}
</script>

<style>
.country-wrapper {
    margin: auto;
    width: 980px;
}
#regText {
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
    color: #4F4F4F;
    margin: 4rem 0 2rem 10rem;

}
#card-wrapper {
    height:100px;
    width: 300px;
    margin-bottom: 35px;
}
</style>
