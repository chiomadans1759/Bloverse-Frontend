<template>
  <div id="links-wrapper">
   <router-link class="router-link" :to="`/journalist/${auth.loggedInUser.userName}/dashboard`">
     <Icon class="icon" type="ios-home"></Icon>
   </router-link>
   <router-link class="router-link" :to="`/journalist/${auth.loggedInUser.userName}/posts/create`">
   	 <Icon class="icon" type="ios-document"></Icon>
   </router-link>
   <router-link class="router-link" :to="`/journalist/${auth.loggedInUser.userName}/posts`">
   	 <Icon class="icon" type="logo-rss"></Icon>
   </router-link>
  </div>
</template>


<script>
  import { Icon } from 'iview';
  import { mapState } from 'vuex';

  export default {
  	components: { Icon },
    computed: {
      ...mapState([
        'auth'
      ])
    }
  } 

</script>


<style>
  #links-wrapper {
  	position: relative;
  	top: 100px;
  	display: flex;
  	flex-direction: column;
  	height: 240px;
  	justify-content: space-between;
  }

  #links-wrapper .router-link-active {
    border-left: 4px solid var(--primary);
    color: #828282 !important;
  }

  #links-wrapper .router-link {
    color: #BDBDBD;
    display: flex;
    height: 20%;
    width: 100%;
  }

  #links-wrapper .router-link .icon {
    margin: auto;
  }

  .icon {
    font-size: 35px;
  }

</style>