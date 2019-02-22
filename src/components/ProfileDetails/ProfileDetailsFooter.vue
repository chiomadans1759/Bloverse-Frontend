<template>
  <main class="row mx-0 profile-details-footer">
    <div class="col-5 col-md-8 px-0 skip">
      <router-link to="/creators/profile" data-dismiss="modal">Skip</router-link>
    </div>
    <router-link type="link" class="btn btn-primary btn-block col-7 col-md-4 complete-profile-btn"
      to="/edit/profile" data-dismiss="modal"
    >
      Complete profile
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'ProfileDetailsFooter'
}
</script>


<style lang="scss" scoped>
 @import './ProfileDetails.scss';
</style>

