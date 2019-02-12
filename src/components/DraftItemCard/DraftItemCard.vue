<template>
  <main id="bl-draft-item" class="card bl-draft-item">
    <div class="card-body bl-draft-item-body">
      <div class="card-title row title">
        <div class="col-xs-12 col-sm-12 col-md-9 row title--text">
          <span class="col-3">category</span>
          <p class="col-5 col-sm-6 font-weight-bold description">
            <router-link to="/posts/rere">
              Lorem ipsum dolor sit amet, vel accumsan iberaviss extttttt, ea nec elaboraret interpret
              Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
              Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
            </router-link>
          </p>
          <p class="col-4 col-sm-3 username d-none d-sm-block">
            <span class="time">16 hours ago</span>
          </p>
        </div>
        <div class="d-none col-3 d-md-flex justify-content-around align-items-center flex-wrap">
          <div>
            <a href="#">
              <div class="text-center"><i class="fas fa-edit"></i></div>
              <div>Edit</div>
            </a>
          </div>
          <div>
            <a href="#">
              <div class="text-center"><i class="fas fa-trash-alt"></i></div>
               <div>Delete</div>
            </a>
          </div>
        </div>
      </div>
      <div class="d-md-none card-text row actions justify-content-between">
        <div class="col-5 col-sm-0 views d-block d-sm-none">
          <span class="time">16 hrs ago</span>
        </div>
        <div class="col-7 col-sm-12 row others justify-content-end">
          <p class="mr-3">
            <i class="fal fa-edit"></i>
            <span class="text d-none d-sm-inline">Edit</span>
          </p>
          <p class="delete">
            <i class="fal fa-trash-alt"></i>
            <span class="text d-none d-sm-inline">Delete</span>
          </p>
        </div>
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
