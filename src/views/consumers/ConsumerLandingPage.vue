<template> 
    <main>
      <div class="container"> 
        <Col :md="6" :sm="8" :xs="24"  class="side-bar">  
          <Col class ="side-menu">
              <div class = "box1">   
                <feed-categories></feed-categories>
              </div>
              
              <div>
                  <RecentlyRead/>  
              </div>
              
              <div> 
                  <RecentComments/> 
              </div>
          </Col>
        </Col> 
        <Col>
            <ConsumersFeeds/>   
        </Col>
        <Col>
            <ConsumersAdverts/>
        </Col>
      </div>
      <general-footer></general-footer>
    </main>   
</template>

<script>
import { Button, Row, Col, Icon, Input, Form, FormItem } from "iview";
import FeedCategories from "../../components/FeedCategories.vue";
import RecentComments from "../../components/RecentComments.vue";
import RecentlyRead from "../../components/RecentlyRead.vue";
import ConsumersFeeds from "../../components/ConsumersFeeds.vue";
import ConsumersAdverts from "../../components/ConsumersAdverts.vue";
import GeneralFooter from "../../components/TheFooter.vue";

export default {
  components: {
    Button,
    Row,
    Col,
    Icon,
    Input,
    Form,
    FormItem,
    FeedCategories,
    RecentComments,
    RecentlyRead,
    ConsumersFeeds,
    ConsumersAdverts,
    GeneralFooter
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}

.side-menu {
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-right: 1rem;
}

.box1 {
  margin-top: 1.5rem;
}

.box2 {
  display: flex;
  flex-direction: column;
}

.center-content {
  border: 1px solid #ccc;
  margin-top: 1.5rem;
  border-radius: 5px;
  flex: 1;
  height: 31.25rem;
}
.center-content-header {
  height: 5rem;
}
.collapse-menu {
  display: none;
}
.avarter-wrap {
  width: 3rem;
  height: 3rem;
  border: 2px solid #ccc;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 50%;
  margin-left: 2rem;
}
.avarter-wrap img {
  width: 35px;
  height: 12px;
  vertical-align: middle;
}

.para1 {
  font-weight: 800;
}
.para2 {
  text-align: right;
  padding-right: 2rem;
  color: #9c9c9c;
}
.content-image {
  display: flex;
  height: 18.75rem;
}
.content-image img {
  flex: 1;
}
.center-content-footer {
  height: 7.5rem;
  align-items: center;
  width: 100%;
}
.para3 {
  font-weight: 800;
  font-size: 1rem;
  padding: 1.5rem 0 2rem 2rem;
}
.para4 {
  font-weight: 800;
  font-size: 1rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  display: flex;
  margin-top: 2rem;
}

.box3 {
  align-items: center;
}
.icon1 {
  flex: 5;
  color: #333333;
  align-items: left;
}
.icon1 span {
  font-size: 12px;
  text-align: center;
}
.fa-heart {
  padding-right: 1.5rem;
}
.fa-reply {
  padding-right: 2rem;
}
.icon2 {
  flex: 1;
  color: #333333;
}
.box3-content {
  border: 1px solid #ccc;
  height: 20rem;
  width: 70%;
  margin: 1.5rem 0 1rem 0;
  border-radius: 5px;
}

@media only screen and (max-width: 600px) {
  .box1 ul li {
    font-size: 0.7rem;
  }
  .center-content {
    margin-top: 1rem;
  }
  .box1 i {
    width: 1.5rem;
  }
  .box1 {
    margin-top: 1.5rem;
    margin-left: 3rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
  }

  .avarter-wrap {
    width: 2rem;
    height: 2rem;
    padding-top: 0.12rem;
    margin-left: 1rem;
  }
  .avarter-wrap img {
    width: 25px;
    height: 10px;
  }

  .para3 {
    font-size: 0.7rem;
    padding: 1.2rem 0 1rem 1rem;
  }
  .para4 {
    padding-left: 1rem;
  }
  .icon1 {
    flex: 2;
    color: #333333;
    align-items: left;
  }

  .content-image {
    height: 50%;
  }
  .collapse-menu {
    display: block;
    color: #333333;
    font-size: 1.5rem;
    text-align: right;
    cursor: pointer;
    margin: 0;
  }
  .center-content {
    border: 1px solid #ccc;
    margin-top: 0.7rem;
    border-radius: 5px;
    flex: 1;
    height: 18.75rem;
  }
  .center-content-header {
    height: 20%;
  }
  .center-content-footer {
    height: 30%;
  }
  .side-bar {
    display: none;
  }

  .box3 {
    display: none;
  }
}

@media only screen and (max-width: 840px) {
  .box3 {
    display: none;
  }
  .container {
    width: 98%;
  }
  .content-image img {
    flex: 1;
    width: 10px;
  }
  .side-menu {
    margin-left: 2rem;
  }
  .content-image {
    height: 55%;
  }

  .center-content {
    height: 26.75rem;
  }
  .center-content-header {
    height: 17%;
  }
  .center-content-footer {
    height: 28%;
  }
}
</style>
