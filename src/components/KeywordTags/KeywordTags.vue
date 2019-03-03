<template>
  <main id="social-tags">
    <div class="item-content-block d-flex">
      <div class="card" v-for="(keyword, index) in keyWordLinks" :key="index">
        <div class="card-content p-1">
          <div>
             <span class="keyword">Keyword</span>
             <span class="closeIcon" @click.prevent="removeItem(index)">
              <i class="fal fa-times d-flex justify-content-end close"></i>
             </span>

          </div>
        </div>
      </div>
       <span @click.prevent="addKeyWord()" v-if="addWord">
          <button class="btn rounded-btn-circle d-flex justify-content-center ml-3 text">
            <i class="fal fa-plus"></i>
          </button>
       </span>
  </div>
    <p class="mt-3 d-flex justify-content-end max">Maxinum of 5</p>
  </main>
</template>

<script>
export default {
  data(){
    return{
      addWord: true,
      keyWordLinks:[
        {
          keyword:''
        }
      ],
    }
  },
  methods: {
    removeItem(index) {
      this.keyWordLinks.splice(index,1)
    },
    addKeyWord() {
      this.keyWordLinks.push({
        keyword:''
      })

      if(this.keyWordLinks.length == 5) {
        this.addWord = false;
      }
    }
  }
}
</script>

<style scoped>

#social-tags .card {
  width: 7.031rem;
  height: 1.938rem;
}

#social-tags .svg-inline--fa {
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.125rem;
}

#social-tags .item-content-block{
  width: 17.125rem;
}

#social-tags{
  width: 100%;
}

#social-tags .max{
  color: #B7B7B7;
  font-size: 0.75rem;
}

#social-tags .text{
  background: transparent;
  border: 0.063rem solid rgba(0, 0, 0, 0.15);
  height: 1.938rem;
  width: 1.938rem;
  color: #096DD9;
  border-radius: 50% !important;
}

#social-tags p {
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

</style>
