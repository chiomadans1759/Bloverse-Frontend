<template>
  <main id="publish-page">
     <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" />
     <div class="container">
       <div class="row">
        <div class="col-lg-1 icon-wrapper">
          <ul class="text-icons">
            <li>
              <button class="btn rounded-circle d-flex justify-content-center" @click.prevent="showTextBox">
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
                    <button class="btn rounded-circle d-flex justify-content-center">
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
        <div class="col-lg-7">
          <form>
            <div class="form-group">
              <input type="text" class="form-control p-0 mb-4 one" placeholder="Add a title" autofocus>
            </div>
            <div class="form-group">
              <input type="text" class="form-control p-0 two" placeholder="Add keypoint">
            </div>
            <div class="form-group pb-4">
              <textarea class="mytext" ref="autoText" v-if="textArea" @input="textareaResize"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import { Poptip } from "iview"

export default {
  components: { Navbar, Poptip },
  data() {
    return {
      showNavigations: false,
      showBackArrow: true,
      textArea: false
    }
  },
  methods: {
    textareaResize() {
      this.$refs.autoText.style.minHeight = this.$refs.autoText.scrollHeight + 'px';
    },
    showTextBox() {
      this.textArea = true;
      this.$nextTick(() => this.$refs.autoText.focus())
    }
  }
}
</script>
 
<style lang="scss" scoped>
@import "./PublishPage"
</style>

