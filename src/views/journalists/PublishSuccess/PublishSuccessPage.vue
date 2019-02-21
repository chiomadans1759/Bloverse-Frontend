<template>
  <main id="publish-success">
    <nav class="nav container d-flex justify-content-between align-items-center success-nav">
      <a class="nav-link" @click="goBack">
         <i class="fal fa-arrow-left back-icon"></i>
         <span class="text-muted ml-2">Back</span>
      </a>
    </nav>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 mt-5">
          <h6 class="text-left title pr-4">
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec elaboraret interpret
          </h6>
            <p class="key">
              Add Keypoint
            </p>
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
           <div class="my-4">
             <p>Select a Category</p>
               <select class="my-4 custom-select">
                <option>Choose category</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
           </div>
           <div class="d-flex justify-content-between mb-4">
             <p>Share to social media</p>
              <button
                type="button"
                class="btn btn-sm btn-toggle"
                data-toggle="button"
                aria-pressed="true"
                autocomplete="off"
                @click="toggleSocialLink()"
              >
              <div class="square"></div>
              </button>
           </div>
           <div v-if="socialShare" class="mb-4 d-flex justify-content-between">
             <social-tags ref="reloadIcons" @removed="setReload"></social-tags>
             <span @click.prevent="putBackIcons()" v-if="reloadIcons">
               <i class="fal fa-undo reload"></i>
              </span>
            </div>
           <div>
            <Button customClass="btn btn-primary btn-lg btn-block">
              <p class="publish-txt">Publish</p>
            </Button>
           </div>
        </div>
      </div>
    </div>
  </main>  
</template>

<script>
import SuccessAlert from '@/components/SuccessAlert/SuccessAlert'
import SocialTags from '@/components/SocialTags/SocialTags'
import Button from '@/components/Button/Button.vue';

export default {
  components: {
    SuccessAlert, SocialTags, Button
  },
  data(){
    return {
      socialShare: false,
      reloadIcons: false,
      newsocialLinks:[
        "<i class='fab fa-facebook-square blue'></i><p>Facebook</p>",
        "<i class='fab fa-twitter sky'></i><p>Twitter</p>",
        "<i class='fab fa-linkedin din'></i><p>LinkedIn</p>"
      ]
     
    }
  },
  methods:{
    toggleSocialLink(){
      this.socialShare = !this.socialShare;
    },
    goBack(){
      this.$router.go(-1);
    },
    putBackIcons() {
      this.$refs.reloadIcons.reassignIcons(this.newsocialLinks);
      this.reloadIcons = false;
      
    },
    setReload(){
      this.reloadIcons = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './PublishSuccessPage';
</style>

