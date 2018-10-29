<template>
  <BaseAuthentication>
<Col :sm="18" :md="10" :xs="22" class="auth-section">
  <h1 id="page-title">Welcome to Bloverse</h1>
  <p id="manual-wrapper">
    <router-link to="setup" class="my-btn btn-main" id="btn-manual"> Continue Setup Manually </router-link>
  </p>
  <!-- <h3 id="sub-title">Choose an option to complete your registration</h3>
  <Row type="flex" justify="space-between" id="btn-social-grp">
    <Col :sm="11" :xs="24">
      <Button class="my-btn btn-social" id="btn-google" long> 
        <Icon id="google-icon" type=logo-google />
        Google
      </Button>
    </Col>
    <Col :sm="11" :xs="24"> 
      <Button class="my-btn btn-social" id="btn-facebook" long>Facebook</Button>
    </Col>
    <Col :sm="11" :xs="24">
      <Button class="my-btn btn-social" id="btn-linkedln" long>Linkedln</Button> 
    </Col>
    <Col :sm="11" :xs="24">
      <Button class="my-btn btn-social" id="btn-twitter" long>Twitter</Button>
    </Col>
  </Row>
  <p class="p-or">OR</p>-->
  
</Col>
  </BaseAuthentication>
</template>






<script>
  import BaseAuthentication from '../../layouts/BaseAuthentication';
  import { Button,Row, Col, Icon } from 'iview';
  import { mapState, mapMutations } from 'vuex';

  export default {
    components: { Button, Row, Col, Icon, BaseAuthentication },
    computed: {
      ...mapState([
        'auth'
      ])
    },
    methods: {
      ...mapMutations([
        'setNewUser'
      ])
    },
    beforeRouteLeave (to, from, next) {
      // called when the route that renders this component is about to
      // be navigated away from.
      // has access to `this` component instance.
      let { id: applicant, first_name: firstName, last_name: lastName, email, phone_number: phone, category, country } = this.auth.applicant;
      this.setNewUser({ applicant, firstName, lastName, email, phone, category, country });
      next();
    }
  }
</script>


<style scoped>

#page-title {
  font-weight: normal;
  color: #828282;
}

#sub-title {
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  color: #4F4F4F;
  text-align: center;
}

#manual-wrapper {
  display: flex;
}

#btn-manual {
  flex-grow: 1;
  text-align: center;
  padding: .5rem 0;
  border-radius: 5px;
}


</style>