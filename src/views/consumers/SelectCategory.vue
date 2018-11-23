<template>
    <section class="category-section">
        <h1 id="cat-text">Choose your Interest</h1>
       <Row class="category-wrapper" gutter="20">
            <Col class="categories"  v-for="category in categories" :key="category" :sm="24" :md="8">
                <Card id="category-content">
                <img :src="category.imgURL" alt="">
                <div id="category-info">
                    <p>{{category.name}}</p> <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                </Card>
                
            </Col>
           
          </Row>
 <button id="show-home-feed">Show Home Feed</button>
    </section>
</template>

<script>
import { Row, Col, Card } from 'iview';

export default {
  components: { Row, Col, Card } ,  

  data () {
    return {
      categories: [
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542645384/action-ai-android-595804.jpg"),
          name: "Technology"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542645531/agreement-business-businessmen-886465.jpg"),
          name: "Business"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542646240/blur-close-up-device-442576.jpg"),
          name: "Entertainment"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542646874/arms-care-check-905874.jpg"),
          name: "Health"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542647110/action-adult-banner-1464223_1.jpg"),
          name: "Politics"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542647855/adult-cutting-daylight-1153369.jpg"),
          name: "LifeStyle"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542648172/adult-change-clown-1990.jpg"),
          name: "Comedy"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542648798/affection-attractive-beautiful-1139037.jpg"),
          name: "Relationships"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542649132/adult-beautiful-bride-388240.jpg"),
          name: "Events"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542649264/black-friday-fashion-friends-1345082.jpg"),
          name: "Fashion"
        },
        {
          imgURL:("https://res.cloudinary.com/aolfiligre/image/upload/v1542649405/ball-field-football-47730.jpg"),
          name: "Sports"
        },
      ]
    }
  },

}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.category-section {
    margin: auto;
    width:80%
    
}
#cat-text {
 margin: 30px 0;
}
#category-content {

height: 300px;
margin-bottom: 20px;
background: #353b48;
border-radius: 10px;
color:white;
display: flex;
flex-direction: column;
justify-content: flex-end;
}
.ivu-card-body{
padding:0% !important;
margin:0 !important;

}
#category-content img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position: 50%;
    position: absolute;
    opacity: 0.5;
    border-radius: 10px;
    top:0;
   
   
}
#category-info {
    display:flex;
     align-items: center;
     margin: 0 auto;
     width:85%;
     justify-content: space-between;
     font-size: 20px;
     color:white;
     padding-bottom: 15px;
     font-family: roboto;  
}
#category-info p{
     z-index: 1;
}

#show-home-feed{

    width:350px;
    height:40px;
    margin:15px auto; 
    display: flex;
    justify-content: center;
    background: #2F80ED;
    color:white;
    font-weight: 400;
    font-size: 18px;
    border: none;
    font-family: roboto
    
}
</style>
