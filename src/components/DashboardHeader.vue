<template>
  <Header id="dashboard-header">
    <div class="container">
      <div class="row pt-4">
        <div class="col-md-3" id="brand">
          <img src="@/assets/Asset 1.svg" alt="Bloverse Logo">
          <span class="text-primary text-bold ml-1">bloverse</span>
        </div>

        <div class="col-md-6" id="menu">
          <ul class="list-inline">
            <li class="list-inline-item">
              <router-link to="" :class="{'active': currentRoute == 'journalist-dashboard'}">
                Dashboard
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="" :class="{'active': currentRoute == 'create'}">
                Create content
              </router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="" :class="{'active': currentRoute == ''}">
                My content
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-3" id="author-dropdown">
          <div id="author">
            <img src="https://via.placeholder.com/300/09f/fff.png" alt="Author's profile image">
            <span class="ml-1">{{name}}</span>
          </div>
        </div>
      </div>
    </div>
  </Header>

</template>

<script>
import { Row, Col, Icon, Input, Avatar, Dropdown, DropdownMenu, DropdownItem } from 'iview';
import { mapState, mapActions } from 'vuex'

export default {
  components: { Row, Col, Icon, Input, Avatar, Dropdown, DropdownMenu, DropdownItem },
  data(){
    return {
      rotateIcon: '',
      collapsed: false
    }
  },
  computed: {
    ...mapState(['auth']),

    name(){
      let { firstName, lastName } = this.auth.loggedInUser; 
      return firstName + ' ' + lastName;
    },

    currentRoute() {
      let route = this.$route.name
      return route
    }	
  },
  methods: {
    ...mapActions([
      'clearSession'
    ]),

    logOut(){
      if(this.clearSession())
        this.$router.push('/creators/login');
    },

    handleIconClick(){
      this.collapsed = !this.collapsed
      this.$emit('collapsed', this.collapsed)
    }
  }
}
</script>

<style>
#dashboard-header {
  height: 6rem;
  font-family: "Montserrat", sans-serif;
}

#dashboard-header #brand img {
  width: 25px;
  height: 40px;
  margin-top: -1rem;
}

#dashboard-header #brand span {
  font-size: 24px;
}

#dashboard-header #menu li {
  padding: 0.5rem 2rem;
}

#dashboard-header #menu li a {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.54);
}

#dashboard-header #menu li a.active {
  border-bottom: 2px solid #096DD9;
}

#dashboard-header #author-dropdown #author {
  float: right;
}

#dashboard-header #author-dropdown img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-top: -0.3rem;
}

#dashboard-header #author-dropdown span {
  font-size: 14px;
}
</style>

<style>
@media only screen and (max-width: 980px) {
  #dashboard-header #menu,
  #dashboard-header #author-dropdown {
    display: none;
  }
}
</style>
