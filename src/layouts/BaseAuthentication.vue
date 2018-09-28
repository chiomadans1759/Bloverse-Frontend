<template>
  <WithHeader>
    <Row type="flex" justify="center">
      <slot></slot>
    </Row>
  </WithHeader>
</template>

<script>
  import { Row } from 'iview';
  import WithHeader from './WithHeader';
  export default {
    components: {
      WithHeader,
      Row
    }
  }
</script>


<style>
  /* AUTHENTICATION ROUTE */


  .auth-section {
    margin: 50px 0 150px 0;
  }

  .auth-section #page-title {
    text-align: center;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 3rem;
  }

  .auth-form #form-instruction {
    font-weight: normal;
    color: #4F4F4F;
    margin-bottom: 1rem;
  }

  .my-input input{
    padding: 20px 0 20px 30px;
    font-size: 16px;
    border: 1px solid #BDBDBD;
  }

  .my-select .ivu-select-selection{
    padding: 20px 0 20px 30px;
    border: 1px solid #BDBDBD;
    text-align: center;
  }

  .my-select .ivu-select-input{
    bottom: 15px;
    padding-left:0px;
    margin-left:0px;
    font-size: 16px;
  }


  .my-btn {
    color: white !important;
    font-size: 18px !important;
    font-weight: 500 !important;
    width: 100% !important;
  }

  .btn-secondary {
    background-color: #2D9CDB !important;
  }

  .btn-main {
    background-color: #2F80ED !important;
  }

  #btn-social-grp {
    margin: 2rem 0;
  }

  #btn-social-grp > * {
    margin: .5rem 0;
  }


  .btn-social {
    font-size: 14px !important;
  }

  #btn-google{
  background-color: #DB3236;
  }

  #btn-facebook{
  background-color: #3B5998;
  }

  #btn-linkedln{
  background-color: #0077B5;
  }

  #btn-twitter {
  background-color: #1DA1F2;
  }


  .p-or {
    margin: 30px 0;
    color:#BDBDBD;
    font-size: 24px;
    text-align: center;
  }
</style>