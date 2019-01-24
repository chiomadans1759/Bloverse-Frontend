<template>
  <div id="choose-category">
    <ul class="row d-flex flex-wrap">
      <li v-for="(category, index) in categoryData" :key="index" class="col-6 col-md-4 col-lg-4 col-xl-4 mb-3">
        <div>
          <div class="card p-0">
            <div class="category-img-wrapper">
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

export default {
  components: { categoryData },
  data () {
    return {
      categoryData
    }
  }
  
}
</script>

<style scoped>

#choose-category .card{
  width: 100%;
  height: auto;
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

</style>
