<template>
  <main id="publish-page">
    <div class="main-container">
      <nav class="nav container-fluid d-flex justify-content-between align-items-center publish-nav" id="publish-nav">
        <div class="d-flex">
          <button class="btn rounded-circle d-flex justify-content-center go-back" @click="goBack">
          <i class="fal fa-arrow-left back-icon"></i>
        </button>
        <span class="text-muted ml-2 mt-2">Back</span>
        </div>
        <p class="nav-link text-uppercase small" v-if="showThis">saving... to draft</p>
        <button class="btn btn-sm btn-primary-outline preview" @click="showPreview" v-if="showThis">Preview to post</button>
      </nav> 
    </div>
     <div class="container">
       <div class="row">
         <div class="col-lg-1"></div>
        <div class="col-lg-6 text-field">
          <form>
            <div class="form-group">
              <input type="text" class="form-control p-0 one" placeholder="Add a title" autofocus>
            </div>
            </form>
            
            <div class="form-group pb-4">
              <textarea class="mytext" ref="autoText" v-model="textLength" v-if="textArea" @input="textareaResize"></textarea>
            </div>

            <div class="mt-2 icon-wrapper">
            <ul class="text-icons">
            <li>
              <button class="btn rounded-circle d-flex justify-content-center show" v-if="hideMe" @click.prevent="showTextBox">
                <i class="fal fa-font content-icon"></i>
              </button>
            </li>
            <li>
              <Poptip placement="top" v-if="hideMe">
                <div slot="content" class="d-flex justify-content-between inner-icons">
                  <div>
                    <button class="btn rounded-circle d-flex justify-content-center">
                      <i class="fal fa-arrow-from-bottom"></i>
                    </button>
                    <p>Upload</p>
                  </div>
                   <div>
                    <button class="btn rounded-circle d-flex justify-content-center">
                      <i class="fal fa-search"></i>
                    </button>
                  <p>Search</p>
                  </div>
                  <div>
                    <button class="btn rounded-circle d-flex justify-content-center">
                      <i class="far fa-th"></i>
                    </button>
                  <p>Multiple</p>
                  </div>
                </div>
                <button class="btn rounded-circle d-flex justify-content-center">
                  <i class="fal fa-image content-icon"></i>
                </button>
              </Poptip>
            </li>
            <li>
              <Poptip placement="top" v-if="hideMe">
                <div slot="content" class="d-flex justify-content-between inner-icons">
                  <div>
                    <button class="btn rounded-circle d-flex justify-content-center">
                      <i class="fal fa-arrow-from-bottom"></i>
                    </button>
                    <p>Upload</p>
                  </div>
                   <div>
                    <button class="btn rounded-circle d-flex justify-content-center text">
                      <i class="fal fa-link"></i>
                    </button>
                  <p>Embedded</p>
                  </div>
                </div>
                <button class="btn rounded-circle d-flex justify-content-center">
                  <i class="fal fa-video content-icon"></i>
                </button>
              </Poptip>
              </li>
            <li>
              <Poptip placement="top" v-if="hideMe">
                <div slot="content" class="d-flex justify-content-between inner-icons">
                  <div>
                    <input type="text" placeholder="Enter a url link" class="embed">
                    <p>Add a link from twitter, facebook</p>
                  </div>
                </div>
                <button class="btn rounded-circle d-flex justify-content-center">
                  <i class="fal fa-link content-icon"></i>
                </button>
              </Poptip>
              </li>
          </ul>
        </div>
          
        </div>

        <div class="err-alert" id="reduce" v-if="showSide">
          <div class="d-flex justify-content-end mb-4 toggle" v-if="showMe" @click="toggleEntitySection">
            <span class="btn btn-sm hide-border" @click.prevent="reduceWidth">
              Hide Info
            </span>
          </div>
          <div class="text-right" v-if="hideEntity"  @click="toggleEntitySection">
            <div class="d-flex justify-content-end mb-4 toggle">
              <span class="btn btn-sm hide-border" @click.prevent="restoreWidth">
                Show Info
              </span>
              </div>
              <div class="err-circle"></div>
               <div>
                <h6 class="my-4">Entities <span class="badge badge-primary">50</span></h6>
               </div>
            </div>

          <error-alert v-if="showMe">
            <p>We have 3 articles that have similar title as yours. <a class="compare">Compare</a></p>
          </error-alert>
          <h6 v-if="showMe" class="my-4">Entities <span class="badge badge-primary">50</span></h6>
          <entity-section v-if="showMe"></entity-section>
        </div>
       </div>
      </div>


  <!-- Publish Modal -->
    <div class="modal" id="previewModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-full" role="document">
        <div class="modal-content" v-if="content1">
          <div class="modal-body">
            <div>
              <div class="loading-dots">
              <div class="loading-dots--dot"></div>
              <div class="loading-dots--dot"></div>
              <div class="loading-dots--dot"></div>
            </div>
            <p>Scanning Article For Plagiarism...</p>
            </div>
          </div>
        </div>

        <div class="modal-content" v-else>
          <div class="modal-body">
            <div style="width: 45%">
            <error-alert1>
              <div class="d-flex justify-content-between">
                <i class="fal fa-exclamation-circle exclam"></i>
                  <p>We detected some traces of plagiarism in this content. At bloverse we try to encourage unique and original content. <a class="compare">Compare</a></p>
              </div>
            </error-alert1>
              <div class="click" @click="toArticle">
                <i class="fal fa-arrow-left back-icon"></i>
                <span class="ml-2" style="color: #252525;">Return to article</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ErrorAlert from '@/components/ErrorAlert/ErrorAlert.vue'
import ErrorAlert1 from '@/components/ErrorAlert1/ErrorAlert1.vue'
import EntitySection from '@/components/EntitySection/EntitySection.vue'
import { Poptip } from 'iview'
import { setTimeout } from 'timers';

export default {
  components: { Poptip, EntitySection, ErrorAlert, ErrorAlert1},
  data() {
    return {
      textArea: false,
      textLength: "",
      showThis: false,
      showMe: false,
      hideEntity: false,
      hideMe: true,
      content1: true,
      blurBackground: false,
      plus_btn: true,
      minHeight: null,
      showSide: false
    }
  },
  watch:{
    content1: function(value){
      if(value == true){
        this.blurBackground = false
      }else{
        this.blurBackground = true
      }
    },
    showMe: function(value) {
      if (value == true ){
        this.hideEntity = false
      }else if (value == false && this.textLength.length < 1){
        this.hideEntity = false
      }
      else {
        this.hideEntity = true
      }
    }
  },
  methods: {
    textareaResize() {
      if(this.textLength.length > 0) {
        this.minHeight = this.$refs.autoText.style.minHeight;
        this.$refs.autoText.style.minHeight = this.$refs.autoText.scrollHeight + 'px';
        this.showMe = true;
        this.showThis = true;
        this.showSide = true;
      } else {
        this.showMe = false;
        this.showThis = false;
        this.hideEntity = false
        this.showSide = false;
        this.$refs.autoText.style.minHeight -= this.minHeight;

      }
      
    },
    showTextBox() {
      this.textArea = true;
      this.$nextTick(() => this.$refs.autoText.focus())
    },
    toggleEntitySection() {
      this.showMe = !this.showMe;
    },
    goBack() {
      this.$router.go(-1);
    },
    showPreview() {
      /* eslint-disable */ 
      $('#previewModal').modal('show');
      this.hideMe = false;

      setTimeout(() => {
        this.content1 = false
      }, 3000)
    },
    toArticle() {
      /* eslint-disable */ 
      $('#previewModal').modal('hide');
      this.hideMe = true;
    },
    reduceWidth() {
      document.getElementById('reduce').style.width = '150px';
      document.getElementById('publish-nav').style.margin = "0px 0px 0px 150px";
    },
    restoreWidth() {
      document.getElementById('reduce').style.width = '310px';
      document.getElementById('publish-nav').style.margin = "0px 150px 0px 0px";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./PublishPage";
</style>
