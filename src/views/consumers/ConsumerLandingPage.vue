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
        <Col span="12" v-for="i in 3" :key="i">
            <ConsumersFeedsCard/>   
        </Col>
        <Col>
            <ConsumersAdverts />
        </Col>
      </div>
    </main>   
</template>

<script>
import { Button, Row, Col, Icon, Input, Form, FormItem } from "iview";
import FeedCategories from "../../components/FeedCategories.vue";
import RecentComments from "../../components/RecentComments.vue";
import RecentlyRead from "../../components/RecentlyRead.vue";
import ConsumersFeedsCard from "../../components/ConsumersFeedsCard.vue";
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
    ConsumersFeedsCard,
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

</style>
