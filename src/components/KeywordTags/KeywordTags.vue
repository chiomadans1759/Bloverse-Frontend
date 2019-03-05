<template>
  <main id="keyword-tags">
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
       <span class="morekeys" @click.prevent="addKeyWord()" v-if="addWord">
          <button class="btn rounded-btn-circle d-flex justify-content-center ml-3 text">
            <i class="fal fa-plus"></i>
          </button>
       </span>
  </div>
    <p class="d-flex justify-content-end max">Maxinum of 5</p>
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
      this.keyWordLinks.splice(index,1);
      if(this.keyWordLinks.length == 5) {
        this.addWord = false;
      } else {
        this.addWord = true;
      }
    },
    addKeyWord() {
      this.keyWordLinks.push({
        keyword:''
      })
      if(this.keyWordLinks.length == 5) {
        this.addWord = false;
      } else {
        this.addWord = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './KeywordTags';
</style>

