<template>
  <router-link :to="`posts/${post.slug}`" id="trending-card">
    <div class="card text-white">
      <img class="card-img" :src="post.image_url" alt="Card image">
      <div class="card-img-overlay">
        <h5 class="card-title">{{category}}</h5>
        <p class="card-text">{{post.title | reduceText}}</p>
        <div class="author mt-4">
          <img class="rounded mr-3" :src="post.author.image_url" alt>
          <span>{{post.author.first_name}} {{post.author.last_name}}</span>
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
  data() {
    return {
      pages: null
    };
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
  },
  filters: {
    reduceText(text) {
      if (text.length > 50) {
        return text.substring(0, 50) + "...";
      } else {
        return text;
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

  #trend-card-heading {
    font-size: 16px;
    font-weight: 800;
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

  #trending-card .carousel-indicators {
    top: 13rem;
  }

  #trending-card .carousel-indicators li {
    margin: 0rem 1rem;
    background: #096dd9;
    border: 1px solid rgba(0, 0, 0, 0.15);
    opacity: 0.6;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }

  #trending-card .carousel-indicators li.active {
    margin: 0rem 1rem;
    background: #096dd9;
    border: 1px solid rgba(0, 0, 0, 0.15);
    opacity: 1;
    width: 8px;
    height: 8px;
    margin-top: -2px;
  }

  #trending-card .carousel-control-next {
    margin-top: 4.5rem;
    margin-right: -1.2rem !important;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    background: #bdc3c7;
    background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);
    background: linear-gradient(to right, #2c3e50, #bdc3c7);
    filter: blur(0.5px);
  }

  @media only screen and (max-width: 980px) {
    #trending-card .carousel-indicators li {
      width: 5px;
      height: 5px;
    }

    #trending-card .carousel-indicators li.active {
      width: 8px;
      height: 8px;
    }
  }

  #trending-card .card .card-img-overlay {
    padding-top: 3rem;
    z-index: 1;
  }

  #trending-card .card .card-img-overlay .card-title {
    font-size: 13px;
    position: absolute;
    bottom: 7rem;
  }

  #trending-card .card .card-img-overlay .card-text {
    font-weight: 700;
    font-size: 13px;
    position: absolute;
    bottom: 4rem;
  }

  @media only screen and (max-width: 980px) {
    #trending-card .card .card-img-overlay .card-text {
      font-size: 11px;
    }
  }

  #trending-card .card .card-img-overlay .author {
    position: absolute;
    bottom: 1.5rem;
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
  }
</style>
