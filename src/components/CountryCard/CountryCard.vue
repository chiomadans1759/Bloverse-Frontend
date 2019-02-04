<template>
  <main class="card country-card p-4 p-sm-3">
    <div class="header d-flex justify-content-between ">
      <h5><strong>Country</strong></h5>
      <span class="icon"><i class="fal fa-edit icon mr-2"></i></span>
    </div>
    <div class="mt-1">
      <p class="country-title">Lorem ipsum dolor sit amet</p>
      <div class="country-list d-flex flex-wrap mt-2">
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <img src="@/assets/mexico.svg" class="country-image rounded-circle " alt="...">
          <span class="pl-2">Mexico</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <img src="@/assets/mexico.svg" class="country-image rounded-circle" alt="...">
          <span class="pl-2">France</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <img src="@/assets/mexico.svg" class="country-image rounded-circle" alt="...">
          <span class="pl-2">Ghana</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 justify-content-center align-items-center">
          <img src="@/assets/mexico.svg" class="country-image rounded-circle" alt="...">
          <span class="pl-2">Kenya</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 d-flex justify-content-center align-items-center">
          <img src="@/assets/mexico.svg" class="country-image rounded-circle" alt="...">
          <span class="pl-2">Nigeria</span>
        </div>
        <div class="country border rounded p-2 my-2 mr-2 d-flex justify-content-center align-items-center">
          <img src="@/assets/mexico.svg" class="country-image rounded-circle" alt="...">
          <span class="pl-2">UK</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CountryCard'
}
</script>

<style lang="scss" scoped>
@import './CountryCard';
</style>
