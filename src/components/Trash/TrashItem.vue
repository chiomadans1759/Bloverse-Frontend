<template>
  <main id="bl-trashItem" class="card bl-trashItem" :class="customClass">
    <div class="card-body bl-trashItem-body">
      <div class="card-title row title">
        <div class="col-9 row title--text">
          <span class="col-3">category</span>
          <p class="col-5 col-sm-6 font-weight-bold description">
              Lorem ipsum dolor sit amet, vel accumsan iberaviss extttttt, ea nec elaboraret interpret
              Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
              Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
          </p>
          <p class="col-4 col-sm-3 username d-none d-sm-block">
            <span class="time">16 hrs ago</span>
          </p>
        </div>
        <div class="col-3 title--image" :style="{backgroundImage: 'url(' + trashImage + ')'}"></div>
      </div>

      <div class="card-text row actions justify-content-between">
        <div class="col-5 col-sm-0 views d-block d-sm-none">
          <span class="time">16 hrs ago</span>
        </div>
        <div class="col-7 col-sm-12 row others justify-content-end">
          <p class="undo">
            <i class="fal fa-undo"></i>
            <span class="text d-none d-sm-inline">Undo</span>
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
import trashImage from "../../assets/trashImage.jpg";

export default {
  name: "PostCard",
  props: {
    customClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      trashImage,
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "./TrashItem.scss";
</style>
