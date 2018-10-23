<template>
  <section id="img-display" :style="{height, width}">
  	<image-chooser :show="displayChooser" @closeModal="displayChooser=false" @selectImage="handleImageSelected" />
  	<div class="img-wrapper" @mouseover="imageHover = true" @mouseleave="imageHover = false">
  	  <img v-if="currImage" :src="currImage" :alt="alt">
  	  <div v-else  style="display: flex; width: 100%; height: 100%">
        <h2 style="margin: auto">NO IMAGE</h2>
  	  </div>
  	  <div v-if="canEdit" id="activate-upload" v-show="imageHover" @click="displayChooser = true">
        <div style="margin: auto; display: flex; flex-direction: column; align-items: center;">
          <Icon type="ios-camera"></Icon>
          <h3 v-if="currImage">Click to Change Photo</h3>
          <h3 v-else>Click to Upload Photo</h3>
        </div>
  	  </div>
  	</div>
  </section>
</template>


<script >
  import { Icon } from 'iview';
  import ImageChooser from './ImageChooser.vue'
  export default {
  	props: ['value', 'canEdit', 'alt', 'height', 'width'],
  	components: {ImageChooser, Icon },
  	data: function() {
  	  return {
  	  	displayChooser: false,
  	  	imageHover: false,
  	  	currImage: this.value
  	  } 
  	},
    methods: {
      handleImageSelected(evt){
        this.currImage = evt;
        this.$emit('input', evt);
      }

    }
  }
</script>


<style scoped>

  section#img-display {
    background: white;
    border: .1px solid grey;
  }


  .img-wrapper {
    height: 100% !important;
    width: 100% !important;
    position: relative;
  }

  .img-wrapper img {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
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