<template>
  <main id="social-tags">
    <div class="item-content-block tags">
      <div class="card" v-for="(link, index) in socialLinks" :key="index">
        <div class="card-content p-1 d-flex justify-content-center">
           <span v-html="link"></span>
           <span class="closeIcon" @click.prevent="removeItem(index)">
             <i class="fal fa-times d-flex justify-content-end close"></i>
            </span>
        </div>
      </div>
  </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      socialLinks:[
        "<i class='fab fa-facebook-square blue'></i><p>Facebook</p>",
        "<i class='fab fa-twitter sky'></i><p>Twitter</p>",
        "<i class='fab fa-linkedin din'></i><p>LinkedIn</p>"
      ]
    }
  },
  methods: {
    removeItem(index) {
      this.socialLinks.splice(index,1)
      this.$emit('removed')
    },
    reassignIcons(arr){
      const newarr = JSON.stringify(arr);
      this.socialLinks = JSON.parse(newarr);
    }
  }
}
</script>

<style>
#social-tags .blue{
  color: #3B5998;
  margin-top: 0.1rem;
}
#social-tags .din {
  color: #0077B5;
  margin-top: 0.1rem;
}
#social-tags .sky {
  color: #38A1F3;
  margin-top: 0.1rem;
}
#social-tags p {
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
<style scoped>

#social-tags .card {
  width: 7.031rem;
  height: 1.938rem;
}

#social-tags .tags {
  display: flex;
}

#social-tags .svg-inline--fa {
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.125rem;
}
</style>
