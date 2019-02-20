<template>
  <main id="feed-header">
    <div class="px-lg-4">
      <div class="row">
        <div class="col">
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo.svg" style="height: 40px">
            <span>beta</span>
          </router-link>
        </div>

        <div class="col-auto pt-1">
          <div class="float-right">
            <router-link
              to="/creators/photocontest"
              class="btn btn-link text-uppercase text-dark"
            >photo contest</router-link>
            <login-button class="mr-3 text-uppercase text-dark"/>
            <router-link to="/creators" class="btn btn-outline-dark btn-md text-uppercase">create</router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LoginButton from "./LoginButton";

export default {
  name: "feed-header",
  components: { LoginButton },
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
    ...mapActions(["filterPosts"]),

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
    }
  },
  computed: {
    ...mapState(["general"]),

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
  z-index: 3000;
  top: 0;
}

#feed-header .cat-list a {
  font-size: 14px;
}

#feed-header .cat-list .dropdown-menu {
  width: 20rem !important;
  border-radius: 1px;
}
</style>
