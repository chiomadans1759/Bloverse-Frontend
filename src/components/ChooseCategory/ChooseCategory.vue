<template>
  <div id="choose-category">
    <ul class="row d-flex flex-wrap">
      <li v-for="(category, index) in categoryData" :key="index" class="col-6 col-md-4 col-lg-4 col-xl-4 mb-3">
        <div>
          <div class="card p-0">
            <div class="category-img-wrapper" @click="addToCategories(category.name)" id="cat-img">
              <span id="cat-span" class="overlay" v-show="$store.state.consumers.selectedCategories.includes(category.name)">
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
import categoryData from '@/fixtures/category';
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

<style lang="scss" scoped>
@import './ChooseCategory.scss';
</style>
