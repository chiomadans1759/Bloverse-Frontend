<template>
  <main>
    <div id="all-posts">
      <div class="row no-gutter" id="posts-tabs">
        <div class="col-xs-6 pt-1" @click="currentSection('postp')" :class="{'active': current_section == 'postp'}">
            <p class="text-uppercase">all posts</p>
        </div>
        <div class="col-xs-6 pt-1" @click="currentSection('draft')" :class="{'active': current_section == 'draft'}">
            <p class="text-uppercase">all drafts</p>
        </div>
      </div>
    </div>

     <br /><br />
      <div v-if="showPosts">
        <Row v-show="current_section == 'draft'" id="draft-container" >
          <Col>
            <DraftCard />
          </Col>
        </Row>

        <Row v-if="current_section == 'postp'" type="flex" justify="space-between" :gutter="12">
          <Col v-for="post in journalist.posts" :key="post.id" :sm="24" :md="8">
            <FeedCard :post="post" style="height: 414px;" />
          </Col>
        </Row>
      </div> 
      <div class="showposts" v-else>
        <h2>This Place looks empty !</h2><br />
        <router-link :to="`/creators/${auth.loggedInUser.userName}/posts/create`" id="showbutton">Create Posts Here</router-link>
      </div>
  </main>
</template>


<script>
import { Row, Col, Button, Card } from 'iview';
import { mapState, mapActions } from 'vuex'

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
    }
  },
  async created () {
    // fetch the data when the view is created and the data is
    // already being observed
    await this.getMyPosts()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getMyPosts'
  },
  methods: {
    ...mapActions([
      'getMyPosts'
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
}

.showposts{
  text-align: center;
  margin-top: 15%;
}

.showposts h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  padding-left: 5rem !important;
}
  

.showposts #showbutton {
  background: #1497C9;
  color: #fff;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
}

.mypost-container {
  margin: 0 auto;
  width: 70%;
  overflow-x: hidden !important;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 10rem;
}

#all-posts #posts-tabs {
  width: 20%;
  height: 2rem;
  background-color: #ffffff;
  border: 1px solid #096DD9;
  border-radius: 4px;
  justify-content: left
  
}
#all-posts #posts-tabs .col-xs-6 {
  height: 100%;
  color:#096DD9;
  cursor: pointer;
}
#all-posts #posts-tabs .col-xs-6 p {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding:0.2rem 0.3rem 0.2rem 0.5rem;
}
#all-posts #posts-tabs .active {
  color: #ffffff;
  background:#096DD9;
}

#draft-container {
  display: flex;
  align-items: center
}
</style>
