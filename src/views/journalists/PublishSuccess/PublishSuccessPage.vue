<template>
  <main id="publish-success">
    <nav class="nav container d-flex justify-content-between align-items-center success-nav">
      <div class=" mt-2 d-flex">
          <button class="btn rounded-circle d-flex justify-content-center go-back" @click="goBack">
          <i class="fal fa-arrow-left back-icon"></i>
        </button>
        <span class="text-muted ml-2 mt-2">Back</span>
        </div>
    </nav>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 mt-5">
          <h6 class="text-left title pr-4">
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
          </h6>
          <form class="form-line">
            <div class="form-group d-flex justify-content-between" v-for="(line, index) in lines" :key="index">
              <span class="keybullet" v-if="keyBullet">
                <li></li>
              </span>
              <input type="text" class="form-control p-0 two" placeholder="Add keypoint" v-model="line.keypoint" @input="addKeyPoint(line.keypoint, index)" @mouseover="activateDelete()" @mouseout="deactivateDelete()">
                <span class="d-flex justify-content-end mt-2 icon-position">
                  <button class="btn rounded-btn-circle d-flex justify-content-center ml-3 text" v-if="removeKeyBtn" @click.prevent="removeKeypoint()">
                    <i class="fal fa-times icn"></i>
                  </button>
                </span>
            </div>
            <div class="d-flex justify-content-end icon-position">
              <button class="btn rounded-btn-circle d-flex justify-content-center ml-3 mb-3 text" v-if="showKeyBtn && lines.length < 3" @click.prevent="addKey()">
                <i class="fal fa-plus icn"></i>
              </button>
            </div>
          </form>
            <p class="pr-4">
              Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpretaris, sed diceret concludaturque no. Verear habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri eius debitis ne. Eos et wisi legimus, vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te quod vero salutandi nam. In detraxit eleifend duo, alterum iudicabit consectetuer per ad. Qui case possit omittam an, everti expetenda ut usu. Pro discere graecis liberavisse in. Ne docendi corpora quaestio eum, has vivendo suavitate accommodare an. Mei commune detraxit intellegebat ea, duo malis mundi abhorreant ei, cu mentitum recusabo elaboraret eos. Debitis temporibus sit an, eam at alterum efficiantur philosophia. Sea laoreet contentiones id, inermis partiendo vix ut, sea no graeco forensibus posidonium. Id pri error simul, ius illud falli meliore eu. Invenire forensibus est cu, diam ocurreret eu nam. Ne cum iriure accumsan oportere, laudem mandamus no duo. Vis at bonorum delenit appellantur, ne has oratio placerat posidonium, vix labores urbanitas interpretaris an. Nobis blandit adolescens eam ex. Doctus tamquam quaerendum sit ne. Ornatus repudiare pri ad, an ipsum animal vivendum eos. Duo ne mundi malorum, et falli tempor posidonium qui, est paulo scripta interpretaris ex.
              <img src="@/assets/post-card-image.jpg" class="img-responsive mt-2">
            </p>
        </div>
        <div class="col-lg-4 mt-5 ml-3">
          <success-alert>
            <div class="d-flex justify-content-between">
              <i class="fal fa-check-circle checked"></i>
              <p>Your Article was successfully scanned. You have no issue of plagiarism with your article.</p>
            </div>
          </success-alert>
          <form>
           <div class="form-group">
             <label>Select a Category</label>
               <select class="my-4 custom-select">
                <option>Choose category</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
           </div>
           <div class="form-group">
             <label>Select a Country</label>
               <select class="my-4 custom-select">
                <option>Choose country</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
           </div>
           <div class="form-group keysection">
            <div class="mb-4 mt-3 d-flex justify-content-between">
              <keyword-tags ref="reloadIcons"></keyword-tags>
            </div>
            </div>
           <div>
            <Button customClass="btn btn-primary btn-block" @buttonClick="publishSuccess">
              <p class="publish-txt">Publish</p>
            </Button>
           </div>
           </form>
        </div>
      </div>
    </div>

     <!-- Publish Modal -->
    <div class="modal" id="successModal" tabindex="-1" role="dialog" aria-hidden="true">
       <div class="d-flex justify-content-end close-icon"  @click.prevent="closeModal">
          <i class="fal fa-times fa-3x" style="color: white;"></i>
        </div>
      <div class="modal-dialog modal-full" role="document">
        <div class="modal-content">
           <success-alert>
              <div class="d-flex justify-content-center">
                <i class="fal fa-check-circle fa-3x"></i>
                <p class="ml-4 mt-2">Your article has been published successfully</p>
              </div>
          </success-alert>
          <div class="modal-body">
            <h5>Share on social media</h5>
            <div>
              <p class="share-text">Automatically share on your social media</p>
            </div>


            <div class="d-flex justify-content-end mt-4">
              <button class="btn btn-sm btn-primary" @click="goToPublish">Share</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </main>  
</template>

<script>
import SuccessAlert from '@/components/SuccessAlert/SuccessAlert'
import KeywordTags from '@/components/KeywordTags/KeywordTags'
import Button from '@/components/Button/Button.vue';

export default {
  components: {
    SuccessAlert, KeywordTags, Button
  },
  data(){
    return {
      reloadIcons: false,
      lines: [
        {
          keypoint:'',
          hideBtn: true
        }
      ],
      showKeyBtn: false,
      removeKeyBtn: false,
      keyBullet: false
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    addKeyPoint(value, index) {
      if(value != '') {
        this.showKeyBtn = true;
        this.keyBullet = true;
        
      }else {
        this.showKeyBtn = false  
      }
    },
    addKey() {
      if(this.lines.length < 3) {
        this.lines.push({
          keypoint:''
        })
      }
      if(this.lines.length == 3){
        this.showKeyBtn = false;
      }
    },
    removeKeypoint(index) {
      this.lines.splice(index,1)
      if (this.lines.length < 3) {
        this.plus_btn = true
      }
    },
    publishSuccess() {
      /* eslint-disable */ 
      $('#successModal').modal('show');
    },
    activateDelete(index) {
      this.removeKeyBtn = true;
    },
    deactivateDelete(index) {
      this.removeKeyBtn = false
    },
    goToPublish() {
      this.$router.push('/publish');
        /* eslint-disable */ 
      $('#successModal').modal('hide');
    },
    closeModal() {
      /* eslint-disable */ 
      $('#successModal').modal('hide');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './PublishSuccessPage';
</style>

