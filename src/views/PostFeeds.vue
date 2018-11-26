<template>
  <section class="main-feed-section">
    <div class="feed-body">
      <template v-if="postExists || category || country">
      <div id="feedcontainer">
        <div class="category-area">
            <v-select :options="general.categories" class="pa-4 mb-4"  label="name" placeholder="CATEGORY" v-model="category">
            </v-select>
            </div>
        <div class="country-area">           
           <v-select :options="general.countries" label="name" placeholder="COUNTRY" class="my-select" v-model="country">
            </v-select>
            </div>
      </div>
      <h2 id="feedstitle">Happening Now</h2>
      <template v-if="postExists">
        <div id="card-section" :style="{marginTop: '50px',background:'#FCFCFC',width:'100%'}">
        <Row id="card-rows" gutter="20">
        <Col :xs="24" :sm="8"   v-for="post in general.publishedPosts" :key="post.id">
          <FeedCard :post="post"  />
        </Col>
        </Row>
        </div>
      </template>
      <p class = "noMatch" v-else>Oops!!! We cannot find a post for {{categoryName}} in {{countryName}}</p>
      </template>
      <h1 class="landing" v-else>
        <span>Coming Soon!</span>
        <br /> 
        Are you a Content Creator? Click <router-link to="/creators">here to start writing for Bloverse</router-link>
      </h1>
    </div>
  </section>
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

<style>
.main-feed-section{
  width:100%;
  
}
#feedcontainer{
 
  background-color:;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 20px;
  margin: 0 auto !important; /* required */ 
  z-index: 1;
  width: 70%;
 border-bottom: 2px solid rgb(236, 230, 230);
  
}
.category-area{
  width:40%;
 
}

.country-area{
  width:40%
}
#feedcontainer .v-select{
   margin:0 !important;
   padding: 0 !important
}
#feedcontainer .v-select .dropdown-toggle {
  height:60px !important;
  border:none;
   background-color: white;
   padding: 0 !important;
   border:2.5px solid #2f80ed;
   border-radius: 10px;
}
#feedcontainer .v-select .dropdown-toggle .clear{
  color:#2f80ed;
  position: absolute;
  top:30%;
  right:20%

}
#feedcontainer .v-select .open-indicator{
  position: absolute;
  top:37%;
  right:5%;

}
#feedcontainer .v-select .open-indicator::before{
  border-color:#2f80ed !important;
}

#feedcontainer ::placeholder{
  display: flex;
  justify-content: center;
  color:#2f80ed;
  font-size:20px;
  font-weight: 500;
  padding-left:20px
}
#feedcontainer .v-select input[type=search], .v-select input[type=search]:focus {
   padding-left:40px;
   color:#2f80ed;
   font-size: 18px;
   text-transform: capitalize

}
.landing{
  text-align:center;
  margin-top:120px;
}
.noMatch{
  text-align:center;
  font-size:1.5rem;
  padding-top:4rem;
}
.landing span{
  font-weight: 800;
  font-size:70px;  
}
#feedcontainer .v-select.single .selected-tag{
  color:#2f80ed;
  font-size: 20px;
  padding-left:35px
}
#feedcontainer .v-select.single.open .selected-tag{
  padding-left:40px
}
#feedstitle{
width: 150px;
margin: auto;
text-align: center;
padding: 15px 0;
border-bottom: 2px solid rgb(236, 230, 230);
font-weight: 600
}

#feedcontainer .v-select .dropdown-menu::-webkit-scrollbar
{
	width: 12px;
	background-color:#ecf0f1
}

#feedcontainer .v-select .dropdown-menu::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #2f81ed8a;
  opacity: 0.9px
}
#feedcontainer .v-select .dropdown-menu{
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 16px
}
#feedcontainer .v-select .dropdown-menu li a{
  color:black !important;
  padding:4px 8px
}
#feedcontainer .v-select .dropdown-menu li a:hover{
  color:white !important;
  
}
#card-section{
  display:flex;
  justify-content: center;
}
#card-rows{
  
  width:90%;

}

@media screen and (max-width: 320px) {
#feedcontainer{
  flex-direction: column;
    justify-content: space-evenly;
    
    }
.category-area{
  width:100%;
  margin-bottom: 10px
  
 
}
.country-area{
  width:100%;
 
}
#feedcontainer ::placeholder{
  display: flex;
  justify-content: center;
  color:#2f80ed;
  font-size:20px;
  font-weight: 500;
  padding-left:5px
}
#card-rows{
  width:100%
}

}

@media screen and (max-width: 600px) {
  #feedcontainer{
  flex-direction: column;
  justify-content: space-evenly
}
.category-area{
  width:100%;
   margin-bottom: 10px
 
}
.country-area{
  width:100%;
}
#feedcontainer ::placeholder{
  display: flex;
  justify-content: center;
  color:#2f80ed;
  font-size:20px;
  font-weight: 500;
  padding-left:5px
}
#card-rows{
  width:100%
}

}
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)  { 
  body{
    font-size: 14px
  }
}


</style>
