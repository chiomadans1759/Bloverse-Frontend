<template>
  <main class="country-card p-4 p-sm-3"
    :class="{'card': !hideCardClass }"
  >
    <div class="header d-flex justify-content-between ">
      <h5><strong>Country</strong></h5>
      <span class="border rounded-circle edit-icon">
        <i class="fal fa-edit icon"></i>
      </span>
    </div>
    <div class="mt-1">
      <p class="country-title">Lorem ipsum dolor sit amet</p>
      <div class="country-list d-flex flex-wrap mt-2">
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <span class="flag-icon flag-icon-mx rounded-circle"></span>
          <span class="pl-2">Mexico</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <span class="flag-icon flag-icon-fr rounded-circle"></span>
          <span class="pl-2">France</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <span class="flag-icon flag-icon-gh rounded-circle"></span>
          <span class="pl-2">Ghana</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <span class="flag-icon flag-icon-ke rounded-circle"></span>
          <span class="pl-2">Kenya</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 d-flex justify-content-center align-items-center">
          <span class="flag-icon flag-icon-ng rounded-circle"></span>
          <span class="pl-2">Nigeria</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 d-flex justify-content-center align-items-center">
          <span class="flag-icon flag-icon-gb rounded-circle"></span>
          <span class="pl-2">UK</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    hideCardClass: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
@import './CountryCard';
</style>
