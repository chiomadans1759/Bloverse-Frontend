<template>
  <header id="feeds-header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <router-link to="/" class="router-link">
            <img class="logo" src="./../assets/Asset 1.svg" style="height: 40px" />
          </router-link>
        </div>

        <div class="col-auto">
          <login-button class="pt-2 mr-3" />
          <router-link to="/creators" class="btn btn-primary btn-md text-uppercase">
            create content
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Row, Col } from 'iview';
import LoginButton from "./LoginButton"

export default {
  components: { Row, Col, LoginButton }
}
</script>

<style lang="scss" scoped>
@import url('./../assets/css/utility.css');

#feeds-header {
  height: 8rem;
  padding-top: 2rem;
}

.btn-primary {
  background-color: #096DD9 !important;
  color: #ffffff;
  border-radius: 2px;
}
</style>

