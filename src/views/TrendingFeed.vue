<template>
  <main class="trending-feed">
    <div class="mb-4">
        <h4 class="font-weight-bold text-uppercase">trending stories</h4>
        <p>Stories with the highest views.</p>
    </div>

    <transition-group name="slide-fade">
      <div v-for="post in general.trendingPost" :key="post.id">
        <FeedCard :post="post"/>
      </div>
    </transition-group>
  </main>    
</template>

<script>
import { mapActions, mapState } from "vuex";
import FeedCard from "@/components/FeedCard.vue";

export default {
  name: "trending-feed",
  components: { FeedCard },
  methods: {
    ...mapActions(["getAllTrendingPosts"])
  },
  async mounted() {
    await this.getAllTrendingPosts();
  },
  async created() {
    setInterval(async () => {
      await this.getAllTrendingPosts();
    }, 100000);
  },
  computed: {
    ...mapState(["general"])
  },
  filters: {
    categoryName(cat_id, category) {
      let ct = category.filter(cat => {
        cat.id == cat_id;
      });
      return ct.name;
    }
  }
};
</script>

<style scoped>

</style>
