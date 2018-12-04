<template>
  <main>
    <Row id="card-rows" :gutter="32" v-if="general.activeFeedLayout == 'grid'">
      <Col :xs="24" :sm="12" :md="8"  v-for="post in general.publishedPosts" :key="post.id">
        <FeedCard :post="post"  />
      </Col>
    </Row>

    <Row type="flex" justify="center" v-if="general.activeFeedLayout == 'stack'">
      <Col :xs="24" :sm="20" :md="14"  v-for="post in general.publishedPosts" :key="post.id">
        <FeedCard :post="post"  />
      </Col>
    </Row>
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
    ...mapState(['general'])
  }
};
</script>

<style>
#feedcard-container {
}
</style>

