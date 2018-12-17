<template>
  <main id="all-posts">
    <div class="btn-group mb-5 pb-3" role="group">
      <button type="button" @click="currentSection('postp')" 
        :class="{'btn' : true, 'btn-default': current_section != 'postp', 'btn-primary': current_section == 'postp'}" class="text-uppercase">
        all posts
      </button>
      <button type="button" @click="currentSection('draft')" 
        :class="{'btn' : true, 'btn-default': current_section != 'draft', 'btn-primary': current_section == 'draft'}" class="text-uppercase">
        all drafts
      </button>
    </div>

    <div class="row" v-if="current_section == 'postp'">
      <div class="col-md-6" v-for="post in journalist.journalistPosts" :key="post.id">
        <feed-card :post="post" />
      </div>
    </div>

    <div class="row" v-if="current_section == 'draft'">
      <div class="col-md-6" v-for="post in journalist.journalistPosts" :key="post.id">
        <DraftCard />
      </div>
    </div>
    
    <div v-show="!journalist.journalistPosts">
      <h2>This Place looks empty !</h2><br />
      <router-link class="btn btn-primary" :to="`/creators/${auth.loggedInUser.userName}/posts/create`">
        Create Posts Here
      </router-link>
    </div>
  </main>
</template>


<script>
import { Row, Col, Button, Card } from 'iview';
import { mapState, mapActions } from 'vuex';

import FeedCard from '@/components/FeedCard.vue';
import DraftCard from '@/components/DraftCard.vue'

export default {
  data () {
    return {
      current_section: 'postp'
    }
  },
  components: { Row, Col, FeedCard, Button, Card, DraftCard },
  computed: {
    ...mapState([
      'journalist',
      'general',
      'auth'
    ]),

    showPosts: function () {
      return this.journalist.posts && this.journalist.posts.length > 0
    },
  },
  async created () {
    // fetch the data whethis.getMyPostn the view is created and the data is
    // already being observed
    await this. getMyPosts()
    await this. getMyDrafts()
  },
  watch: {
    // call again the method if the route changes
    '$route': ' getMyPosts'
  },
  methods: {
    ...mapActions([
      'getMyPosts',
      'getMyDrafts'
    ]),

    currentSection(section) {
      this.current_section = section;
    }
  }
}
</script>

<style>
#all-posts {
  width: 100%;
  margin: 0 auto;
  padding-top: 4rem;
  padding-left: 1rem;
  height: auto !important;
}

#all-posts .btn-group .btn:first-child {
  border-radius: 4px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

#all-posts .btn-group .btn:last-child {
  border-radius: 4px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

#all-posts .btn-group .btn-default {
  background: transparent !important;
  border-color: #2F80ED !important;
  color: #2F80ED !important;
}
</style>
