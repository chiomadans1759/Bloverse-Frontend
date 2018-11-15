<template>
  <section class="my-section">
    <Loading v-if="general.loading" message="Getting Feeds" id="bloading" />
    <Row :gutter="24" class="body" v-else :style="{marginTop: '50px', marginBottom: '50px'}">
      <template v-if="postExists || category || country">
      <Row>
        <Col span="6"><p id="feedsTitle">Happening Now</p></Col>
        <Col span="4" style="margin-left: 20px;">
            <Select v-model="category" placeholder="Choose categories" id="categories">
              <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
        </Col>
        <Col span="4">           
           <Select v-model="country" placeholder="Choose Country" id="country">
              <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{item.name}}</Option>
            </Select>
        </Col>
      </Row>
      <template v-if="postExists">
        <Col :xs="24" :sm="8" v-for="post in general.publishedPosts" :key="post.id" :style="{marginTop: '20px'}">
          <FeedCard :post="post"  />
        </Col>
      </template>
      <p v-else>Oops!!! We cannot find a post for {{categoryName}} in {{countryName}}</p>
      </template>
      <h1 class="landing" v-else>
        <span>Coming Soon!</span>
        <br /> 
        Are you a journalist? Click <router-link to="/creators">here to start writing for Bloverse</router-link>
      </h1>
    </Row>
  </section>
</template>


<script>
  import { mapState, mapActions } from 'vuex'
  import { Row, Col, Card, Select, Option } from 'iview';
  import FeedCard from '../components/FeedCard.vue';
  import Loading from '../components/Loading.vue';
  export default {
    data: function() {
      return {
        category: '',
        country: ''
      }
    },
    name: 'FeedsSection',
    components: { Row, Col, Card, FeedCard, Loading, Select, Option },
    computed: {
      ...mapState([
        'general'
      ]),
      categoryName(){
        if(this.category){
          let category = this.general.categories.find(cat => cat.id == this.category)
          return category.name;
        }

        return 'all categories'
        
      },
      countryName(){
        if(this.country){
          let country = this.general.countries.find(cou => cou.id == this.country)
          return country.name;
        }

        return 'all countries'
        
      },
      postExists(){
        return this.general.publishedPosts.length > 0;
      }
    },
    watch: {
      category: async function(val){
        let { category, country } = this;
        await this.getAllPublishedPosts({category, country});
      },
      country: async function(val){
        let { category, country } = this;
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

<style>
#feedsTitle {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 50px;
}

.landing{
 text-align:center;
 margin-top:120px;
}


.landing span{
 font-weight: 800;
 font-size:70px;  
}

@media only screen and (max-width: 600px) {
  
}
</style>
