<template>
  <Modal v-model="show" :closable="false" :mask-closable="false">
    <header slot="header">
     <h4>Image Upload</h4>
    </header>
    <section id="img-upload">
      <div id="wrapper">
        <div id="drop-area" 
          @dragenter.prevent="highLightDropArea" 
          @dragover.prevent="highLightDropArea" 
          @drop.prevent="handleDrop" 
          @dragleave.prevent="removeHighLightFromDropArea"
          :style="{ border: '2px dashed ' + areaColor, width: 'inherit', height: '570px', display: 'flex' }"
        >
          <img :src="image" v-if="image" ref="image" style="height: 100%; width: auto; max-width: 100%" />
          <form v-else class="my-form">
            <Icon type="upload"
              :style="{ color: areaColor, fontSize: '80px'}"
            ></Icon>
            <h5 
              :style="{ color: areaColor, fontSize: '25px', fontWeight: 400  }"
            >Drag and drop Image here</h5>
            <p class="my-2">Or</p>
            <input type="file" id="fileElem" accept="image/*" @change="handleFileSelected($event.target.files)">
            <label class="button" for="fileElem">Browse</label>
          </form>
        </div>
      </div>
      <footer slot="footer" id="img-footer">
      <Button type="error" @click.native="discardModal">DISCARD & EXIT</Button>
      <Button type="warning" :disabled="!image" @click.native="removeImage">Remove Image</Button>
      <Button type="success" :disabled="!image" @click.native="imageOk" >DONE</Button> 
    </footer>
    </section>
  </Modal>
</template>

<script>

import { Icon, Button, Modal } from 'iview';
import Utility from '../utils/Utility.js';

export default {
  components: { Icon, Button, Modal },
  props: ['show'],
  data: function(){
    return {
      areaColor: '#90A0B3',
      image: null
    }
  },
  methods: {
    highLightDropArea: function(){
      this.areaColor = '#FF620C'
    },
    removeHighLightFromDropArea: function(){
      this.areaColor = '#90A0B3'
    },
    handleDrop: function(evt){
      this.removeHighLightFromDropArea();
      let data = evt.dataTransfer;
      let files = data.files;
      this.handleFileSelected(files);
    },
    handleFileSelected(files){
      Utility.readFileToData(files[0], image => {
        this.image = image;
      })
    },
    removeImage(){
      this.image = null;
    },
    discardModal(){
      this.removeImage();
      this.$emit('closeModal');
    },
    imageOk(){
      this.$emit('selectImage', this.image)
      this.discardModal();
    },
    acceptFile: function(){
      this.$emit('file', this.image);
      this.$emit('cancel');
    },
    /*uploadFile: function(){
        this.uploading = true;
        const formData = new FormData()
        formData.append('file', this.image);
        formData.append('upload_preset', this.cloudinary.uploadPreset);
        formData.append('folder', 'bloverse');
        this.$http.post(this.clUrl, formData).then(res => {
          this.uploading = false;
          this.$emit('uploaded', res.data.secure_url);
          this.$emit('cancel');
        }).catch(err => {
          this.uploading = false;
        })
      }*/
  }
}
</script>


<style scoped>

  #img-footer{
    display: flex;
    justify-content: space-between;
  }
   #img-footer button {
     margin-right: 1rem;
     margin-top: 1rem;
     margin-left: 1rem;
   }
  #img-upload {
    padding: 0;
    margin: 0 -16px;
  }
  #wrapper {
    background-color: #E4EBF1;
    min-height: 600px;
    width: 100%;
    padding: 15px; 
  }
  .my-form {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .my-form p {
    margin-top: 0;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
  .my-form .button {
    display: inline-block;
    width: 120px;
    font-size: 14px;
    background: #0078FF;
    color: #FFFFFF;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #0078FF;
    padding: 10px 16px;
  } 
  
  #fileElem {
    display: none;
  }
</style>
