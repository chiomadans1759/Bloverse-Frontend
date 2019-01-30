<template>
  <div id="choose-country">
    <ul class="row d-flex flex-wrap">
      <li v-for="(country, index) in countryData" :key="index" class="col-6 col-md-4 col-lg-4 col-xl-4 mb-3">
        <div>
          <div class="card p-0">
            <div class="country-img-wrapper" @click="addToCountries(country.name)">
              <span id="cat-span" class="overlay" v-show="$store.state.consumers.selectedCountries.includes(country.name)">
                <div class="circle"></div>
                  <i class="fal fa-check fa-1x overlay-icon"></i>
              </span>
              <img :src="country.imgURL" alt="" class="countryname">
            </div>
            <p class="p-2">{{country.name}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div> 
</template>

<script>
import countryData from '@/fixtures/country';
import { mapActions } from 'vuex'

export default {
  components: { countryData },
  data () {
    return {
      countryData,
      countries:[]
    }
  },
  methods: {
    ...mapActions(["addToCountries"])
  }
  
}
</script>

<style lang="scss" scoped>
@import './ChooseCountry.scss';
</style>
