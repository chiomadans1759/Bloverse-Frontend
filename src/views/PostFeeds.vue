<template>
  <main class="post-feeds">
    <div class="container">
      <TrendingCard/>
    </div>

    <section class="container">
      <div class="post-feeds-category" id="post-feeds-category">
        <div class="row">
          <div class="col-md-2">
            <v-select
              :options="general.countries"
              label="name"
              placeholder="Select country"
              v-model="country"
              v-if="allow"
              @input="filterCountry">
            </v-select>
          </div>

          <div class="col-md-8" style="margin-top: -0.8rem;">
            <ul class="list-inline cat-list">
              <li class="list-inline-item" v-for="category in filteredCatList" :key="category.id">
                <a
                  href="#"
                  :class="{ 'active': category.name == $store.state.general.activeCategory.name }"
                  @click.prevent="filterCategory(category.id, category.name)"
                  style="font-family: 'Montserrat', sans-serif;"
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
                    <a
                      href="#"
                      @click.prevent="filterCategory(cat.id, cat.name)"
                      :class="{ 'active': cat.name == $store.state.general.activeCategory.name }"
                    >{{cat.name}}</a>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2" style="margin-top: -0.8rem;">
            <ul class="list-inline" id="layout-select">
              <li class="list-inline-item">
                <a
                  href="#"
                  :class="{'active': general.activeFeedLayout == 'grid'}"
                  @click.prevent="toggleLayout('grid')">
                  <i class="fal fa-grip-horizontal fa-1x"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="#"
                  :class="{'active': general.activeFeedLayout == 'stack'}"
                  @click.prevent="toggleLayout('stack')">
                  <i class="far fa-square-full fa-1x"></i>
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
import { mapState } from "vuex";
import { Row, Col, Card } from "iview";
import vSelect from "vue-select";
import DisplayFeeds from "@/components/DisplayFeeds.vue";
import TrendingCard from "@/components/TrendingCard.vue";

export default {
  name: "FeedsSection",
  components: { Row, Col, Card, vSelect, DisplayFeeds, TrendingCard },
  watch: {
    general: {
      handler: function(newItem) {
        this.allow = true;
      },
      deep: true
    }
  },
  data() {
    return {
      allow: false,
      show_more: false,
      other_cats: {},
      country: {
        id: ""
      },
      current_category: ""
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

    filterCountry(id) {
      this.$store.dispatch("getAllPublishedPosts", {
        category: this.general.activeCategory.id || "",
        country: this.country.id
      });
    },

    filterCategory(id, name) {
      this.current_category = id;
      this.$store.dispatch("getAllPublishedPosts", {
        category: id,
        country: ""
      });
      this.general.activeCategory = { id, name };
    },

    toggleLayout(layout) {
      this.$store.state.general.activeFeedLayout = layout;
    },

    stickyCat() {
      let cat_section = document.getElementById("post-feeds-category");
      if (window.pageYOffset >= 586) {
        cat_section.classList.add("post-feeds-category-sticky");
      } else if (window.pageYOffset < 586) {
        cat_section.classList.remove("post-feeds-category-sticky");
      }
    }
  },
  created() {
    window.onscroll = () => {
      this.stickyCat();
    };
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

      // return "all categories";
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
.post-feeds {
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden !important;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 10rem;
}

.post-feeds-category {
  margin: 3rem 0rem;
}

.post-feeds-category-sticky {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 0;
  width: 100%;
  z-index: 1000;
  height: 4rem;
  background-color: #f5f5f5;
  padding: 1rem 7.5rem;
  border-bottom: 1px solid #eeeeee;
}

.post-feeds-category select {
  background: #e4e4e4;
  border-radius: 0px;
}

.post-feeds-category .list-inline {
  padding-top: 1rem;
}

.post-feeds-category .list-inline .list-inline-item {
  margin-right: 1rem;
}

.post-feeds-category .list-inline .list-inline-item a {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  text-transform: capitalize;
}

.post-feeds-category .list-inline .list-inline-item a.active,
.post-feeds-category .list-inline .list-inline-item a:hover {
  border-bottom: 2px solid #2f80ed;
  text-decoration: none !important;
  color: #000000 !important;
}

.post-feeds-category .list-inline .list-inline-item:last-child a:hover {
  border-bottom: none;
}

.post-feeds-category #layout-select {
  float: right;
}

#layout-select a {
  color: rgba(0, 0, 0, 0.3);
  font-size: 24px !important;
  margin-top: -1rem;
}

#layout-select a:hover,
#layout-select a.active {
  color: #333333;
  border-bottom: none;
}

@media only screen and (max-width: 980px) {
  .post-feeds-category-sticky {
    height: 5gitrem;
    padding: 1rem;
  }

  .post-feeds-category .v-select .dropdown-toggle {
    border: 0px !important;
    border-bottom: 1px solid #cccccc;
    border-radius: 0px;
  }

  .post-feeds-category .cat-list {
    margin-top: -3rem;
  }

  .post-feeds-category .list-inline .list-inline-item {
    margin-right: 0.5rem;
  }

  .post-feeds-category #layout-select {
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

.dropdown-card a.active,
.dropdown-card a:hover {
  color: #2f80ed;
  text-decoration: none !important;
}
</style>

<style>
.v-select .dropdown-toggle .clear {
  display: none !important;
}

.dropdown-toggle:after {
  display: none !important;
}
</style>
