<template>
  <main id="post-author">
    <section v-if="!author">
      <img src="@/assets/placeholders/author-card.svg" alt="">
    </section>

    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="avatar">
            <img :src="author.image_url" alt="Author's Image" class="avatar-img rounded">
          </div>
        </div>
        <div class="col-10 mt-3">
          <h3 id="author-fullname">{{author.first_name}} {{author.last_name}}</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "post-author",
  props: {
    author: Object
  }
};
</script>

