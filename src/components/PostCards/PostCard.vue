<template>
  <main
    id="read-later-card"
    style="width: 18rem;"
    class="card rounded-0 mt-4 pb-0 pt-2 px-2 border-top read-later-card"
  >
<<<<<<< HEAD
    <div :class="['row mx-0', { 'flex-row-reverse': listView }]">
      <div
        :class="[{ 'col-4 read-later-image-list': listView, 'col-12 read-later-image': !listView, }]"
=======
    <div class="d-none d-sm-block" :class="['row mx-0', { 'flex-row-reverse': listView }]">
      <div :class="[{ 'col-4 read-later-image-list': listView, 'col-12 read-later-image': !listView, }]"
>>>>>>> fix(homepage): update homepage with new design
        :style="{backgroundImage: 'url(' + readLaterImage + ')'}"
      >
        <button
          v-show="!listView"
          type="button"
          class="btn btn-sm bg-white m-2 rounded-0 float-right"
        >Category</button>
      </div>
      <div :class="['card-body', { 'col-8 py-0': listView }]">
        <div class="card-body-title--content mt-2">
          <button v-show="listView" type="button" class="btn btn-sm bg-white mx-0 my-2">Category</button>
          <router-link to="/posts/rere">
          <h5 class="card-title font-weight-bold">
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex,
            ea nec elaboraret interpret
          </h5>
          </router-link>
          <p :class="['username', { 'mt-3': listView }]">
            <a
              class="btn btn-primary mr-1 rounded-circle text-uppercase initials"
              v-if="!hideUsername"
              href="#"
              role="button"
            >JD</a>
            <span class="font-weight-bold mx-1 name" v-if="!hideUsername">
              username
            </span>
            <span class="time">1 min ago</span>
          </p>
        </div>

        <div :class="['row m-0 text-capitalize actions', { 'd-none': listView }]">
          <p class="col-8 p-0 counts">
            <span class="mr-2 views">4k views</span>
            
            <span class="comments">64 Comments</span>
          </p>
          <p v-show="!showKeypoints" @click="toggleKeypoints" class="col-4 p-0 text-right text-capitalize keypoints">
            show keypoints
          </p>
          <p v-show="showKeypoints" @click="toggleKeypoints" class="col-4 p-0 text-right text-capitalize keypoints">
            hide keypoints
          </p>
        </div>

        <div v-if="showKeypoints" class="keypoints">
          <div class="py-3">
            <p class="font-weight-bold mb-2">Keypoints</p>
            <div class="d-flex">
              <p class="keypoint"></p>
              <p>Lorem ipsum dolor sit amet, vel accumsam iberaviss ex, ea nec</p>
            </div>
            <div class="d-flex">
              <p class="keypoint"></p>
              <p>Lorem ipsum dolor sit amet, vel accumsam iberaviss</p>
            </div>
            <div class="d-flex">
              <p class="keypoint"></p>
              <p>Lorem ipsum dolor sit amet, vel accumsam iss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-sm-flex" :class="['row px-0 border bg-white card-footer', { 'mt-1': listView }]">
      <div class="col-6 row mx-0 actions--a">
        <div class="col-5 d-flex justify-content-between border-right likes">
          <p class="thumbs-up" v-show="!likePost">
            <span class="border rounded-circle mr-1 icons thumbs-up-icon" @click="toggleLike">
              <i class="fal fa-thumbs-up"></i>
            </span>
            <span class="count">18</span>
          </p>
          <p class="thumbs-up" v-show="likePost">
            <span class="border rounded-circle mr-1 icons clicked" @click="toggleLike">
              <i class="fas fa-thumbs-up"></i>
            </span>
            <span class="count">18</span>
          </p>
          <p class="thumbs-down" v-show="!dislikePost">
            <span class="border rounded-circle mr-1 icons thumbs-down-icon" @click="toggleDislike">
              <i class="fal fa-thumbs-down"></i>
            </span>
            <span class="count">1</span>
          </p>
          <p class="thumbs-down" v-show="dislikePost">
            <span class="border rounded-circle mr-1 icons clicked" @click="toggleDislike">
              <i class="fas fa-thumbs-down"></i>
            </span>
            <span class="count">1</span>
          </p>
        </div>
        <div class="col-7 d-flex justify-content-start share">
          <p class="share" v-show="!share">
            <span class="border rounded-circle mr-1 share icons" @click="toggleShare">
              <i class="fal fa-share"></i>
            </span>
            <span class="count">11</span>
          </p>

          <p class="share" v-show="share">
            <span class="border rounded-circle mr-1 icons share-icon clicked" @click="toggleShare">
              <i class="fas fa-share"></i>
            </span>
            <span class="count">11</span>
          </p>
        </div>
      </div>
      <div class="col-6 mx-0 d-flex justify-content-end actions--b">
        <p class="share mr-2" v-show="bookmarked">
          <span class="border rounded-circle mr-1 icons bookmark" @click="toggleBookmark">
            <i class="fal fa-bookmark"></i>
          </span>
        </p>
        <p class="share mr-2" v-show="!bookmarked">
          <span class="border rounded-circle mr-1 icons bookmark clicked" @click="toggleBookmark">
            <i class="fas fa-bookmark"></i>
          </span>
        </p>
        <div class="d-flex justify-content-center align-items-center ellipsis-div">
          <p
            class="px-2 ellipsis dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="positionDropdownArrow"
          >
            <span id="option-icon"/>
            <span id="option-icon"/>
            <span id="option-icon"/>
          </p>
          <div
            :class="['dropdown-menu', 'bl-dropdown-menu',
              { 'top-dropdown': !dropdownArrowDown , 'bottom-dropdown': dropdownArrowDown }]"
            aria-labelledby="dropdownMenuReference"
            ref="dropdown"
          >
            <div class="d-flex bl-dropdown-menu__countries">
              <div class="favourite-countries">
                <p class="dropdown-item country">Report Post</p>
                <hr>
                <hr>
                <p class="dropdown-item country" v-show="isConsumer">
                  <i class="fal fa-times mr-2"></i>
                  <span class="count">Remove</span>
                </p>
                <p class="dropdown-item country">
                  <i class="fal fa-plus mr-2"></i>
                  <span class="count">Creators Profile</span>
                </p>
                <div class="d-md-none">
                  <p class="dropdown-item country">
                    <i class="fal fa-comment-dots mr-2"></i>
                    <span class="count">
                      Comment
                      <span class="badges">5</span>
                    </span>
                  </p>
                  <p class="dropdown-item country hidden-lg-down">
                    <i class="fal fa-share mr-2"></i>
                    <span class="count">
                      Share
                      <span class="badges">5</span>
                    </span>
                  </p>
                </div>
                <p
                  class="dropdown-item country toggle-bookmark"
                  v-show="!addBookmark && !isConsumer"
                  @click="toggleBookmark()"
                >
                  <i class="fal fa-bookmark mr-2"></i>
                  <span class="count">Read Later</span>
                </p>
                <p
                  class="dropdown-item country toggle-bookmark"
                  v-show="addBookmark && !isConsumer"
                  @click="toggleBookmark()"
                >
                  <i class="fas fa-bookmark mr-2"></i>
                  <span class="count">Read Later</span>
                </p>
                <hr>
                <hr>
                <p
                  class="dropdown-item country toggle-story"
                  v-show="readStory"
                  @click="toggleReadStory()"
                >
                  <i class="fal fa-book-open mr-2"></i>
                  <span class="count">Read Story</span>
                </p>
                <p
                  class="dropdown-item country toggle-story"
                  v-show="!readStory"
                  @click="toggleReadStory()"
                >
                  <i class="fas fa-book-open mr-2"></i>
                  <span class="count">Read Story</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile View Start -->
    <div class="d-sm-none p-2">
      <div class="row">
        <div class="col-9">
          <p class="font-weight-light">Category</p>
          <p class="font-weight-bold card-title">
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea necLorem ipsum dolor sit amet, vel accumsan iberaviss ex, ea nec.</p>
        </div>
        <div class="col-3">
          <img class="img-fluid" src="@/assets/readLaterImg.jpg" />
        </div>
      </div>
      <div class="d-flex mt-2">
        <p class="username">
            <a class="btn btn-primary mr-1 text-uppercase initials"
              href="#" role="button"
            >
              XS
            </a>
            &nbsp;
            <span class="font-weight-bold name">username</span>
            &nbsp;
            <span class="time">1 min ago</span>
        </p>
      </div>
      <div v-if="showKeypoints" class="keypoints mt-2">
          <p class="font-weight-bold mb-2">Keypoints</p>
          <div class="d-flex">
            <p class="keypoint"></p>
            <p>Lorem ipsum dolor sit amet, vel accumsam iberaviss ex, ea nec</p>
          </div>
          <div class="d-flex">
            <p class="keypoint"></p>
            <p>Lorem ipsum dolor sit amet, vel accumsam iberaviss</p>
          </div>
          <div class="d-flex">
            <p class="keypoint"></p>
            <p>Lorem ipsum dolor sit amet, vel accumsam iss</p>
          </div>
      </div>
      <div class="row mt-2">
        <div class="col-6">
          <span class="icons icon-gray">
            <i class="fal fa-eye mr-1"></i> <span class="text-dark">123</span>
          </span>
        </div>
        <div class="col-6 d-flex justify-content-around">
          <p v-show="!likePost">
          <span class="icons icon-blue" @click="toggleLike">
            <i class="far fa-thumbs-up mr-1"></i> <span class="text-dark">18</span>
          </span>
          </p>
          <p v-show="likePost">
            <span class="icons icon-blue" @click="toggleLike">
              <i class="fas fa-thumbs-up mr-1"></i> <span class="text-dark">18</span>
            </span>
          </p>
          <p v-show="!dislikePost">
            <span class="icons icon-blue" @click="toggleDislike">
              <i class="far fa-thumbs-down mr-1"></i> <span class="text-dark">1</span>
            </span>
          </p>
          <p v-show="dislikePost">
            <span class="icons icon-blue" @click="toggleDislike">
              <i class="fas fa-thumbs-down mr-1"></i> <span class="text-dark">1</span>
            </span>
          </p>
          <div>
            <p class="px-2"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="positionDropdownArrow"
            >
              <span
                class="icons border-right border-left px-2 text-dark">
                <i class="far fa-ellipsis-h"></i>
              </span>
            </p>
            <div :class="['dropdown-menu', 'bl-dropdown-menu',
              { 'top-dropdown': !dropdownArrowDown , 'bottom-dropdown': dropdownArrowDown }]"
              aria-labelledby="dropdownMenuReference" ref="dropdown"
            >
              <div class="d-flex bl-dropdown-menu__countries">
                <div class="favourite-countries">
                  <p class="dropdown-item country">Report Post</p>
                  <hr>
                  <hr>
                  <p class="dropdown-item country" v-show="isConsumer">
                    <i class="fal fa-times"></i>
                    <span class="count">remove</span>
                  </p>
                  <p class="dropdown-item country">
                    <i class="fal fa-plus mr-2"></i>
                    <span class="count">Creators Profile</span>
                  </p>
                  <div class="d-md-none">
                  <p class="dropdown-item country">
                    <i class="fal fa-comment-dots mr-2"></i>
                    <span class="count">Comment
                      <span class="badges">5</span>
                    </span>
                  </p>
                  <p class="dropdown-item country hidden-lg-down">
                    <i class="fal fa-share mr-2"></i>
                    <span class="count">Share
                      <span class="badges">5</span>
                    </span>
                  </p>
                  </div>
                  <p class="dropdown-item country toggle-bookmark" 
                    v-show="!addBookmark && !isConsumer"
                    @click="toggleBookmark()"
                  >
                    <i class="fal fa-bookmark mr-2"></i>
                    <span class="count">Read Later</span>
                  </p>
                  <p class="dropdown-item country toggle-bookmark" v-show="addBookmark && !isConsumer" @click="toggleBookmark()">
                    <i class="fas fa-bookmark mr-2"></i>
                    <span class="count">Read Later</span>
                  </p>
                  <hr>
                  <hr>
                  <p class="dropdown-item country toggle-story" v-show="!readStory" @click="toggleReadStory()">
                    <i class="fal fa-book-open mr-2"></i>
                    <span class="count">Read Story</span>
                  </p>
                  <p class="dropdown-item country toggle-story" v-show="readStory" @click="toggleReadStory()">
                    <i class="fas fa-book-open mr-2"></i>
                    <span class="count">Read Story</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p v-show="showKeypoints">
            <span class="icons angle-icon text-dark" @click="toggleKeypoints">
              <i class="fal fa-angle-up"></i>
            </span>
          </p>
          <p v-show="!showKeypoints">
            <span class="icons angle-icon text-dark" @click="toggleKeypoints">
              <i class="fal fa-angle-down"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- Mobile View Ends -->
  </main>
</template>

<script>
import readLaterImage from "../../assets/readLaterImg.jpg";

export default {
  name: "PostCard",
  data() {
    return {
      readLaterImage,
      likePost: false,
      dislikePost: false,
      readStory: false,
      addBookmark: false,
      dropdownArrowDown: false,
      share: false,
      bookmarked: false,
<<<<<<< HEAD
      isConsumer: true
    };
=======
      isConsumer: false,
      showKeypoints: false,
    }
>>>>>>> fix(homepage): update homepage with new design
  },
  props: {
    listView: {
      type: Boolean,
      default: false,
      required: false
    },
    hideUsername: {
      type: Boolean,
      default: false,
      required: false,
    }
  },
  methods: {
    toggleLike() {
      this.likePost = !this.likePost;
      this.dislikePost = false;
    },
    toggleDislike() {
      this.dislikePost = !this.dislikePost;
      this.likePost = false;
    },
    toggleShare() {
      this.share = !this.share;
    },
    toggleBookmark() {
      this.bookmarked = !this.bookmarked;
    },
    toggleReadStory() {
      this.readStory = !this.readStory;
    },
    positionDropdownArrow() {
      const dropdownEle = this.$refs.dropdown;
      this.dropdownArrowDown = false;

      const dropdownPositon = dropdownEle.getAttribute("x-placement");
      if (dropdownPositon === "top-start") {
        this.dropdownArrowDown = true;
      }
    },
    toggleKeypoints() {
      this.showKeypoints = !this.showKeypoints;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./PostCard.scss";
</style>
