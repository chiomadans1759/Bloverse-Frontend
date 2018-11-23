<template>
    <Row>
        <Col>
          <Card id="card-Recent">
            <p slot="title" id="title-i">
              Recently read
            </p>
            <span slot="extra" >
               <i class="far fa-newspaper" id="news-icon"></i>
            </span>
            <ul id="read-list">
                <li id ="read-items" v-for="item in randomMovieList" :key="item.id">            
                  <img id="item-image"  :src="item.imgURL" />
                    <p id="read-text">{{ item.name }}</p>
                </li>    
            </ul>
          </Card>
        </Col>
    </Row>
    
</template>

<script>
import { Row, Col, Card } from 'iview';

export default {
  components: { Row, Col, Card },
  data () {
    return {
      randomMovieList: [
        {
          id: 1,
          name: 'We are confident of winning Osun gov election - PDP',
          imgURL: require("./.././assets/punch.png")
        },
        {
          id: 2,
          name: 'We are confident of winning Osun gov election - PDP',
          imgURL: require("./.././assets/punch.png")
        },
        {
          id: 3,
          name: 'We are confident of winning Osun gov election - PDP',
          imgURL: require("./.././assets/punch.png")
        },
        {
          id: 4,
          name: 'We are confident of winning Osun gov election - PDP',
          imgURL: require("./.././assets/punch.png")
        },
        {
          id: 5,
          name: 'We are confident of winning Osun gov election - PDP',
          imgURL: require("./.././assets/punch.png")
        }
      ],
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

    #card-Recent {
        height: 450px;
        width: 310px;
        border: 1px solid #F2F2F2;
    }
    #news-icon {
        font-size: 35px;
        transform: rotate(45deg);
        color: #2F80ED;
        margin-top: 20px;
    }
    #title-i {
        width: 310px;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        line-height: 21px;
        color: #4F4F4F;
        margin-top: 30px;
        
    }
    #read-list {
      list-style-type: none;
   
    }
    #read-text{
      
      font-size:16px;
       width: 200px;
       font-weight: 500;
       
    }
    #read-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;
      align-items: center
    }
    #item-image{
      width:45px;
      height:45px
    }
</style>

