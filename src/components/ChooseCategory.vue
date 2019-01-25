<template>
  <div id="choose-category">
    <ul class="row d-flex flex-wrap">
      <li v-for="(category, index) in categoryData" :key="index" class="col-6 col-md-4 col-lg-4 col-xl-4 mb-3">
        <div>
          <div class="card p-0">
            <div class="category-img-wrapper" @click="addToCategories(category.name)" id="cat-img">
              <span class="overlay" v-show="$store.state.consumers.selectedCategories.includes(category.name)">
                <div class="circle"></div>
                  <i class="fal fa-check fa-1x overlay-icon"></i>
              </span>
              <img :src="category.imgURL" alt="" class="categoryname">
            </div>
            <p class="p-2">{{category.name}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div> 
</template>

<script>
import categoryData from '@/category'
import { mapActions } from 'vuex'

export default {
  components: { categoryData },
  data () {
    return {
      categoryData,
      categories:[]
    
    }
  },
  methods: {
    ...mapActions(["addToCategories"])
  }
  
}
</script>

<style scoped>

#choose-category .card{
  width: 100%;
  height: auto;
  cursor: pointer;
}

#choose-category .categoryname{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#choose-category ul{
  list-style-type: none !important;
}

#choose-category ul > li .cat-div:nth-child(3n+0) {
  padding-right: 0 !important;
}

#choose-category .category-img-wrapper {
  position: relative;
  height: 10rem;
  overflow: hidden;
  padding: .25rem .25rem 0;
} 

#choose-category .overlay {
  position: absolute;
  top: -10%;
  right: 5%;
  color: #096DD9;
}

#choose-category .overlay-icon {
  position: absolute;
  right: 36%;
  color: #ffffff;
  top: 49%;
}

#choose-category .circle:before {
  content: ' \25CF';
  font-size: 3rem;
}

</style>
