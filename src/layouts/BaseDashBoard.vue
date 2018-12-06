<template>
  <Layout id="wrapper" class="layout">
    <Sider id="sidebar" ref="1" hide-trigger collapsible :width="100" :collapsed-width="0" v-model="isCollapsed">
      <DashboardSidebarLinks />
    </Sider>
    <Layout id="main">
      <DashboardHeader @collapsed="isCollapsed = $event" />
      <Content class="container" id="content">
        <transition name="fade" mode="out-in">
          <router-view :paths="currentPath" name="location"></router-view>
          <router-view></router-view>
        </transition>
      </Content>
      <feeds-footer />
    </Layout>
  </Layout>
</template>

<script>
import { Layout, Icon, Sider } from 'iview';
import DashboardHeader from '../components/DashboardHeader.vue';
import DashboardSidebarLinks from '../components/DashboardSideBarLinks.vue';
import FeedsFooter from '@/components/FeedsFooter.vue';

export default {
  data () {
    return {
      currentPath: '',
      isCollapsed: true
    }
  },
  components: { Layout, Icon, Sider, DashboardHeader, DashboardSidebarLinks, FeedsFooter },
}
</script>

<style scoped>
#wrapper {
  min-height: 100vh;
  background-color: #F2F2F2;
}

#main {
  background-color: #F2F2F2;
}

#content {
  background-color: #F2F2F2;
  padding: 3rem 0rem 10rem;
}


#sidebar {
  background-color: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin-right: .25rem;
}

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.menu-icon{
    transition: all .3s;
}

.rotate-icon{
    transform: rotate(-90deg);
}

.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}

.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
</style>
