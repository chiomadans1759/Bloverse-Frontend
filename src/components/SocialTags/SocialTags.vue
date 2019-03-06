<template>
  <main id="social-tags">
    <div class="item-content-block d-flex">
      <div class="card mr-2" v-for="(link, index) in socialLinks" :key="index">
        <div class="card-content p-1">
          <div class="d-flex justify-content-between">
            <span v-html="link"></span>
             <span class="ml-2 remove-icn" @click.prevent="removeItem()">
              <i class="fal fa-times d-flex justify-content-end"></i>
             </span>
          </div>
        </div>
      </div>
       <span class="morekeys" @click.prevent="refreshTags()">
          <button class="btn rounded-btn-circle d-flex justify-content-center text">
            <i class="fal fa-undo"></i>
          </button>
       </span>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        `<p><i class="fab fa-facebook d-blue"></i><span class="pl-2">Facebook</span></p>`,
        `<p><i class="fab fa-twitter s-blue"></i><span class="pl-2">Twitter</span></p>`,
        `<p><i class="fab fa-linkedin b-blue"></i><span class="pl-2">Linkedin</span></p>`
      ]
    }
  },
  methods: {
    removeItem(index) {
      this.socialLinks.splice(index,1)
    },
    refreshTags() {
      this.socialLinks = JSON.parse(this.NewSocialLinks)
      
    }
  },
  mounted() {
    this.NewSocialLinks = JSON.stringify(this.socialLinks)
  }
  
}
</script>

<style scoped>

#social-tags {
  width: 100%;
}

#social-tags .text {
    background: #ffffff;
    border: 0.063rem solid rgba(0, 0, 0, 0.15);
    height: 1.938rem;
    width: 1.938rem;
    border-radius: 50% !important;
    color: #096DD9;
}
#social-tags .remove-icn {
  margin-top: 0.2rem;
}

#social-tags .morekeys {
  margin-left: 7rem;
}

</style>

<style>

.d-blue {
  color: #3B5998;
}
.s-blue {
  color: #38A1F3;
}
.b-blue {
  color: #0077B5;
}
</style>
