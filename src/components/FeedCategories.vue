<template>
  <div>
    <h2>Feeds</h2>
    <ul>
      <li>Categories</li>
      <ul>
        <li
          v-for="category in $store.state.general.categories"
          :key="category.id"
          class="list-item"
        >
          <i class="fas fa-tv" v-show="category.name == 'Entertainment'"></i>
          <i class="fas fa-business-time" v-show="category.name == 'Business'"></i>
          <i class="far fa-futbol" v-show="category.name == 'Sports'"></i>
          <i class="far fa-lightbulb" v-show="category.name == 'Technology'"></i>
          <i class="far fa-thumbs-up" v-show="category.name == 'Politics'"></i>
          <i class="far fa-handshake" v-show="category.name == 'Relationships'"></i>
          <i class="fas fa-medkit" v-show="category.name == 'Health'"></i>
          <i class="fas fa-user-graduate" v-show="category.name == 'Education'"></i>
          <i class="fas fa-glasses" v-show="category.name == 'Fashion'"></i>
          <i class="fab fa-gratipay" v-show="category.name == 'Lifestyle'"></i>
          <i class="far fa-calendar-alt" v-show="category.name == 'Events'"></i>
          <i class="far fa-grin-squint-tears" v-show="category.name == 'Comedy'"></i>
          <i class="fas fa-plane-departure" v-show="category.name == 'Travel'"></i>
          <i class="fa fa-graduation-cap" v-show="category.name == 'Education/Career'"></i>
          <i class="fas fa-fighter-jet" v-show="category.name == 'Travel Competition'"></i>
          <i class="fa fa-gavel" v-show="category.name == 'Law'"></i>
          <i class="fa fa-flask" v-show="category.name == 'Science'"></i>
          <i class="fa fa-utensils" v-show="category.name == 'Food'"></i>
          <i class="fa fa-cat" v-show="category.name == 'Pet/Animals'"></i>
          <i class="fa fa-gamepad" v-show="category.name == 'Gaming'"></i>
          <i class="fa fa-ellipsis-h" v-show="category.name == 'Other'"></i>
          {{category.name}}
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: "feed-categories"
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
    margin-bottom: 0.3rem;
  }

  i {
    width: 2rem;
    color: #333333;
  }
</style>
