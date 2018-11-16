<template>
  <BaseDocs
    title="GUIDE TO PUBLISH AN ARTICLE"
    about=''
  >
    <Row type="flex" justify="right">
      <Col>
        <h3 class="">To publish an article;</h3>
      </Col>
    </Row> 
    <div> 
      <ol>
        <li> On the left side menu, Click on <b>Create a Post</b> </li>
        <li> Then you will be provided the required text areas to enter the post Details (Article Title, Summary and an attached Image)</li>
        <li> After providing the necessary details, Click on <b>Preview</b> </li>
        <li> The <b>Preview Page</b> provides a text area on Left where content can be edited and a text area on the Right where content can be previewed <br>
            The <b>Preview</b> consists of the following description;
            <ul>
                <li> Title, Summary, Body, Picture, Named Entities (gotten from the post), </li>
                <li>  Buttons to <b>Generate text</b> from named entities, (to <b>Save</b> post as a draft, to Discard post, to <b>Publish</b> post).</li>
             </uL>
         </li>
        <li> On ensuring that your post is in check, Click <b>Generate text</b> to generate text for posting to Social media </li>
        <li> Click on either <b>Save as draft</b> which saves but doesn't publish the post. </li>
        <li> Or Click Publish which publishes to the article to <b>Bloverse</b> community and all <b>Bloverse's social media accounts (Twitter, Facebook, Linkedln etc)</b> </li>
        <li> Then you’d be requested to provide a Modal to authorize publishing to your personal social media accounts. </li>
        <li> After which you would be redirects to the <b>Feeds.</b></li>
      </ol>
    </div>
  </BaseDocs>
</template>


<script>
import { Row, Col, Input } from "iview";
import BaseDocs from "../layouts/BaseDocs.vue";
import data from "../data.js";

export default {
  components: { BaseDocs, Row, Col, Input },
  data: function() {
    return {
      rules: data.rules[this.$route.params.person]
    };
  },
  watch: {
    $route(to, from) { // eslint-disable-line
      // react to route changes...
      this.rules = data.rules[to.params.person];
    }
  }
};
</script>
<style scoped>
ol {
  /* list-style: none; */
  margin-left: 0;
}

li {
  /* counter-increment: custom; */
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 12px;
  padding-left: 20px;
  width: 80%;
}

a {
  color: #071625;
  background: 0 0;
  outline: 0;
  cursor: pointer;
  -webkit-transition: color 0.2s ease;
  transition: color 0.2s ease;
}

h3 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 25px;
}
</style>