<template>
  <main>
    <section class="container">
      <div class="category-list">
        <div class="row">
          <div class="col-md-2">
            <select class="form-control">
              <option>COUNTRY</option>
            </select>
          </div>

          <div class="col-md-8">
            <ul class="list-inline cat-list">
              <li class="list-inline-item" v-for="category in filteredCatList" :key="category.id">
                <a href="">{{category.name}}</a>
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
                  <a href="">{{cat.name}}</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <ul class="list-inline" id="layout-select">
              <li class="list-inline-item">
                <a href="">
                  <i class="fa fa-th-large"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="">
                  <i class="fa fa-laptop"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
// import { mapState, mapActions } from 'vuex'
// import { Row, Col, Card } from 'iview';
// import vSelect from 'vue-select';
import FeedCard from '../components/FeedCard.vue';

export default {
  name: 'FeedsSection',
  components: { FeedCard },
  data() {
    return {
      show_more: false,
      other_cats: {}
    }
  },
  methods: {
    showMoreCats() {
      this.other_cats = this.$store.state.general.categories.slice(4);
      if(this.show_more == false) {
        this.show_more = true;
      }else if(this.show_more == true) {
        this.show_more = false;
      }
    }
  },
  computed: {
    filteredCatList() {
      if(this.$store.state.general.categories) {
        return this.$store.state.general.categories.slice(0, 4);
      }
    }
  }
}
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
  background: #E4E4E4;
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

.category-list .list-inline .list-inline-item a.active {
  border-bottom: 3px solid #2F80ED;
}

.category-list #layout-select {
  float: right;
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
  -webkit-box-shadow: 4px 8px 24px -8px rgba(0,0,0,0.5);
  -moz-box-shadow: 4px 8px 24px -8px rgba(0,0,0,0.5);
  box-shadow: 4px 8px 24px -8px rgba(0,0,0,0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
}

.dropdown-card a {
  color: #aaaaaa;
  /* margin: 5rem 1rem; */
  margin-top: 3rem;
  font-size: 14px;
  line-height: 8px;
  letter-spacing: 2px;
}
</style>
