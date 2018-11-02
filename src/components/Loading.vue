<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 3s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 50px;
        
    }
</style>


<template>
  <div class="demo-spin-col">
    <Spin fix>
        <Icon type="ios-loading" size=100 class="demo-spin-icon-load"></Icon>
        <div v-if="message">{{message}}...</div>
        <div v-else>Loading...</div>
    </Spin>
  </div>

</template>


<script>
  import { Spin, Icon } from 'iview';
  export default {
    props: ['message'],
    components: { Spin, Icon }
  }

</script>