<template>
  <textarea v-model="value"></textarea>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["value", "options"],
  mounted() {
    var vm = this,
      // use jquery temporary
      options = $.extend(true, {}, this.tinymceOptions); // eslint-disable-line no-undef

    // make an deep copy of options;should not modify tinymceOptions
    options.selector = undefined;
    options.target = vm.$el; // use options.target instand of options.selector
    var oldSetup = options.setup || function() {};

    options.setup = function(editor) {
      //Decorate origni one
      oldSetup(editor);

      // Bind keyup
      editor.on("keyup", function(e) {
        // update model value;
        var value = editor.getContent();
        // Dom to model,this was a problem,when input in editor ? it will focus in the first line first word;
        vm.$emit("input", value); // who recieve this event?
      });

      editor.on("blur", function() {
        vm.allowSetContent = true;
      });

      editor.on("focus", function() {
        vm.allowSetContent = false;
      });
    };
    tinymce.PluginManager.add("twitter_url", function(editor, url) {
      // eslint-disable-line no-undef
      var icon_url =
        "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter-s.png";

      editor.on("init", function(args) {
        this.editor_id = args.target.id;
      });
      editor.addButton("twitter_url", {
        text: false,
        icon: true,
        image: icon_url,

        onclick: function() {
          editor.windowManager.open({
            title: "Twitter Embed",

            body: [
              {
                type: "textbox",
                size: 40,
                height: "100px",
                name: "twitter",
                label: "twitter"
              }
            ],
            onsubmit: function(e) {
              var tweetEmbedCode = e.data.twitter;

              $.ajax({
                // eslint-disable-line no-undef
                url: "https://publish.twitter.com/oembed?url=" + tweetEmbedCode,
                dataType: "jsonp",
                async: false,
                success: function(data) {
                  // $("#embedCode").val(data.html);
                  // $("#preview").html(data.html)
                  tinyMCE.activeEditor.insertContent(
                    // eslint-disable-line no-undef
                    '<div class="div_border" contenteditable="false">' +
                      '<img class="twitter-embed-image" src="' +
                      icon_url +
                      '" alt="image" />' +
                      data.html +
                      "</div>"
                  );
                },
                error: function(jqXHR, exception) {
                  var msg = "";
                  if (jqXHR.status === 0) {
                    msg = "Not connect.\n Verify Network.";
                  } else if (jqXHR.status == 404) {
                    msg = "Requested page not found. [404]";
                  } else if (jqXHR.status == 500) {
                    msg = "Internal Server Error [500].";
                  } else if (exception === "parsererror") {
                    msg = "Requested JSON parse failed.";
                  } else if (exception === "timeout") {
                    msg = "Time out error.";
                  } else if (exception === "abort") {
                    msg = "Ajax request aborted.";
                  } else {
                    msg = "Uncaught Error.\n" + jqXHR.responseText;
                  }
                  alert(msg);
                }
              });
            }
          });
        }
      });
    });

    tinymce.init(options).then(function(editors) {
      // eslint-disable-line no-undef
      vm.editor = editors[0];
      vm.setup(vm.editor);
    });
  },
  watch: {
    value: function(content) {
      if (this.editor && this.allowSetContent) {
        // setContent will let editor focus in first line and first world
        this.editor.setContent(content);
      }
    },
    "general.tinyMiceValue": function(content) {
      this.editor.setContent(content);
    }
  },

  computed: {
    ...mapState(["general"])
  },
  data() {
    return {
      editor_id: "",
      tinymceOptions: {
        selector: "textarea",
        height: 200,
        theme: "modern",
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview hr anchor pagebreak",
          "searchreplace wordcount visualblocks visualchars code fullscreen",
          "insertdatetime media nonbreaking save table contextmenu directionality",
          "emoticons template paste textcolor colorpicker textpattern imagetools codesample toc twitter_url"
        ],
        toolbar1:
          "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2:
          "print preview media | forecolor backcolor emoticons | codesample | twitter_url",

        valid_elements: "+*[*]",

        extended_valid_elements:
          "+iframe[width|height|name|align|class|frameborder|allowfullscreen|allow|src|*]," +
          "script[language|type|async|src|charset]" +
          "img[*]" +
          "embed[width|height|name|flashvars|src|bgcolor|align|play|loop|quality|allowscriptaccess|type|pluginspage]" +
          "blockquote[dir|style|cite|class|id|lang|onclick|ondblclick" +
          "|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout" +
          "|onmouseover|onmouseup|title]",
        content_css: [
          "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
          "//www.tinymce.com/css/codepen.min.css"
        ],
        image_title: true,
        // enable automatic uploads of images represented by blob or data URIs
        automatic_uploads: true,
        // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
        // images_upload_url: 'postAcceptor.php',
        // here we add custom filepicker only to Image dialog
        file_picker_types: "image",

        file_picker_callback: function(cb, value, meta) {
          var input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");

          input.onchange = function() {
            var file = this.files[0];

            var reader = new FileReader();
            reader.onload = function() {
              // Note: Now we need to register the blob in TinyMCEs image blob
              // registry. In the next release this part hopefully won't be
              // necessary, as we are looking to handle it internally.
              var id = "blobid" + new Date().getTime();
              var blobCache = tinymce.activeEditor.editorUpload.blobCache; // eslint-disable-line no-undef
              var base64 = reader.result.split(",")[1];
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
    };
  },
  methods: {
    setup: function(editor) {
      editor.on("init", function(args) {
        this.editor_id = args.target.id;
      });
    }
  }
};
</script>
