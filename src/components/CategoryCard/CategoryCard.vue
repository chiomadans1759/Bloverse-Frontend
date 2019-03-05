<template>
  <main class="category-card" :class="{ 
    card: !hideCardClass, 'p-4 p-sm-3': addPadding,
  }">
    <div class="header d-flex justify-content-between ">
      <h5 :class="titleStyle"><strong>{{title}}</strong></h5>
      <span class="border rounded-circle edit-icon" v-if="showEditIcon">
        <i class="fal fa-edit"></i>
      </span>
    </div>
    <div class="mt-1">
      <p class="category-title" v-if="showSubtitle">Lorem ipsum dolor sit amet</p>
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
    },
    titleStyle: {
      type: String,
      default: "",
      required: false,
    },
    title: {
      type: String,
      required: false,
      default: "Interest"
    },
    showEditIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
    showSubtitle: {
      type: Boolean,
      required: false,
      default: false,
    },
    addPadding: {
      type: Boolean,
      required: false,
      default: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import './CategoryCard'
</style>
