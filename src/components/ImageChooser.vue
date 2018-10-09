<template>
  <section id="img-upload">
    <header>
     <h4>Image Upload</h4>
     <Icon @click="image = null" size="large" type="trash-a" v-if="image"></Icon>
    </header>
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
            :style="{ color: areaColor, fontSize: '25px', fontWeight: 400, marginTop: '2rem' }"
          >Drag and drop Image here</h5>
          <p class="my-2">Or</p>
          <input type="file" id="fileElem" accept="image/*" @change="handleFiles($event.target.files)">
          <label class="button" for="fileElem">Browse</label>
        </form>
      </div>
    </div>
    <footer>
      <Button color="red darken-1 white--text" @click.native="$emit('cancel')">EXIT</Button>
      <Button color="green darken-1 white--text" v-if="image" :disabled="!image" @click.native="uploadFile" >OK</Button> 
    </footer>
  </section>
</template>

<script>

  import { Icon, Button } from 'iview';

  export default {
    components: { Icon, Button },
    data: function(){
      return {
        areaColor: '#90A0B3',
        image: null,
        cloudinary: {
          uploadPreset: 'pspvcsig',
          apiKey: '967987814344437',
          cloudName: 'naera'
        },
      }
    },
    computed: {
      clUrl: function() {
        return `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/upload`  
      },
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
        this.handleFiles(files);
      },
      handleFiles: function(files){
        var reader = new FileReader();
        reader.onload = (e) => this.image = e.target.result;
        reader.readAsDataURL(files[0]);  
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
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #0078FF;
    padding: 10px 16px;
  } 
  
  #fileElem {
    display: none;
  }
</style>
