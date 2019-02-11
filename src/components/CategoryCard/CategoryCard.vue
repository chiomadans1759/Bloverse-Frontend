<template>
  <main class="category-card p-4 p-sm-3" :class="{ card: !hideCardClass }">
    <div class="header d-flex justify-content-between ">
      <h5><strong>Interest</strong></h5>
      <span class="edit-icon"><i class="fal fa-edit mr-2"></i></span>
    </div>
    <div class="mt-1">
      <p class="category-title">Lorem ipsum dolor sit amet</p>
      <div class="category-list d-flex flex-wrap mt-2">
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category One</span>
        </div>
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category Two</span>
        </div>
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category Three</span>
        </div>
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category Four</span>
        </div>
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category Five</span>
        </div>
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category Six</span>
        </div>
        <div class="category border rounded my-1 mr-2 p-2">
          <span>Category Seven</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    hideCardClass: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CategoryCard'
</style>
