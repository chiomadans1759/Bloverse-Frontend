<template>
  <header class="header-nav">
    <Row class="header-row" type="flex" justify="space-between" align="middle">
         <router-link to="/"><span id="headerText">Bloverse</span></router-link>
      <Col class="header-icons">
      <ion-icon name="home" id="home-icon"></ion-icon>&nbsp;Home &nbsp;&nbsp;&nbsp;
      <ion-icon name="flame" id="home-icon1"></ion-icon>&nbsp; <span id="tIcon">Trending</span>
      </Col>
      <Col>
        <Input v-model="value" placeholder="Search" style="width: 400px" />
      </Col>
      <router-link to="/" id="headerWrite">Write</router-link>
      <Col span="4"> 
      <v-select :options="general.countries" label="name" placeholder="Country*" class="my-select" v-model="country">
            </v-select>
      <!-- <span style="font-weight: bold; font-size: 16px;">Country:</span>&nbsp;&nbsp;
        <Dropdown v-model="selected">
            {{selected.countrty}}
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem v-for="country in general.countries" :key="country.id" :value="country.name">{{country.name}}</DropdownItem>
        </DropdownMenu>
    </Dropdown> -->
      </Col>
      <Col>
        <ion-icon name="person" id="userIcon"></ion-icon>
      </Col>
    </Row>
 </header>
</template>
<script >
import { Icon, Row, Col, Button, Input } from "iview";
import { mapState } from 'vuex';
import vSelect from 'vue-select';

export default {
  components: { Icon, Row, Col, Button, Input, vSelect},
  data() {
    return {
      value: '',
      selected: {}
    }
  },
  computed: {
    ...mapState(['general'])
  },
  methods: {
    onClick(selected) {

    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');

.header-nav {
    background: #F2F2F2;
    height: 70px;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.25);
    padding: 15px 40px 10px 40px;
}
.header-row {
  width: 90%;
  margin: 0 auto;
}

.logo {
  height: 40px;
}
#headerText {
     font-size: 30px;
     font-weight:  bold;
     letter-spacing: 3px;
     font-family: 'Raleway', sans-serif;
     color: rgb(25, 109, 235);
}
#home-icon {
    height: 12.75px;
    color: #363C44;
    font-size: 16px;
    line-height: 16px;
}
#home-icon1 {
    height: 16px;
    color: #2F80ED;
    font-size: 16px;
    line-height: 16px;
}
#header-text {
    color: #222222;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0em;
    margin-top: -30px;
}
#tIcon {
    color: #2F80ED;
}
#headerWrite {
    font-size: 18px;
    color: #222222;

}
#userIcon{
    height: 16px;
    width:16px;
    color: #222;
}
.header-icons{
    display: flex;
    justify-content: space-between;
}

</style>
