<template>
  <main>
    <section class="container">
      <div class="category-list">
        <div class="row">
          <div class="col-md-2">
            <v-select
              :options="general.countries"
              label="name"
              placeholder="Select country"
              class="my-select"
              v-model="country"
              id="country-select"
            ></v-select>
          </div>

          <div class="col-md-8">
            <ul class="list-inline cat-list">
              <li class="list-inline-item" v-for="category in filteredCatList" :key="category.id">
                <a
                  href="#"
                  :class="{ 'active': category.name == $store.state.general.activeCategory }"
                  @click.prevent="filterCategory(category.id, category.name)"
                >{{category.name}}</a>
              </li>
              <li class="list-inline-item">
                <a href="#" @click.prevent="showMoreCats">
                  <i class="fa fa-ellipsis-h"></i>
                </a>
              </li>
            </ul>

            <div class="dropdown-card" v-show="show_more == true">
              <div class="row">
                <div class="col-md-6" v-for="cat in other_cats" :key="cat.id">
                  <li>
                    <a href="#" @click.prevent="filterCategory(cat.id, cat.name)">{{cat.name}}</a>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <ul class="list-inline" id="layout-select">
              <li class="list-inline-item">
                <a
                  href="#"
                  :class="{'active': general.activeFeedLayout == 'grid'}"
                  @click.prevent="toggleLayout('grid')"
                >
                  <i class="fa fa-th-large"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="#"
                  :class="{'active': general.activeFeedLayout == 'stack'}"
                  @click.prevent="toggleLayout('stack')"
                >
                  <i class="fa fa-laptop"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <display-feeds></display-feeds>
    </section>
  </main>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
// import { Row, Col, Card } from 'iview';
import { mapState } from "vuex";
import { Row, Col, Card } from "iview";
import vSelect from "vue-select";
import DisplayFeeds from "@/components/DisplayFeeds.vue";

export default {
  name: "FeedsSection",
  components: { Row, Col, Card, vSelect, DisplayFeeds },
  data() {
    return {
      show_more: false,
      other_cats: {},
      country: {}
    };
  },
  methods: {
    showMoreCats() {
      this.other_cats = this.$store.state.general.categories.slice(4);
      if (this.show_more == false) {
        this.show_more = true;
      } else if (this.show_more == true) {
        this.show_more = false;
      }
    },

    filterCategory(id, name) {
      this.$store.dispatch("getAllPublishedPosts", {
        category: id,
        country: ""
      });
      this.$store.state.general.activeCategory = name;
    },

    toggleLayout(layout) {
      this.$store.state.general.activeFeedLayout = layout;
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

      return "all categories";
    },

    countryName() {
      if (this.country) {
        let country = this.general.countries.find(
          cou => cou.id == this.country.id
        );
        return country.name;
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
main {
  margin: 0 auto;
  width: 100%;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.category-list {
  margin: 3rem 0rem;
}

.category-list select {
  background: #e4e4e4;
  border-radius: 0px;
}

.category-list .list-inline {
  padding-top: 1rem;
}

.category-list .list-inline .list-inline-item {
  margin-right: 1rem;
}

.category-list .list-inline .list-inline-item a {
  color: #aaaaaa;
  font-size: 14px;
  text-transform: capitalize;
}

.category-list .list-inline .list-inline-item a.active,
.category-list .list-inline .list-inline-item a:hover {
  border-bottom: 3px solid #2f80ed;
  text-decoration: none !important;
}

.category-list .list-inline .list-inline-item:last-child a:hover {
  border-bottom: none;
}

.category-list #layout-select {
  float: right;
}

#layout-select a:hover,
#layout-select a.active {
  color: #333333;
  border-bottom: none;
}

@media only screen and (max-width: 980px) {
  .category-list #layout-select {
    display: none;
  }
}

.dropdown-card {
  background-color: #ffffff;
  padding: 1rem;
  width: 40%;
  margin-left: 20rem;
  margin-top: 1.5rem;
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
}

.dropdown-card li {
  list-style: none;
  margin: 0.4rem 0rem;
}

.dropdown-card a {
  color: #aaaaaa;
  margin-top: 3rem;
  font-size: 14px;
  line-height: 8px;
}

.dropdown-card a:hover {
  color: #2f80ed;
}
</style>
