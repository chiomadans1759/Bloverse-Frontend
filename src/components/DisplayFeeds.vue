<template>
  <main>
    <Row id="card-rows" gutter="32" v-show="$store.state.general.activeFeedLayout == 'grid'">
      <Col :xs="24" :sm="12" :md="8"  v-for="post in $store.state.general.publishedPosts" :key="post.id">
        <FeedCard :post="post"  />
      </Col>
    </Row>

    <Row id="card-rows" gutter="32" v-show="$store.state.general.activeFeedLayout == 'stack'">
      <Col :xs="24" :sm="12" :md="20"  v-for="post in $store.state.general.publishedPosts" :key="post.id">
        <FeedCard :post="post"  />
      </Col>
    </Row>
  </main>
</template>

<script >
import { Row, Col, vSelect, Card, Avatar, Icon } from "iview";
import { mapActions } from "vuex";
import FeedCard from "./FeedCard.vue";

export default {
  name: "Displayfeeds",
  components: { Row, Col, Card, vSelect, Avatar, Icon, FeedCard },
  methods: {
    ...mapActions(["getAllPublishedPosts"])
  },
  async created() {
    await this.getAllPublishedPosts({ category: "", country: "" });
  }
};
</script>

<style>
#feedcard-container {
}
</style>

