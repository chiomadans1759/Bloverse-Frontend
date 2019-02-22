<template>
  <main id="feed-side-bar">
    <section>
      <ul class="list-unstyled">
        <li>
          <router-link to="/">
            <div
              :class="{ 'row': true, 'text-dark': currentRoute != '/', 'text-primary':  currentRoute == '/'}"
            >
              <div class="col-2">
                <i class="fal fa-home"></i>
              </div>

              <div class="col-10">
                <span>Home</span>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/feeds/trending">
            <div
              :class="{ 'row': true, 'text-dark': currentRoute != '/feeds/trending', 'text-primary':  currentRoute == '/feeds/trending'}"
            >
              <div class="col-2">
                <i class="fal fa-fire"></i>
              </div>

              <div class="col-10">
                <span>Trending</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <section>
      <h4 class="section-title">CATEGORIES</h4>

      <ul class="list-unstyled">
        <li v-for="cat in categories" :key="cat.id">
          <div
            :class="{ 'row': true, 'text-primary': active_category.name == cat.name }"
            @click.prevent="filterCategory(cat.id, cat.name)"
            id="click-item"
          >
            <div class="col-2">
              <i class="fal fa-clipboard-list" v-show="cat.name == 'All'"></i>
              <i class="fal fa-business-time" v-show="cat.name == 'Business'"></i>
              <i class="fal fa-graduation-cap" v-show="cat.name == 'Education/Career'"></i>
              <i class="fal fa-music" v-show="cat.name == 'Entertainment'"></i>
              <i class="fal fa-tshirt" v-show="cat.name == 'Fashion'"></i>
              <i class="fal fa-utensils" v-show="cat.name == 'Food'"></i>
              <i class="fal fa-gamepad" v-show="cat.name == 'Gaming'"></i>
              <i class="fal fa-briefcase-medical" v-show="cat.name == 'Health'"></i>
              <i class="fal fa-gavel" v-show="cat.name == 'Law'"></i>
              <i class="fal fa-paw-alt" v-show="cat.name == 'Pet/Animals'"></i>
              <i class="fal fa-camera" v-show="cat.name == 'Photo Contest'"></i>
              <i class="fal fa-landmark" v-show="cat.name == 'Politics'"></i>
              <i class="fal fa-heart" v-show="cat.name == 'Relationships'"></i>
              <i class="fal fa-flask" v-show="cat.name == 'Science'"></i>
              <i class="fal fa-running" v-show="cat.name == 'Sports'"></i>
              <i class="fal fa-desktop" v-show="cat.name == 'Technology'"></i>
              <i class="fal fa-road" v-show="cat.name == 'Travel'"></i>
              <i class="fal fa-ellipsis-h-alt" v-show="cat.name == 'Other'"></i>
            </div>

            <div class="col-10">
              <span>{{cat.name}}</span>
            </div>
          </div>
        </li>
        <li
          class="text-secondary"
          id="show-more"
          @click="categoryList(general.categories.length)"
          v-show="categories.length == 4"
        >
          <i class="fal fa-plus"></i>
          &nbsp;
          <span>Show More</span>
        </li>
        <li
          class="text-secondary"
          id="show-more"
          @click="categoryList(4)"
          v-show="categories.length > 4"
        >
          <i class="fal fa-minus"></i>
          &nbsp;
          <span>Show Less</span>
        </li>
      </ul>
    </section>

    <section>
      <h4 class="section-title">COUNTRIES</h4>

      <ul class="list-unstyled">
        <li v-for="(country, index) in countries" :key="index">
          <div
            :class="{ 'row': true, 'text-primary': active_country.name == country.name }"
            @click.prevent="filterCountry(country)"
            id="click-item"
          >
            <div class="col-2">
              <i class="fal fa-flag" v-show="country.name == 'All'"></i>
              <img
                class="flag-img"
                src="https://www.countryflags.io/au/flat/64.png"
                v-show="country.name == 'Australia'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/cn/flat/64.png"
                v-show="country.name == 'Canada'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/gb/flat/64.png"
                v-show="country.name == 'England'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/fr/flat/64.png"
                v-show="country.name == 'France'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/de/flat/64.png"
                v-show="country.name == 'Germany'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/gh/flat/64.png"
                v-show="country.name == 'Ghana'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/hk/flat/64.png"
                v-show="country.name == 'Hong Kong'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/in/flat/64.png"
                v-show="country.name == 'India'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/ie/flat/64.png"
                v-show="country.name == 'Ireland'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/it/flat/64.png"
                v-show="country.name == 'Italy'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/ke/flat/64.png"
                v-show="country.name == 'Kenya'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/mx/flat/64.png"
                v-show="country.name == 'Mexico'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/nl/flat/64.png"
                v-show="country.name == 'Netherlands'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/ng/flat/64.png"
                v-show="country.name == 'Nigeria'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/ie/flat/64.png"
                v-show="country.name == 'Nothern Ireland'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/pk/flat/64.png"
                v-show="country.name == 'Pakistan'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/mv/flat/64.png"
                v-show="country.name == 'Philippines'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/gb/flat/64.png"
                v-show="country.name == 'Scotland'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/sg/flat/64.png"
                v-show="country.name == 'Singapore'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/za/flat/64.png"
                v-show="country.name == 'South Africa'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/ae/flat/64.png"
                v-show="country.name == 'UAE'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/us/flat/64.png"
                v-show="country.name == 'United States'"
              >
              <img
                class="flag-img"
                src="https://www.countryflags.io/gb/flat/64.png"
                v-show="country.name == 'Wales'"
              >
            </div>

            <div class="col-10">
              <span>{{country.name}}</span>
            </div>
          </div>
        </li>
        <li
          class="text-secondary"
          id="show-more"
          @click="countryList(general.countries.length)"
          v-show="countries.length == 4"
        >
          <i class="fal fa-plus"></i>
          &nbsp;
          <span>Show More</span>
        </li>
        <li
          class="text-secondary"
          id="show-more"
          @click="countryList(4)"
          v-show="countries.length > 4"
        >
          <i class="fal fa-minus"></i>
          &nbsp;
          <span>Show Less</span>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "feed-side-bar",
  data() {
    return {
      allow: false,
      other_cats: {},
      categories: {},
      countries: {},
      active_country: {
        name: "All",
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

    categoryList(number = 4) {
      this.categories = this.general.categories.slice(0, number);
    },

    routeToHome() {
      let path = this.$route.path;
      if (path != "/") {
        this.$router.push("/");
      }
    },

    filterCountry(country) {
      this.active_country.name = country.name;
      this.active_country.id = country.id;
      this.filterPosts({
        category: this.active_category.id || "",
        country: country.id
      });
      this.routeToHome();
    },

    countryList(number = 4) {
      this.countries = this.general.countries.slice(0, number);
    },

    filterCategory(id, name) {
      this.current_category = id;
      this.filterPosts({
        prevCategory: this.active_category,
        category: id,
        country: this.active_country.id
      });
      this.active_category = { id, name };
      this.routeToHome();
    }
  },
  created() {
    this.categoryList();
    this.countryList();
  },
  computed: {
    ...mapState(["general"]),

    currentRoute() {
      return this.$route.path;
    },

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
#feed-side-bar {
  height: 90vh;
  position: fixed;
  background-color: #f5f5f5;
  border-right: 1px solid #eeeeee;
  overflow: hidden;
  padding-top: 1rem;
}

#feed-side-bar:hover {
  overflow-y: scroll;
}

#feed-side-bar section {
  min-height: 5rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eeeeee;
}

#feed-side-bar .section-title {
  font-weight: bold;
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#feed-side-bar ul li {
  font-size: 14px;
  margin-bottom: 1rem;
}

#feed-side-bar .flag-img {
  width: 20px;
  height: 25px;
  margin-top: -0.3rem;
}

#feed-side-bar #show-more {
  cursor: pointer;
}

#feed-side-bar #click-item {
  cursor: pointer;
}

#feed-side-bar #click-item:hover {
  color: #096dd9;
}
</style>

<style scoped>
#feed-side-bar::-webkit-scrollbar {
  width: 1em;
}

#feed-side-bar::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
