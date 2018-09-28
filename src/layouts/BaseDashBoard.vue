<template>
  <Layout id="wrapper">
    <Sider id="sidebar" hide-trigger collapsible :collapsed-width="100" v-model="isCollapsed">
      <DashboardSidebarLinks />
    </Sider>
    <Layout id="main">
      <DashboardHeader @logout="logOut" />
      <Content id="content">
        <router-view :paths="currentPath" name="location"></router-view>
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  import { Layout, Icon, Sider } from 'iview';
  import DashboardHeader from '../components/DashboardHeader.vue';
  import DashboardSidebarLinks from '../components/DashboardSideBarLinks.vue';
  export default {
    components: { Layout, Icon, Sider, DashboardHeader, DashboardSidebarLinks }
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
    padding: 1rem 6rem;
  }


  #sidebar {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    margin-right: .25rem;
  }
</style>