<template>
  <Header id="header">
    <Row id="items-wrapper" type="flex" justify="space-between" align="middle">
      <Col><Icon type="navicon-round" color="#E0E0E0"></Icon></Col>
      <Col span="12"><Input icon="ios-search" placeholder="Search"></Input></Col>
      <Col><Icon type="android-notifications-none" color="#BDBDBD"></Icon></Col>
      <Col>
        
        <Avatar icon="person" /> <span>Jackman Welsh</span>
        <Dropdown>
          <Icon type="md-arrow-dropdown" />
          <DropdownMenu slot="list">
            <DropdownItem >驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided @click.native="logout">Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row> 
  </Header>

</template>

<script>
  import { Row, Col, Icon, Input, Avatar, Dropdown, DropdownMenu, DropdownItem } from 'iview';
  import { mapMutations } from 'vuex'
  export default {
    components: { Row, Col, Icon, Input, Avatar, Dropdown, DropdownMenu, DropdownItem },
    methods: {
      logout: function(){
        this.clearSession();
        localStorage.clear();
        window.location = '/';
      },

      ...mapMutations(['clearSession']),
    }
  }
</script>

<style>
  #header {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    transform: rotate(0deg);
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  #header #items-wrapper {
    flex: 1 1 auto;
  }
</style>