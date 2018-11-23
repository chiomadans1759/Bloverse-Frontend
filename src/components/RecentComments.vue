<template>
    <Row>
        <Col>
          <Card id="card-Recent">
            <p slot="title" id="title-i">
              Recently Commented
            </p>
            <span slot="extra" >
                <i class="far fa-comments" id="comment-icon"></i>
            </span>
            <ul id="read-list">
                <li id ="comment-items" v-for="item in randomMovieList" :key="item.id">            
                    <p id="comment-text">{{ item.name }}</p>
                    <p id="read-comments">{{item.comment}}</p>
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
          name: 'We are confident of winning Osun gov...',
          comment:  '- Only God will help us'
 
        },
        {
          id: 2,
          name: 'We are confident of winning Osun gov...',
          comment:  '- Only God will help us'
        },
        {
          id: 3,
          name: 'We are confident of winning Osun gov...',
          comment:  '- Only God will help us'
        },
        {
          id: 4,
          name: 'We are confident of winning Osun gov...',
          comment:  '- Only God will help us'
        },
        {
          id: 5,
          name: 'We are confident of winning Osun gov...',
          comment:  '- Only God will help us'
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
    #comment-icon {
        font-size: 35px;
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
    #comment-text{ 
      font-size:14px;
       
    }
    #read-comments {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;
      align-items: center;
      color: rgb(199, 196, 196);
    }
    #item-image{
      width:45px;
      height:45px
    }
</style>

