<template>
  <Header id="header">
    <Icon @click.native="handleIconClick" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
    <Row id="items-wrapper" type="flex" justify="space-between" align="middle">
      <Col><Icon type="navicon-round" color="#E0E0E0"></Icon></Col>
      <Col span="12"><Input icon="ios-search" placeholder="Search"></Input></Col>
      <Col><Icon type="android-notifications-none" color="#BDBDBD"></Icon></Col>
      <Col>
        
        <Avatar icon="person" /> &nbsp; <span>Jackman Welsh</span>
        <Dropdown>
          <Icon type="md-arrow-dropdown" />
          <DropdownMenu slot="list">
            <DropdownItem >Profile</DropdownItem>
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
    data(){
      return {
        collapsed: false
      }
    },
    methods: {
      logout: function(){
        /*this.clearSession();
        localStorage.clear();*/
        this.$router.push('/journalist')
      },
      handleIconClick(){
        this.collapsed = !this.collapsed
        this.$emit('collapsed', this.collapsed)
      }

      //...mapMutations(['clearSession']),
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
  }

  #header #items-wrapper {
    flex: 1 1 auto;
  }
    .rotate-icon{
        transform: rotate(-90deg);
    }
</style>