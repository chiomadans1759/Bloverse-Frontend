
<template>
	<textarea v-model="value"></textarea>
</template>

<script>
export default {
  props:["value","options"],
  mounted(){
    var vm=this,
      // use jquery temporary
      options=$.extend(true, {}, this.tinymceOptions); // eslint-disable-line no-undef
    
    // make an deep copy of options;should not modify tinymceOptions
    options.selector=undefined;
    options.target=vm.$el; // use options.target instand of options.selector
    var oldSetup=options.setup||function(){};
    
    options.setup=function(editor){

      //Decorate origni one
      oldSetup(editor);
      
      // Bind keyup
      editor.on("keyup",function(e){
        // update model value;
        var value=editor.getContent();
        // Dom to model,this was a problem,when input in editor ? it will focus in the first line first word;
        vm.$emit("input",value); // who recieve this event?
      });
      
      editor.on("blur",function(){
        vm.allowSetContent=true;
      });
      
      editor.on("focus",function(){
        vm.allowSetContent=false;
      })
    };
    
    tinymce.init(options).then(function(editors){ // eslint-disable-line no-undef
      vm.editor=editors[0];
    })
  },
  watch:{
    value:function(content)
    {
      if(this.editor&&this.allowSetContent)
      {
        // setContent will let editor focus in first line and first world
        this.editor.setContent(content);
      }
    }
  },
  data(){
    return{
      tinymceOptions:{
        selector: 'textarea',
        height: 200,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
        ],
        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',


        image_title: true, 
        // enable automatic uploads of images represented by blob or data URIs
        automatic_uploads: true,
        // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
        // images_upload_url: 'postAcceptor.php',
        // here we add custom filepicker only to Image dialog
        file_picker_types: 'image', 
          
        file_picker_callback: function(cb, value, meta) {
          var input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');

          input.onchange = function() {
            var file = this.files[0];
             
            var reader = new FileReader();
            reader.onload = function () {
              // Note: Now we need to register the blob in TinyMCEs image blob
              // registry. In the next release this part hopefully won't be
              // necessary, as we are looking to handle it internally.
              var id = 'blobid' + (new Date()).getTime();
              var blobCache =  tinymce.activeEditor.editorUpload.blobCache; // eslint-disable-line no-undef
              var base64 = reader.result.split(',')[1];
              var blobInfo = blobCache.create(id, file, base64);
              blobCache.add(blobInfo);
              // call the callback and populate the Title field with the file name
              cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
          };
          input.click();
        }
      }
    }
  }

};
</script>
