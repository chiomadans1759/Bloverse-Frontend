<template>
  <Row>
    <Col>
      <Card id="recent">
        <p id="title-recent">
          Recently read
          <span id="news-icon">
            <i class="far fa-newspaper"></i>
          </span>
        </p>
        <ul id="read-list">
          <li id="reads-items" v-for="item in randomMovieList" :key="item.id">
            <img id="item-image" :src="item.imgURL">
            <p id="read-text">{{ item.name }}</p>
          </li>
        </ul>
      </Card>
    </Col>
  </Row>
</template>

<script>
import { Row, Col, Card } from "iview";

export default {
  components: { Row, Col, Card },
  data() {
    return {
      randomMovieList: [
        {
          id: 1,
          name: "We are confident of winning Osun gov election - PDP",
          imgURL: require("./.././assets/punch2.png")
        },
        {
          id: 2,
          name: "We are confident of winning Osun gov election - PDP",
          imgURL: require("./.././assets/punch2.png")
        },
        {
          id: 3,
          name: "We are confident of winning Osun gov election - PDP",
          imgURL: require("./.././assets/punch2.png")
        },
        {
          id: 4,
          name: "We are confident of winning Osun gov election - PDP",
          imgURL: require("./.././assets/punch2.png")
        },
        {
          id: 5,
          name: "We are confident of winning Osun gov election - PDP",
          imgURL: require("./.././assets/punch2.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  #recent {
    border: 1px solid#E0E0E0;
    margin-top: 2rem;
    border-radius: 5px;
    height: fit-content;
  }

  #news-icon {
    color: rgb(104, 162, 236);
    right: 0;
    padding-right: 2rem;
    display: inline;
    padding-top: 0;
    position: absolute;
    font-size: 2rem;
  }

  #title-recent {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #4f4f4f;
    font-weight: 800;
    background-color: #e0e0e0;
    margin: 0;
    padding: 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
  }

  #read-list {
    list-style-type: none;
    padding: 1rem 0;
  }

  #read-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: rgb(99, 98, 98);
    padding-left: 1rem;
    padding-right: 0.4rem;
  }

  #reads-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0;
    align-items: center;
  }

  #item-image {
    width: 35px;
    height: 35px;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 840px) {
    #title-recent {
      padding: 2rem 0.5rem;
    }

    #news-icon {
      padding-right: 1rem;
      font-size: 1.8rem;
    }

    #item-image {
      width: 30px;
      height: 30px;
      margin-left: 0.5rem;
    }

    #read-text {
      font-size: 0.7rem;
      padding-left: 1rem;
      padding-right: 0.4rem;
    }
  }
</style>
