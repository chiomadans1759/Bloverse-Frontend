<template>
  <main id="bl-draft-item" class="card mt-4 bl-draft-item">
    <div class="card-body bl-draft-item-body">
      <div class="card-title title">
        <div class="title--text">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm bg-white mb-3"
          >Category</button>
          <p class="font-weight-bold description">
            <router-link to="/posts/rere">
              Lorem ipsum dolor sit amet, vel accumsan iberaviss extttttt, ea nec elaboraret interpret
              Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
              Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
            </router-link>
          </p>
          <p class="col-4 col-sm-3 username d-none d-sm-block mt-3">
            <span class="time">1 min ago</span>
          </p>
        </div>
      </div>
    </div>
    <div class="border-top bl-draft-item-footer">
      <div class="d-flex justify-content-end px-4 py-2 actions">
        <p class="mx-3 edit">
          <span class="border rounded-circle icons">
            <i class="fal fa-edit"></i>
          </span>
        </p>
        <p class="delete">
          <span class="border rounded-circle icons">
            <i class="fal fa-times"></i>
          </span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "PostCard",
};
</script>

<style lang="scss" scoped>
@import "./DraftItemCard.scss";
</style>
