<template>
<main id="settings">
  <div class="container">
  <div class="row d-flex justify-content-center align-items-center">
  <div class="col-sm-7 col-lg-6">
    <h3 class="pb-4">Settings</h3>
    <div class="card p-4">
      <h6 class="pb-3">Profile</h6>

      <a href="#" class="text-capitalize">edit profile</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">change password</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">customize country</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">customize category</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">feedback</a>
      <p class="text small">Update your information</p>   

      <p class="text-capitalize font-weight-bold pt-4 auth">authorization</p> 

        <div class="pt-3 d-flex justify-content-between align-items-center">
          <div class="pr-2">
            <p class="text-capitalize">newsletter subscription</p>
            <p class="text small"> Subscribe to receive article digest of your interest</p>
          </div>   
           <div >
            <button type="button" class="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
              <div class="square"></div>
            </button>
          </div>
        </div> 

        <div class="pt-3 d-flex justify-content-between align-items-center">
          <div>
            <p>Browser Push Notifications</p>
            <p class="text small"> Receive article digest</p>
          </div>   
           <div>
            <button type="button" class="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
              <div class="square"></div>
            </button>
          </div>
        </div>  

        <div class="hr"></div>

        <div class="d-flex justify-content-between align-items-center">
          <div>
            <p class="text-capitalize">Become a Content Creator</p>
            <p class="text small mb-2">Publish your article to the world</p>
            <a href="" class="text-capitalize">know more</a>
          </div>   
           <div>
            <button type="button" class="btn btn-sm btn-primary text-capitalize">apply</button>
          </div>

        </div> 
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
  @import './Settings';
</style>

