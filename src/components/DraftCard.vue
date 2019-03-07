<template>
  <main id="draft-card">
    <div class="card" v-if="post.category === 7">
      <img class="card-img-top" :src="post.image_url">
      <div class="card-body">
        <h5 class="card-titlee">{{ category }}</h5>

        <p class="card-text">{{ post.title }}</p>
        <div class="foott">
          <div class="further">
            <img :src="post.author.image_url" class="author-imgg">
            <span class="detailss">
              {{post.author.first_name}} {{post.author.last_name}}
              <p>{{post.published | customizedTime}}</p>
            </span>
          </div>
          <h6 class="right">
            <i class="fal fa-eye" style="opacity:0.4;"></i>
            {{post.views}}
          </h6>
        </div>
      </div>
      <div class="overlay">
        <p>{{post.title}}</p>
        <ul class="travel-deets">
          <li>
            <i class="fas fa-camera-retro"></i>
            &nbsp;&nbsp;{{post.device_type}}
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            &nbsp;&nbsp;{{post.location}}
          </li>
        </ul>

        <div class="text-center">
          <button 
            class="btn btn-primary btn-sm mr-2" 
            style="border-radius: 2px;"
            v-if="post.is_published == false">
              Edit Post
          </button>
          <router-link 
            :to="`/creators/${auth.loggedInUser.username}/posts/${post.slug}/edit`"
            class="btn btn-primary btn-sm mr-2" 
            style="border-radius: 2px;"
            v-if="post.is_published == true">
              View Post
          </router-link>
          <button 
            class="btn btn-primary btn-sm ml-2" 
            style="border-radius: 2px;"
            v-if="post.is_published == true">
              Unpublish
          </button>
        </div>
      </div>
    </div>

    <div class="card" v-else>
      <img class="card-img-top" :src="post.image_url">
      <div class="card-body">
        <h5 class="card-title">{{ category }}</h5>
        <p class="card-text">{{ post.title | truncate(50) }}</p>
        
        <div class="foott">
          <div class="further">
            <img :src="post.author.image_url" class="author-imgg">
            <span class="detailss">
              {{post.author.first_name}} {{post.author.last_name}}
              <p>{{post.published | customizedTime}}</p>
            </span>
          </div>
          <h6 class="right">
            <i class="fal fa-eye" style="opacity:0.4;"></i>
            {{post.views}}
          </h6>
        </div>
      </div>
      
      <div class="overlay">
        <ul class="overlay-content">
          <h3 class="mb-4" v-if="post.keypoint[0] && post.keypoint[1] && post.keypoint[2]">{{post.title}}</h3>
          <h3 v-if="post.keypoint[0] && post.keypoint[1] && post.keypoint[2]">Keypoints</h3>
          <li v-if="post.keypoint[0]">
            <i class="fas fa-circle" style="font-size: 8px;"></i>
            &nbsp;{{post.keypoint[0] | truncate(75)}}
          </li>
          <li v-if="post.keypoint[1]">
            <i class="fas fa-circle" style="font-size: 8px;"></i>
            &nbsp;{{post.keypoint[1] | truncate(75)}}
          </li>
          <li v-if="post.keypoint[2]">
            <i class="fas fa-circle" style="font-size: 8px;"></i>
            &nbsp;{{post.keypoint[2] | truncate(75)}}
          </li>
        </ul>
        <h4
          class="empty-class"
          v-if="!post.keypoint[0] && !post.keypoint[1] && !post.keypoint[2]">
          No KeyPoints Available for this post
        </h4>

        <div class="text-center">
          <router-link 
            :to="`/posts/${post.slug}`" 
            class="btn btn-primary btn-sm mr-2" 
            style="border-radius: 2px;"
            v-if="post.is_published == true">
              View Post
          </router-link>
          <router-link 
            :to="`/creators/${auth.loggedInUser.username}/posts/${post.slug}/edit`"
            class="btn btn-primary btn-sm mr-2" 
            style="border-radius: 2px;"
            v-if="post.is_published == false">
              Edit Post
          </router-link>
          <button 
            class="btn btn-primary btn-sm ml-2" 
            style="border-radius: 2px;"
            v-if="post.is_published == true && current_tab == 'published'"
            data-toggle="modal" 
            data-target="#confirmModal">
              Unpublish
          </button>
        </div>
      </div>
    </div>

    <!-- Confirm Modal -->
    <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmModalLabel">CONFIRM ACTION</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="text-center">
              <h3>Are you sure you want to unpublish this post?</h3>

              <div class="my-5">
                <button type="button" class="btn btn-secondary mr-2" data-dismiss="modal">Cancel</button>
                <button 
                  type="button" 
                  class="btn btn-primary ml-2" 
                  @click.prevent="unpublishPost">Unpublish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "draft-card",
  props: { post: Object, current_tab: String },
  methods: {
    ...mapActions(["processPost"]),

    async unpublishPost() {
      let res = await this.processPost({
        post: { id: this.post.id },
        shouldPublish: false
      })
      let success = !!res.id
      if(success) {
        // eslint-disable-next-line 
        $("#confirmModal").modal('hide')
        alert('Post successfully unpublished')
        this.$emit('unpublished')
      }
    }
  },
  computed: {
    ...mapState(["general", "auth"]),

    category() {
      const postCategory = this.general.categories.find(
        category => category.id === this.post.category
      );
      return postCategory.name;
    }
  }
};
</script>

<style scoped>
  #draft-card {
    margin-top: 4rem;
  }
  #draft-card .card {
    height: 394px;
    width: 100%;
    border-radius: none;
    margin-bottom: -2rem;
  }
  #draft-card .card:hover {
    transition: 0.5s ease;
  }
  #draft-card .card-img-top {
    height: 220px;
    width: 100%;
    border-radius: 0;
    object-fit: cover;
  }
  #draft-card .card-title {
    text-transform: uppercase;
    font-size: 13px;
    color: #353535;
  }
  #draft-card .card-titlee {
    text-transform: uppercase;
    font-size: 13px;
    color: #096dd9;
  }
  #draft-card .card-text {
    font-size: 16px;
    color: #34323d;
    opacity: 85%;
    text-transform: capitalize;
    height: 64px;
    font-weight: 600;
  }
  #draft-card .author-imgg {
    width: 34px;
    height: 34px;
    object-fit: cover;
  }
  #draft-card .foott {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  #draft-card .foott .further {
    display: flex;
    justify-content: space-between;
  }
  #draft-card .foott .right {
    color: #353535 !important;
    font-size: 12px;
    margin-top: 0.6rem;
  }
  #draft-card .foott span {
    margin-left: 0.5rem;
    color: #353535;
    font-size: 12px;
    font-weight: 500;
  }
  #draft-card .foott p {
    color: #353535;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 0.4;
  }
  #draft-card .overlay .empty-class {
    text-align: center;
    font-size: 19px;
    margin-top: 10rem;
    color: #fff;
  }
  #draft-card .overlay p {
    text-align: left;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 3rem;
    margin-top: 2rem;
  }
  #draft-card .overlay .travel-deets {
    list-style-type: none;
    color: #fff;
    text-align: left;
    margin-left: 3rem;
    margin-top: 5rem;
  }
  #draft-card .overlay .travel-deets li {
    color: #fff;
    font-size: 15px;
    margin-bottom: 2rem;
  }
  #draft-card .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 392px;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(13, 13, 15, 0.849);
    overflow-x: none;
  }
  #draft-card .overlay-content h3 {
    font-size: 16px;
    margin-bottom: 1rem;
    text-transform: capitalize;
    margin-top: 1rem;
    font-weight: bold;
  }
  #draft-card .overlay-content h2 {
    font-size: 16px;
    margin-bottom: 1rem;
    text-transform: capitalize;
    margin-top: 1rem;
    font-weight: bold;
  }
  #draft-card .overlay .overlay-content li {
    margin-bottom: 1rem;
  }
  #draft-card .overlay .text-center {
    position: absolute;
    top: 80%;
    left: 20%;
  }
  #draft-card .read-more {
    margin-left: 16rem !important;
    position: absolute;
    bottom: 0 !important;
    margin-bottom: 1.5rem;
  }
  #draft-card .overlay-content #consumer-keypoints {
    margin-bottom: 1rem;
  }
  #draft-card .overlay-content {
  color: white;
  font-size: 20px;
  position: absolute;
  margin-left: 2.2rem;
  left: 43%;
  top: 46%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 12.6px;
  width: 95%;
  list-style-type: none;
}
#draft-card:hover .overlay {
  opacity: 1;
}
#draft-card .modal {
  z-index: 3000;
  top: 25%;
}
</style>
