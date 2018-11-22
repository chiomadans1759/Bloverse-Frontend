<template>
    <Row>
        <Col type="flex" justify="center" style="margin-left: 40px;">
          <Card id="card-Recent">
            <p slot="title" id="title-i">
              Recently Added
            </p>
            <a href="#" slot="extra" >
               <i class="far fa-newspaper" id="news-icon"></i>
            </a>
            <ul id="">
                <li v-for="item in randomMovieList" :key="item.id">
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                    <span>
                        <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                        {{ item.rate }}
                    </span>
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
          name: 'We are confident of winning Osun gov election - PDP'
        },
        {
          id: 2,
          name: 'We are confident of winning Osun gov election - PDP'
        },
        {
          id: 3,
          name: 'We are confident of winning Osun gov election - PDP'
        },
        {
          id: 4,
          name: 'We are confident of winning Osun gov election - PDP'
        },
        {
          id: 5,
          name: 'We are confident of winning Osun gov election - PDP'
        }
      ],
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

    #card-Recent {
        height: 430px;
        width: 310px;
    }
    #news-icon {
        font-size: 20px;
    }
    #title-i {
        width: 310px;
        height: 50px;
        font-family: 'Roboto', sans-serif;
        font-size: 
    }
</style>

