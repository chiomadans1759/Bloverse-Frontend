<template>
  <router-link :to="`posts/${post.slug}`" id="trending-card">
    <div class="card text-white">
      <img class="card-img" :src="post.image_url" alt="Card image">
      <div class="card-img-overlay">
        <h5 class="card-title">{{category}}</h5>
        <p class="card-text">{{post.title | truncate(50)}}</p>
        <div class="author mt-4">
          <img class="rounded mr-3" :src="post.author.image_url" alt>
          <span id="desktop">
            {{`${post.author.first_name} ${post.author.last_name}` | truncate(30)}}
          </span>
          <span id="mobile">
            {{`${post.author.first_name} ${post.author.last_name}` | truncate(10)}}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "trending-card",
  props: {
    post: Object
  },
  computed: {
    ...mapState(["general"]),

    category() {
      if (this.general.categories) {
        const postCategory = this.general.categories.find(
          category => category.id === this.post.category
        );
        return postCategory.name;
      }
    }
  }
};
</script>

<style scoped>
  #trending-card {
    height: auto;
    margin: 0rem 0rem 5rem;
  }

  #trending-card .card {
    height: 180px;
    box-shadow: none !important;
    border: 0px !important;
    border-radius: 4px !important;
    margin-right: 0.4rem;
  }

  #trending-card .card::after {
    display: block !important;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.9)
    ) !important;
    height: 100% !important;
    content: "\A";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px !important;
  }

  #trending-card .card img {
    height: 100%;
    border-radius: 4px !important;
  }

  #trending-card .card .card-text {
    position: absolute;
    top: 70px;
  }

  #trending-card .card .card-img-overlay {
    padding-top: 3rem;
    z-index: 1;
  }

  #trending-card .card .card-img-overlay .card-title {
    font-size: 13px;
    position: absolute;
    top: 30px;
  }

  #trending-card .card .card-img-overlay .card-text {
    font-weight: 700;
    font-size: 13px;
    position: absolute;
    top: 70px;
  }

  #trending-card .card .author {
    position: absolute;
    top: 100px;
  }

  #trending-card .card .author #mobile {
    display: none;
  }

  @media only screen and (max-width: 980px) {
    #trending-card .card .card-img-overlay .card-text {
      font-size: 11px;
    }

    #trending-card .card .author #desktop {
      display: none;
    }

    #trending-card .card .author #mobile {
      display: block;
    }
  }

  #trending-card .card .card-img-overlay .author img {
    width: 24px !important;
    height: 24px !important;
    margin-top: -0.3rem;
    border-radius: 4px;
  }

  @media only screen and (max-width: 980px) {
    #trending-card .card .card-img-overlay {
      padding-top: 1rem;
    }

    #trending-card .card {
      height: 160px;
      margin-right: 0.8rem;
    }

    #trending-card .carousel-inner {
      height: 100%;
    }
  }

  @media only screen and (min-width: 300px) {
    #trending-card .card {
      height: 170px;
      margin-right: 0.8rem;
    }

    #trending-card .card .card-img-overlay {
      padding-top: 3rem;
    }

    #trending-card .card .author {
      position: absolute;
      top: 110px;
    }
  }
</style>
