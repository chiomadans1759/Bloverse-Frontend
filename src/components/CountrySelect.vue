<template>
    <div class="country-container">
        <Row class="country-wrapper" :gutter="16">
            <Col id="country-col" v-for="(flag, index) in countryFlags" :key="index" :sm="24" :md="8">
                <div @click="addToCountries(flag.name)">
                    <Card id="country-card">
                        <Row>
                            <Col span="8" id="card-img">
                                <Img :src="flag.imgURL" />
                            </Col>
                            <Col span="4" id="country-name">
                                <h3>{{flag.name}}</h3>
                                <ion-icon name="checkmark-circle" 
                                        id="icon-circle"
                                        v-show="$store.state.consumers.selectedCountries.includes(flag.name)"></ion-icon>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Col>
        </Row> 
    </div>
</template>

<script>
import { Row, Col, Card } from "iview";
import { mapActions } from "vuex";
import countryFlags from "../countryFlags.js";

export default {
  components: { Row, Col, Card },
  data() {
    return {
      countryFlags
    };
  },
  methods: {
    ...mapActions(["addToCountries"])
  }
};
</script>

<style>
.country-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#country-col {
  margin-bottom: 20px;
}

#country-card {
  cursor: pointer;
  padding: 0px !important;
  width: 100%;
  height: 10rem !important;
}

#card-img {
  height: 10rem !important;
}

#card-img img {
  width: 100% !important;
  height: 100% !important;
}

#country-name {
  float: right;
  width: 40% !important;
  height: 100% !important;
  height: 10rem !important;
  padding-top: 4rem;
}

#icon-circle {
  float: right;
  margin-top: 2rem;
  margin-right: 1rem;
  font-size: 24px;
  color: #2f80ed;
}
</style>

