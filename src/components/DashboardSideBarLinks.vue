<template>
  <div class="links-wrapper">
    <router-link class="router-link" :to="`/creators/${auth.loggedInUser.userName}/dashboard`">
      <Icon class="icon" type="ios-home"></Icon>
    </router-link>
      <span class="icons">Home</span> 
      <router-link class="router-link" :to="`/creators/${auth.loggedInUser.userName}/posts/create`">
        <Icon class="icon" type="ios-document"></Icon>
      </router-link>
      <span class="icons1">Create posts</span>
      <router-link class="router-link" :to="`/creators/${auth.loggedInUser.userName}/posts`">
        <Icon class="icon" type="logo-rss"></Icon>
      </router-link>
      <span class="icons2">My Posts</span>
  </div>
</template>


<script>
import { Icon } from "iview";
import { mapState } from "vuex";

export default {
  components: { Icon },
  computed: {
    ...mapState(["auth"])
  }
};
</script>


<style>
.links-wrapper {
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: space-between;

}

.links-wrapper .router-link-active {
  border-left: 4px solid var(--primary);
  color: #828282 !important;
}

.links-wrapper .router-link {
  color: #bdbdbd;
  display: flex;
  height: 20%;
  width: 100%;
}

.links-wrapper .router-link .icon {
  margin: auto;
}

.icon {
  font-size: 25px;
}

.icons {
  margin-top: -40px;
  margin-left: 30px;
  font-size: 15px;
}

.icons1 {
  margin-top: -40px;
  margin-left: 10px;
  font-size: 15px;
}

.icons2 {
  margin-top: -40px;
  margin-left: 20px;
  font-size: 15px;
}
@media screen and (max-width: 360px) {
  .ivu-layout-sider-collapsed{
  /* width: 0px !important; 
min-width: 0px !important;
max-width: 0px !important;
flex:0 0 0px !important;  */
}  
.ivu-layout-sider{
/* border:1px solid red;
width: 100px !important; 
min-width: 30% !important;
max-width: 50% !important;
flex:0 0 100px !important;  */

}
#sidebar{
/* border:1px solid red;
width: 100px !important; 
min-width: 30px !important;
max-width: 50px !important;
flex:0 0 100px !important;  */
}
.links-wrapper span{
display: none
}
#content{
  padding: 1rem 2rem !important;
}

}
  @media screen and (max-width: 600px) {

.ivu-layout-sider-collapsed{
  /* width: 0px !important; 
min-width: 0px !important;
max-width: 0px !important;
flex:0 0 0px !important;  */
}  
#sidebar{

width: 0px !important;
min-width: 0px !important; 
flex:0 0 45px !important; 
}

.links-wrapper span{
display: none
}
#content{
  padding: 1rem 2rem !important;
}
}
</style>
