<template>
  <div class="col-md-12">
    <div class="mother-div">
      <section id="img-display" style="height:400px; width: 100%;">
        <image-chooser
          :show="displayChooser"
          @closeModal="displayChooser=false"
          @selectImage="handleImageSelected"
        />
        <div class="img-wrapper" @mouseover="imageHover = true" @mouseleave="imageHover = false">
          <i class="fal fa-file-upload fa-4x"></i>
          <p>Add Picture</p>
          <img v-if="currImage" :src="currImage" :alt="alt">
          <div v-else style="display: flex; width: 100%; height: 100%">
            <h2 style="margin: auto">NO IMAGE</h2>
          </div>
          <div
            v-if="canEdit"
            id="activate-upload"
            v-show="imageHover"
            @click="displayChooser = true"
          >
            <div style="margin: auto; display: flex; flex-direction: column; align-items: center;">
              <Icon type="ios-camera"></Icon>
              <h3 v-if="currImage">+</h3>
              <h3 v-else>Click to Upload Photo</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script >
import { Icon } from "iview";
import ImageChooser from "./ImageChooser.vue";

export default {
  props: ["value", "canEdit", "alt", "height", "width"],
  components: { ImageChooser, Icon },
  data: function() {
    return {
      displayChooser: false,
      imageHover: false,
      currImage: this.value
    };
  },
  watch: {
    value(val) {
      this.currImage = val;
    }
  },
  methods: {
    handleImageSelected(evt) {
      this.currImage = evt;
      this.$emit("input", evt);
    }
  }
};
</script>

<style scoped>
  .mother-div {
    display: flex;
    width: 100%;
  }

  section#img-display {
    background: #aca7a7;
    border: 0.1px solid grey;
    width: 100%;
  }

  .img-wrapper {
    height: 100% !important;
    width: 100% !important;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .img-wrapper img {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    object-fit: cover;
  }

  .img-wrapper p {
    text-align: center;
    color: black;
    font-size: 20px;
    font-weight: 600;
  }

  .img-wrapper .fal {
    font-size: 20px;
  }

  .img-wrapper #activate-upload {
    position: absolute;
    color: white;
    background: rgba(50, 50, 50, 0.5);
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    cursor: pointer;
    display: flex;
  }
</style>
