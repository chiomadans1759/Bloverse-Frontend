<template>
  <main id="entity-section" class="scrollbar">
    <div class="d-flex align-items-center mb-4 item active">
      <img src="./../../assets/category/category3.jpg" class="rounded-circle mr-3">
      <div>
          <p class="m-0">Entity Name</p>
          <div class="count d-flex align-items-center">
            <span><i class="fal fa-id-card"></i>758</span>
            <span class="divider-circle"></span>
            <span><i class="fal fa-comment-dots"></i>234</span>
          </div>
      </div>      
    </div>
    <div class="mb-3" v-for="i in 7" :key="i">
      <div class="item d-flex align-items-center ">
        <img src="./../../assets/category/category7.jpg" class="rounded-circle mr-3">
        <div class="scroll">
            <p class="m-0">Entity Name</p>
            <div class="count">
              <span><i class="fal fa-id-card"></i>758</span>
              <span class="circle mx-2"></span>
              <span><i class="fal fa-comment-dots"></i>234</span>
            </div>
        </div> 
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import './EntitySection'
</style>
