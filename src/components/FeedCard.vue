<template>
  <router-link :to="`posts/${post.slug}`">
  <div class="container">
    <Card class="feed-card">
      <div id="sectionWidth" type="flex" justify="space-around">
        <Avatar :src="post.author.image_url"/> &nbsp; <span>{{post.author.first_name}} {{post.author.last_name}}<p style="float: right; margin-top: 5px;">{{post.published | customizedTime}}</p></span>
      </div>
      <img :src="imageUrl" />
      
      
      <h2 id="category"><p>{{category}}</p></h2>
      <h2 id="title"><p>{{post.title}}</p></h2>
      <footer type="flex" justify="space-around" id="postFooter">
        <Icon type="md-eye" /> {{post.views}}
        <Icon type="md-text" style="margin-left: 15px;" /> 54
       <b style="float:right">{{postDate}}</b>
      </footer>
      
    </Card>
  </div>
  </router-link>
</template>

<script >
import { Card, Avatar, Icon } from "iview";
import { mapState } from "vuex";

export default {
  name: "FeedCard",
  props: { post: Object },
  components: { Card, Avatar, Icon },
  data() {
    return {
      postDate: ""
    };
  },
  computed: {
    imageUrl: function() {
      return this.post.image_url;
    },
    ...mapState(["general"]),
    category() {
      const postCategory = this.general.categories.find(
        category => category.id === this.post.category
      );
      return postCategory.name;
    }
  },
  mounted() {
    this.formatDate();
  },
  methods: {
    formatDate() {
      var mydate = new Date(this.post.published);
      // var mydate = new Date('2014-04-03');
      // console.log(mydate.toDateString());
      this.postDate = mydate.toDateString();
    }
  },
  filters: {
    summarize: function(value) {
      if (!value) return "";
      return value.substring(0, 60);
    }
  }
};
</script>

<style scoped>
.container {
  margin: 30px;
}

.feed-card {
  color: #828282;
  margin: 0 !important;
  border: 2px solid rgb(236, 230, 230);
  border-radius: 20px;
  padding: 10px;
}
.feed-card img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 195px;
  border: 1px block #ddd;
  cursor: pointer;
}
/* footer {
  position: absolute;
  bottom: 0;
  margin: 20px;
} */
footer {
  margin-top: 6%;
  padding: 0px 20px;
}
#category {
  margin-top: 20px;
  color: #2f80ed;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
}
#title {
  margin-top: 15px;
  color: #828282;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
}

#summary {
  margin: 10px 40px;
  font-size: 18px;
}
#sectionWidth {
  height: 6vh;
  margin: 5px;
}
/* #postFooter {
  bottom: 0;
  position: absolute;
} */
</style>


<style>
.feed-card .ivu-card-body {
  height: 400px;

  border-radius: 20px;
  padding: 0px;
  width: 100%;
}
.ivu-row {
  position: relative;
  margin-left: 0;
  margin-right: 0;
  margin-right: 0px !important;
}
</style>
