<template>
  <div class="region-container">
     <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" />
    <div class="content">
      <div class="container">
        <div class="row">
          
          <div class="col-md-2"></div>
          <div class="col-12 col-md-8 col-sm-8 col-lg-8">
            <h3>Select Your Favourite Country</h3>
            <h5>Selected <b>{{selected2.length}}</b> countries</h5>
            <br />
            <div class="row">
               <div class="col-6 col-md-4 col-sm-4 col-lg-4" v-for="(item) in countries" :key="item.id"  :class="{highlight:selected2.includes(item.id)}" @click="selected2.includes(item.id) ? selected2.splice(selected2.indexOf(item.id), 1) : selected2.push(item.id)">
                <div class="card">
                  <img src="'@/assets/'+item.image_id +'.svg'" alt="">
                  <p>{{item.country_name}}</p>
                </div>
              </div>

            
            </div>
            <br><br><br>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>

</template>
<script>
import TheFooter from '@/components/TheFooter';
import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  name:'Region',
  data(){
    return{
      countries:[
        {
          "id": 0 , 
          "image_id":"UK",
          "country_name": "UK"
        },
        {
          "id": 1 , 
          "image_id":"france",
          "country_name": "France"
        },
        {
          "id": 2 , 
          "image_id":"canada",
          "country_name": "Canada"
        },
        {
          "id": 3 , 
          "image_id":"germany",
          "country_name": "Germany"
        },
        {
          "id": 4 , 
          "image_id":"ghana",
          "country_name": "Ghana"
        },
        {
          "id": 5 , 
          "image_id":"australia",
          "country_name": "Australia"
        },
        {
          "id": 6 , 
          "image_id":"india",
          "country_name": "India"
        },
        {
          "id": 7 , 
          "image_id":"ireland",
          "country_name": "Ireland"
        },
        {
          "id": 8 , 
          "image_id":"kenya",
          "country_name": "Kenya"
        },
        {
          "id": 9 , 
          "image_id":"itali",
          "country_name": "Itali"
        },
        {
          "id": 10 , 
          "image_id":"mexico",
          "country_name": "Mexico"
        },
        {
          "id": 11 , 
          "image_id":"kenya",
          "country_name": "Kenya"
        },
        {
          "id": 12 , 
          "image_id":"SA",
          "country_name": "South Africa"
        },
        {
          "id": 13 , 
          "image_id":"nigeria",
          "country_name": "Nigeria"
        },
        {
          "id": 14 , 
          "image_id":"UAE",
          "country_name": "UAE"
        },
        {
          "id": 15 , 
          "image_id":"US",
          "country_name": "US"
        },
        {
          "id": 16 , 
          "image_id":"singapore",
          "country_name": "Singapore"
        },
      ],
      selected: undefined,
      selected2: [],
      showNavigations: false,
      showBackArrow: true,
    }
  },
  components:{
    TheFooter,
    Navbar
  },
  methods:{
    addToCountry(key){
      this.countries.unshift(key)
    }
  }
}
</script>

<style lang="scss" scoped="true">
  @import './RegionPage.scss';
</style>

