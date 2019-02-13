<template>
  <main id="bl-actions">
    <div class="bg-white p-4">
      <div class="row mb-3">
        <div class="col-8">
          <h6 class="text-primary"><i class="fal fa-rocket"></i> Posts</h6>
          <p class="text-muted mt-2">Update your information</p>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <span class="badge badge-primary">4</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-8">
          <router-link to="/creators/drafts"><h6 class="text-primary"><i class="far fa-edit"></i> Drafts</h6>
          <p class="text-muted mt-2">Update your information</p>
          </router-link>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <span class="badge badge-primary">4</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-8">
          <router-link to="/creators/trash">
            <h6 class="text-primary"><i class="fal fa-trash-alt"></i> Trash</h6>
            <p class="text-muted mt-2">Update your information</p>
          </router-link>
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
  @import './CreatorProfileActionsCard';
</style>
