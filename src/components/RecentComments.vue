<template>
    <Row>
        <Col>
          <Card id="recent">
            <p  id="title-recent">
              Recently Commented
               <span id="comment-icon">
                <i class="far fa-comments" ></i>
              </span>
            </p>
           
            <ul id="read-list">
                <li id ="comment-items" v-for="item in randomMovieList" :key="item.id">            
                    <p id="comment-text">{{ item.name }}</p>
                    <p id="read-comments">{{ item.comment }}</p>
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

    #recent {
      border: 1px solid#E0E0E0;  
      margin-top:2rem;
      border-radius:5px;
      height:fit-content;
    }
    #comment-icon {
      color: rgb(104, 162, 236);  
      right:0; 
      padding-right:2rem;
      display:inline;
      padding-top:0;
      position:absolute;        
      font-size: 2rem;
    }
     #title-recent{  
      font-family: 'Roboto', sans-serif;
      font-size: 1rem; 
      color: #4F4F4F; 
      font-weight:800;
      background-color:#E0E0E0;
      margin:0;
      padding:2rem;
      height:4rem;
      display:flex;
      align-items: center;         
    }
    #read-list {
      list-style-type: none;
      padding:1rem 0;
    }
    #comment-text{ 
      font-size:.8rem; 
      font-weight: 700;
      color:#4F4F4F;
      padding-left:1rem;
      padding-right:.4rem;      
      list-style-type: none;  
    }
    #comment-items{   
      padding:.4rem 0;    
    }
    #read-comments {
      display: flex;      
      color:rgb(190, 182, 182);
      flex-direction: row;
      justify-content: space-between;
      padding-left:1.3rem;
      align-items: center
    }
@media only screen and (max-width: 840px) {
    #title-recent{   
      font-size: .9rem;   
      padding:2rem .5rem;    
    }
    #comment-icon {    
      padding-right:1rem;         
      font-size: 1.8rem;       
    }
    #comment-text{ 
      font-size:.7rem; 
      padding:0;  
      padding-left:.4rem;   
    }
    #read-comments { 
      padding-left:1rem; 
      font-size:.6rem;
    }
  }
</style>

