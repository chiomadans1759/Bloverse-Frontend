<template>

<Row id="display-post" type="flex" justify="space-between">
    
<Col class="share-links" :sm="2">
 <Icon type="logo-facebook" v-for="i in 4" :key="i"></Icon>
</Col>
<Col class="main-feed" :sm="20">
<h2 class="border">Lorem Ipsum is simply dummy</h2>
<ul class="summary-feed">
  <li>This lorem ipsum is the first keypoint</li>
  <li>This lorem ipsum is the first keypoint</li>
  <li>This lorem ipsum is the first keypoint</li>
  <li>This lorem ipsum is the first keypoint</li>
</ul>

<img class="main-image" src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799606/samples/ecommerce/accessories-bag.jpg" />

<p class="main-body">
    ICAN (2006) stated that the main purpose of public sector accounting includes; Ascertaining the legitimacy of transactions and their compliance with the established norms, regulations and status, Providing evidence of stewardship, Providing a basis for decision making, Enhancing the appraisal of the efficiency of management, Highlighting the various sources of revenues and the expenditures to be incurred, Evaluating the economy, efficiency and effectiveness with which public sector organizations pursue their goals and objectives, Providing the means by which actual performance may be compared with the target set etc.<br><br>

ICAN (2006) stated that the main purpose of public sector accounting includes; Ascertaining the legitimacy of transactions and their compliance with the established norms, regulations and status, Providing evidence of stewardship, Providing a basis for decision making, Enhancing the appraisal of the efficiency of management, Highlighting the various sources of revenues and the expenditures to be incurred, Evaluating the economy, efficiency and effectiveness with which public sector organizations pursue their goals and objectives, Providing the means by which actual performance may be compared with the target set, etc.<br><br>

ICAN (2006) stated that the main purpose of public sector accounting includes; Ascertaining the legitimacy of transactions and their compliance with the established norms, regulations and status, Providing evidence of stewardship, Providing a basis for decision making, Enhancing the appraisal of the efficiency of management, Highlighting the various sources of revenues and the expenditures to be incurred, Evaluating the economy, efficiency and effectiveness with which public sector organizations pursue their goals and objectives, Providing the means by which actual performance may be compared with the target set, etc.<br><br>

ICAN (2006) stated that the main purpose of public sector accounting includes; Ascertaining the legitimacy of transactions and their compliance with the established norms, regulations and status, Providing evidence of stewardship, Providing a basis for decision making, Enhancing the appraisal of the efficiency of management, Highlighting the various sources of revenues and the expenditures to be incurred, Evaluating the economy, efficiency and effectiveness with which public sector organizations pursue their goals and objectives, Providing the means by which actual performance may be compared with the target set, etc.<br>



</p>    

<section id="trendweek">
                        <Row type="flex" justify="space-between">
                          <i-col id="texta" :sm="8">
                            <h5><p>Similar</p></h5>
                           
                          </i-col>
                
                                
                            </Row>
                                
                
                        </section>
                
                        <section>
                                <Row type="flex" justify="space-between">
                                <Card class="postcard2" style="width:240px">
                            
                                            <img src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799601/samples/animals/three-dogs.jpg" />
                                            <h2 id="cardhead"><p>ENTERTAINMENT</p></h2>
                                            <h2 id="cardtitle"><p>Lorem Ipsum is simply dummy</p></h2>
                                            
                                            
                                    
                                    </Card>
                                    <Card class="postcard2" style="width:240px">
                            
                                            <img src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799605/samples/ecommerce/leather-bag-gray.jpg" />
                                            <h2 id="cardhead"><p>ENTERTAINMENT</p></h2>
                                            <h2 id="cardtitle"><p>Lorem Ipsum is simply dummy</p></h2>
                                            
                                    
                                    </Card>
                                    <Card class="postcard2" style="width:240px">
                            
                                            <img src="https://res.cloudinary.com/aolfiligre/image/upload/v1532799886/mission-impossible-fallout-poster.jpg" />
                                            <h2 id="cardhead"><p>ENTERTAINMENT</p></h2>
                                            <h2 id="cardtitle"><p>Lorem Ipsum is simply dummy</p></h2>
                                            
                                    
                                    </Card>
                                
                                </Row>
                        </section>

                        <Form>
        <FormItem id="input">
            <Input v-model="newComment"  id="searchbox2" type="textarea" :rows="5" placeholder="Reply to this post with  a comment"> </Input>
        </FormItem>
        </form>

         <Button type="success" id="btn-comment" long>Show Comments</Button>






</Col>

</Row>

</template>


<script>
import { Row, Col, Card, Input, Select, Option, Icon, FormItem, Form, Button} from 'iview';

export default {
    components: { Row, Col, Card, Input, Select, Option, Icon, FormItem, Form, Button},
    data: function(){
        return {
           newComment: ''
        }
    },
    methods: {
        show: function () {
            this.visible = true;
        }
    }
    
}


</script>


<style scoped>
#display-post {
  width: 981px;
  margin: auto;
  margin-top: 6rem;


}
.share-links{
display: flex;
flex-direction: column;
border: 1px solid #BDBDBD;
box-sizing: border-box;
border-radius: 5px;
align-items: center;
justify-content: space-around;
height:350px;

}
.main-feed{
font-style: normal;
font-weight: bold;
line-height: normal;
font-size: 20px;

}
.summary-feed{
margin-left:24px;
margin-top: 30px;
font-size: 18px;
height: 130px;
display: flex;
flex-direction: column;
justify-content: space-around;
list-style: circle grey solid;

}

.main-image {
    display: block;
    object-fit: cover;
    width: 750px;
    height:400px;
    margin-top: 20px;
    padding:1px;
    border:1px solid #c8d6e5;
  }

  .main-body{
      margin-top: 25px;
color: #303030;
font-size: 14px;
font-weight: 250;
letter-spacing: 1px;
line-height: 25px;
text-align: justify;


}

#texta {
        margin-top: 50px;
        font-style: bold;
        font-size: 21px;
        line-height: 21px;
        color: #4F4F4F;}

  #text {
        margin-top: 50px;
        font-style: bold;
        font-size: 21px;
        line-height: 21px;
        color: #4F4F4F;
        display: flex;
        justify-content: flex-end;
  }
  hr {
    border: 2px solid #2F80ED;
    margin-top:12px;

  }
  #feedimg{
      margin-top: 0%;
    width: 50%;

  }
  .postcard2{
    margin-top: 30px;

  }
  
  .postcard2 img{
    display: block;
    object-fit: cover;
    width: 100%;
    height:200px;
    border: 1px block #ddd;
  }

  #cardhead{
    margin-top: 23px;
    color: #2F80ED;
    text-align: center;
    font-size: 18px;
    font-weight: 500;

  }
  #cardtitle{
    margin-top: 15px;
    color: #828282;
    text-align: center;
    Font-size: 18px;
    Line-height: 21px;
    font-weight: 500;

   
  }
  #input{
margin-top: 50px;



  }


    

  #trendtoday {
    margin-top: 40px;
  }
  #trendweek {
      margin-top: 40px;
  }
  #trendmonth {
      margin-top: 40px;
  }
   


</style>
<style>
  .postcard2 .ivu-card-body{

        width: 100%;
        height: 320px;
        border: 1px solid #E0E0E0;
        padding: 0px;

      }
       #searchbox .ivu-input {
    padding-left: 1rem !important;
    font-size:18px;btn
    line-height:21px;}

     #searchbox2 .ivu-input {
    padding-left: 1rem !important;
    padding-top:25px;
    font-size:18px;
    line-height:21px;}

    #btn-comment.ivu-btn {
    font-size: 18px;
    width: 100% !important; 
    height:40px;
    
}
#btn-comment.ivu-btn-success {
    color: #2F80ED !important;
    border-color: #2F80ED !important;
    font-size:18px;
    background-color: white !important;
}
#btn-comment.ivu-btn-success:hover {
    color: #2F80ED !important;
}

  
</style>
