<template>
    <div>
			<h2>Feeds</h2>
			<ul>
				<li>Categories</li>
				<ul>
						<li v-for="category in $store.state.consumers.feedCategories" :key="category.id">
								<i :class="category.icon"></i> {{category.name}}
						</li>
				</ul>
			</ul>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "feed-categories",
  methods: {
    ...mapActions(["getFeedCategories"])
  },
  created() {
    this.getFeedCategories();
  }
};
</script>

<style scoped>
h2 {
  color: #2f80ed;
  margin-bottom: 1rem;
}

ul li {
  list-style-type: none;
  padding-top: 0.4rem;
  font-size: 1rem;
  color: #333333;
  display: block;
}
i {
  width: 2rem;
  color: #333333;
}
</style>
