<template>
  <main class="author-card">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="avatar">
            <img :src="author.image_url" alt="Author's Image" class="avatar-img rounded">
          </div>
        </div>

        <div class="col-auto">
          <h3 style="color: #333333; z-index: 1000;">{{author.first_name}} {{author.last_name}}</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "author-card",
  props: {
    author: Object
  }
};
</script>

