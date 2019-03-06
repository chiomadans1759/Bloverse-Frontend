<template>
  <main id="feed-header">
    <div class="px-lg-4">
      <div class="row">
        <div class="col">
          <span class="hidden-md mr-2 hamburger-menu" data-toggle="modal" data-target="#modalVerticalLeft">
            <i class="fa fa-bars"></i>
          </span>
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
            <span class="text-secondary">beta</span>
          </router-link>
        </div>

        <div class="col-auto pt-1 hidden-xs">
          <div v-if="auth.loggedInUser">
            <button class="btn btn-link text-dark" style="margin-top: -0.3rem;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="avatar avatar-sm">
                <img :src="auth.loggedInUser.image_url" alt class="avatar-img rounded-circle">
              </div>
              <span class="ml-2">
                {{auth.loggedInUser.first_name}}&nbsp;{{auth.loggedInUser.last_name}}
              </span>
              <i class="fal fa-caret-down"></i>
            </button>

            <div class="dropdown-menu">
              <router-link
                :to="`/creators/${auth.loggedInUser.username}/dashboard`"
                :class="{'dropdown-item': true, 'text-primary': currentRoute == 'journalist-dashboard'}">
                <span>Dashboard</span>
              </router-link>
              <router-link
                :to="`/creators/${auth.loggedInUser.username}/posts`"
                :class="{'dropdown-item': true, 'text-primary': currentRoute == 'all-posts'}">
                <span>My Posts</span>
              </router-link>
              <router-link
                :to="`/creators/${auth.loggedInUser.username}/posts/create`"
                :class="{'dropdown-item': true, 'text-primary': currentRoute == 'create-post'}">
                <span>Create Content</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
            </div>
          </div>

          <div class="float-right" v-else>
            <router-link
              to="/creators/photocontest"
              class="btn btn-link text-uppercase text-dark"
            >photo contest</router-link>
            <login-button class="mr-2 text-uppercase text-dark"/>
            <router-link to="/creators" class="btn btn-primary text-uppercase">create</router-link>
          </div>
        </div>

        <div class="col-auto hidden-md pt-1">
          <router-link to="/creators" class="btn btn-primary text-uppercase">create</router-link>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="modal fade" id="modalVerticalLeft" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-vertical" role="document">
        <div class="modal-content">
          <feed-side-bar />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex"
import LoginButton from "@/components/LoginButton"
import FeedSideBar from "@/components/FeedSideBar.vue"

export default {
  name: "feed-header",
  components: { LoginButton, FeedSideBar },
  data() {
    return {
      allow: false,
      other_cats: {},
      country: "",
      active_country: {
        name: "",
        id: ""
      },
      active_category: {
        name: "All",
        id: ""
      }
    };
  },
  watch: {
    "general.countries": {
      handler: function(newItem) {
        this.allow = true;
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(["filterPosts", "clearSession"]),

    filterCountry(country) {
      this.active_country = country;
      this.filterPosts({
        category: this.active_category.id || "",
        country: this.country.id
      });
    },

    filterCategory(id, name) {
      this.current_category = id;
      this.filterPosts({
        prevCategory: this.active_category,
        category: id,
        country: this.active_country.id
      });
      this.active_category = { id, name };
    },

    showMoreCats() {
      this.other_cats = this.general.categories;
    },

    logout() {
      this.clearSession()
    }
  },
  computed: {
    ...mapState(["general", "auth"]),

    categoryName() {
      if (this.category) {
        let category = this.general.categories.find(
          cat => cat.id == this.category.id
        );
        return category.name;
      }
    },

    filteredCatList() {
      if (this.$store.state.general.categories) {
        return this.$store.state.general.categories.slice(0, 4);
      }
    },

    currentRoute() {
      let route = this.$route.name;
      return route;
    }
  }
};
</script>

<style scoped>
#feed-header {
  width: 100%;
  height: 10vh;
  position: fixed;
  background-color: #ffffff;
  border-bottom: 1px solid #f5f5f5;
  padding-top: 0.6rem;
  z-index: 1000;
  top: 0;
  /* font-family: 'Times New Roman', Times, serif; */
}

#feed-header .cat-list a {
  font-size: 14px;
}

#feed-header .cat-list .dropdown-menu {
  width: 20rem !important;
  border-radius: 1px;
}

#feed-header .btn {
	padding: 0.3rem 1rem;
	border-radius: 2px;
}

.modal-backdrop {
  position: fixed;
  z-index: 1040;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000 !important;
}

@media only screen and (min-width: 981px) {
  #feed-header .hidden-md {
    display: none;
  }
}

@media only screen and (max-width: 980px) {
  #feed-header {
    padding: 1rem;
  }

  #feed-header .hamburger-menu {
    font-size: 24px;
  }

  #feed-header .hidden-xs {
    display: none;
  }

  #feed-header .modal-content {
    z-index: 10000 !important;
  }
}
</style>
