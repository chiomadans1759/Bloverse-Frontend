<template>
  <div class="region-container">
    <div class="top">
      <div>
        <span class="top-left-container">
          <a href="/">
            <i class="fal fa-long-arrow-left fa-2x"></i>
            <span>Back</span>
          </a>
          <router-link to="/" class="router-link">
            <img class="logo" src="@/assets/Logo.svg" />
          </router-link>
        </span>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          
          <div class="col-md-2"></div>
          <div class="col-12 col-md-8 col-sm-8 col-lg-8">
            <h3>Select Your Favourite Country</h3>
            <h5>Selected <b>{{countries.length}}</b> countries</h5>
            <br />
            <div class="row">
              <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/UK.svg" @click="addToCountry('UK')" alt="">
                  <p>UK</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/france.svg" @click="addToCountry('france')" alt="">
                  <p>France</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/canada.svg" @click="addToCountry('canada')" alt="">
                  <p>Canada</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/germany.svg" @click="addToCountry('germany')" alt="">
                  <p>Germany</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/ghana.svg" @click="addToCountry('ghana')" alt="">
                  <p>Ghana</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/australia.svg" @click="addToCountry('australia')" alt="">
                  <p>Australia</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/india.svg" @click="addToCountry('india')" alt="">
                  <p>India</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/ireland.svg" @click="addToCountry('ireland')" alt="">
                  <p>Ireland</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/kenya.svg" @click="addToCountry('kenya')" alt="">
                  <p>Kenya</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/itali.svg" @click="addToCountry('itali')" alt="">
                  <p>Itali</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/mexico.svg" @click="addToCountry('mexico')" alt="">
                  <p>Mexico</p>
                </div>
              </div>
               <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/SA.svg" @click="addToCountry('SA')" alt="">
                  <p>South Africa</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/nigeria.svg" @click="addToCountry('nigeria')" alt="">
                  <p>Nigeria</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/UAE.svg" @click="addToCountry('UAE')" alt="">
                  <p>UAE</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/US.svg" @click="addToCountry('US')" alt="">
                  <p>US</p>
                </div>
              </div>
              <div class="col-6 col-md-4 col-sm-4 col-lg-4">
                <div class="card">
                  <img src="@/assets/singapore.svg" @click="addToCountry('singapore')" alt="">
                  <p>Singapore</p>

                </div>
              </div>
            </div>
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

export default {
  name:'Region',
  data(){
    return{
      countries:[]
    }
  },
  components:{
    TheFooter
  },
  methods:{
    addToCountry(key){
      this.countries.unshift(key)
    }
  }
}
</script>

<<<<<<< HEAD:src/views/general/regionPage/regionPage.vue
<style lang="scss">
  @import './regionPage.scss';
=======
<style lang="scss" scoped="true">
  @import './RegionPage.scss';
>>>>>>> brach out:src/views/consumers/Region/RegionPage.vue
</style>

