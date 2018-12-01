<template>
  <main>
    <section class="container">
     <display-feeds></display-feeds>
    </section>
  </main>
</template>


<script>
import { mapState,} from 'vuex'
import { Row, Col, Card } from 'iview';
import vSelect from 'vue-select';
import DisplayFeeds from '@/components/DisplayFeeds.vue';

export default {
  data: function() {
    return {
      category: '',
      country: ''
    }
  },
  name: 'FeedsSection',
  components: { Row, Col, Card, vSelect, DisplayFeeds },
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
 
}
</style>
