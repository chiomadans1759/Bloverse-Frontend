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

        <Row v-if="current_section == 'postp'" type="flex" justify="space-between" :gutter="16">
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.showposts{
  text-align: center;
  margin-top: 15%;
}

.showposts h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 40px;
}

.showposts #showbutton {
  background: #1497C9;
  color: #fff;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
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
  margin: 0 auto;
  width: 35%;
  height: 3rem;
  background-color: #ffffff;
  border: 1px solid #096DD9;
  border-radius: 4px;
}
#all-posts #posts-tabs .col-xs-6 {
  height: 100%;
  color:#096DD9;
  cursor: pointer;
}
#all-posts #posts-tabs .col-xs-6 p {
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
#all-posts #posts-tabs .active,
#all-posts #posts-tabs .col-xs-6:hover {
  color: #ffffff;
  background:#096DD9;
}

#draft-container {
  display: flex;
  align-items: center
}
</style>
