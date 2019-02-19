<template>
  <main id="bl-contest-card">
    <div class="image">
      <img class="img-fluid contest-image" src="@/assets/photo-3.jpg" />
    </div>
    <div class="footer align-middle">
      <div class="row">
        <div class="col-md-12 col-lg-12 d-none d-sm-none d-md-block">
          <div class="row">
            
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-12 col-12">
          <div class="row userdetails">
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 profile-icon-col">
            <img class="img-responsive" src="@/assets/photo-3.jpg" />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-2 username">
              <p>Johndoe</p>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-9 message">
              <p>Greetings to the sun</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-12">
          <div class="row actions">
            <div class="col-lg-3 col-md-3 col-sm-2 col-2 p-0">
            <i class="fal fa-eye icon"></i> 123
            </div>
            <div class="col-lg-3 col-md-3 col-sm-2 col-2 p-0">
              <i class="fal fa-thumbs-up icon"></i> 18
            </div>
            <div class="col-lg-3 col-md-3 col-sm-2 col-2 p-0">
              <i class="fal fa-comment-dots icon"></i> 67
            </div>
            <div class="col-lg-3 col-md-3 col-sm-2 col-2 p-0">
              <i class="fal fa-share icon"></i> 11
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
  @import './ContestCard.scss';
  @import './ContestCard.Responsive.scss';
</style>

