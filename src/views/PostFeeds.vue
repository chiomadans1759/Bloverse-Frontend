<template>
  <main>
    <section class="container">

    </section>
  </main>
</template>


<script>
import { mapState, mapActions } from 'vuex'
import { Row, Col, Card } from 'iview';
import vSelect from 'vue-select';
import FeedCard from '../components/FeedCard.vue';

export default {
  data: function() {
    return {
      category: '',
      country: ''
    }
  },
  name: 'FeedsSection',
  components: { Row, Col, Card, FeedCard, vSelect },
  computed: {
    ...mapState([
      'general'
    ]),
    categoryName(){
      if(this.category){
        let category = this.general.categories.find(cat => cat.id == this.category.id)
        return category.name;
      }

      return 'all categories'
        
    },
    countryName(){
      if(this.country){
        let country = this.general.countries.find(cou => cou.id == this.country.id)
        return country.name;
      }

      return 'all countries'
        
    },
    postExists(){
      return this.general.publishedPosts.length > 0;
    },
  },
  watch: {
    category: async function(val){
      let category = this.category ? this.category.id : ''
      let country = this.country ? this.country.id : ''
      await this.getAllPublishedPosts({category, country});
    },
    country: async function(val){
      let category = this.category ? this.category.id : ''
      let country = this.country ? this.country.id : ''
      await this.getAllPublishedPosts({category, country});
    }
  },
  methods: {
    ...mapActions(['getAllPublishedPosts'])
  },
  async created () {
    // fetch the data when the view is created and the data is
    // already being observed
    let { category, country } = this;
    await this.getAllPublishedPosts({category, country});
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

.container {
  background-color: black;
}
</style>
