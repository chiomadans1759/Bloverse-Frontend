<template>
  <main id="publish-page">
    <nav class="nav container d-flex justify-content-between align-items-center publish-nav">
      <a class="nav-link" @click.prevent="goBack">
         <i class="fal fa-arrow-left back-icon"></i>
         <span class="text-muted ml-2">Back</span>
      </a>
      <p class="nav-link text-uppercase small" v-if="showThis">saving... to draft</p>
      <button class="btn btn-sm btn-primary-outline preview" v-if="showThis">Preview to post</button>
    </nav> 
     <div class="container">
       <div class="row">
        <div class="col-lg-1 icon-wrapper mt-4">
          <ul class="text-icons">
            <li>
              <button class="btn rounded-circle d-flex justify-content-center show" @click.prevent="showTextBox">
                <i class="fal fa-font"></i>
              </button>
            </li>
            <li>
              <Poptip placement="right">
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
              <Poptip placement="right">
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
              <Poptip placement="right">
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
  </main>
</template>

<script>
import ErrorAlert from '@/components/ErrorAlert/ErrorAlert.vue'
import EntitySection from '@/components/EntitySection/EntitySection.vue'
import { Poptip } from 'iview'

export default {
  components: { ErrorAlert, Poptip, EntitySection },
  data() {
    return {
      textArea: false,
      showMe: false,
      textLength: "",
      showThis: false
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
      this.$router.push({ path: 'creators/profile' });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./PublishPage"
</style>
