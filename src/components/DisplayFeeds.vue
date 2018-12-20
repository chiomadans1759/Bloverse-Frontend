<template>
  <main id="display-feeds">
    <div class="card" v-if="!general.publishedPosts.length">
      <div class="card-body">
        <img src="@/assets/image.svg" alt="" class="col-md-3">
        <span class="col-md-8">No content for this filter result yet!</span>
      </div>
    </div>
    <div v-if="general.publishedPosts">
      <Row id="card-rows" :gutter="32" v-if="general.activeFeedLayout == 'grid'">
        <Col :xs="24" :sm="12" :md="8" v-for="post in general.publishedPosts" :key="post.id">
          <FeedCard :post="post"/>
        </Col>
      </Row>

      <Row type="flex" justify="center" v-if="general.activeFeedLayout == 'stack'">
        <Col :xs="24" :sm="20" :md="14" v-for="post in general.publishedPosts" :key="post.id">
          <FeedCard :post="post"/>
        </Col>
      </Row>
    </div>
  </main>
</template>

<script >
import { Row, Col, vSelect, Card, Avatar, Icon } from "iview";
import { mapActions, mapState } from "vuex";
import FeedCard from "./FeedCard.vue";

export default {
  name: "Displayfeeds",
  components: { Row, Col, Card, vSelect, Avatar, Icon, FeedCard },
  methods: {
    ...mapActions(["getAllPublishedPosts"])
  },
  async created() {
    await this.getAllPublishedPosts({ category: "", country: "" });
  },
  computed: {
    ...mapState(["general"])
  }
};
</script>

<style scoped>
#display-feeds .card {
  left: 30%;
  width: 504px;
  height: 139px;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

#display-feeds .card .card-body img {
  width: 80px;
  height: 90.99px;
}

#display-feeds .card .card-body {
text-align: center;
}

#display-feeds .card .card-body span {
  font-size: 14px;
}
</style>

