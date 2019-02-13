<template>
  <main id="publish-page">
    <nav class="nav container d-flex justify-content-between align-items-center publish-nav">
      <a class="nav-link" @click.prevent="goBack">
         <i class="fal fa-arrow-left back-icon"></i>
         <span class="text-muted ml-2">Back</span>
      </a>
      <p class="nav-link text-uppercase small" v-if="showThis">saving... to draft</p>
      <button class="btn btn-sm btn-primary-outline preview" @click.prevent="showPreview" v-if="showThis">Preview to post</button>
    </nav> 
     <div class="container">
       <div class="row">
        <div class="col-lg-1 icon-wrapper mt-4">
          <ul class="text-icons">
            <li>
              <button class="btn rounded-circle d-flex justify-content-center show" v-if="hideMe" @click.prevent="showTextBox">
                <i class="fal fa-font"></i>
              </button>
            </li>
            <li>
              <Poptip placement="right" v-if="hideMe">
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
                  <i class="fal fa-image"></i>
                </button>
              </Poptip>
            </li>
            <li>
              <Poptip placement="right" v-if="hideMe">
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
                  <i class="fal fa-video"></i>
                </button>
              </Poptip>
              </li>
            <li>
              <Poptip placement="right" v-if="hideMe">
                <div slot="content" class="d-flex justify-content-between inner-icons">
                  <div>
                    <input type="text" placeholder="Enter a url link" class="embed">
                    <p>Add a link from twitter, facebook</p>
                  </div>
                </div>
                <button class="btn rounded-circle d-flex justify-content-center">
                  <i class="fal fa-link"></i>
                </button>
              </Poptip>
              </li>
          </ul>
        </div>
        <div class="col-lg-6 mt-4">
          <form>
            <div class="form-group">
              <input type="text" class="form-control p-0 one" placeholder="Add a title" autofocus>
            </div>
            <div class="form-group">
              <input type="text" class="form-control p-0 two" placeholder="Add keypoint">
            </div>
            <div class="form-group pb-4">
              <textarea class="mytext" ref="autoText" v-model="textLength" v-if="textArea" @input="textareaResize"></textarea>
            </div>
          </form>
        </div>
        <div class="col-lg-3 err-alert" v-if="showMe">
          <div class="d-flex justify-content-end mb-4">
            <button class="btn rounded-circle d-flex justify-content-center text" @click.prevent="closeEntitySection">
              <i class="fal fa-arrow-right"></i>
            </button>
          </div>
          <error-alert>
            <p>We have 3 articles that have similar title as yours. <a class="compare">Compare</a></p>
          </error-alert>
          <h6 class="my-4">Entities <span class="badge badge-primary">50</span></h6>
          <entity-section></entity-section>
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
                      <div class="click" @click.prevent="toArticle">
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
  components: { ErrorAlert, ErrorAlert1, Poptip, EntitySection },
  data() {
    return {
      textArea: false,
      showMe: false,
      textLength: "",
      showThis: false,
      hideMe: true,
      content1: true,
      blurBackground: false
    }
  },
  watch:{
    content1: function(value){
      if(value == true){
        this.blurBackground = false
      }else{
        this.blurBackground = true
      }
    }
  },
  methods: {
    textareaResize() {
      this.$refs.autoText.style.minHeight = this.$refs.autoText.scrollHeight + 'px';
      if(this.textLength.length > 0) {
        this.showMe = true;
        this.showThis = true;
      } else {
        this.showMe = false;
        this.showThis = false;
      }
      
    },
    showTextBox() {
      this.textArea = true;
      this.$nextTick(() => this.$refs.autoText.focus())
    },
    closeEntitySection() {
      this.showMe = false
    },
    goBack() {
      this.$router.go(-1);
    },
    showPreview() {
      /* eslint-disable */ 
      $('#previewModal').modal('show');
      this.hideMe = false;

      setTimeout(()=>{
        this.content1 = false
      }, 3000)
    },
    toArticle() {
      /* eslint-disable */ 
      $('#previewModal').modal('hide');
      this.hideMe = true;
    }
  }
}
</script>
 
<style lang="scss" scoped>
@import "./PublishPage"
</style>
