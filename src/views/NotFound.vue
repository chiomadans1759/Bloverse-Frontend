<template>
    <main class="container">
        <Row id="not-found-container">
          <Col>
            <img src="./../assets/image.svg" alt="" id="err-img">
          </Col>
          <Col>
            <div id="not-found-text">
              <h3>404</h3>
                <span id="err-text">
                  <h6>Whoops!</h6>
                  <p>We can’t find the page you are looking for</p>
                </span>
              <router-link to="/" id="err-btn">return</router-link>
            </div>
          </Col>
        </Row>
    </main>
</template>

<script>
import { Row, Col } from 'iview';

export default {
  components: {Row, Col}
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');

  #not-found-container{
    display: flex;
    top: 20rem;
    justify-content: space-between
  }

  #not-found-text {
    display: grid;
    grid-gap: 1rem;
  }

  #not-found-text h3 {
    font-size: 64px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
  }

  #err-text {
    display: grid;
    grid-gap: 1rem;
  }

  #err-img {
    height: 200px;
  }

  #err-text h6 {
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
  }

  #err-text p{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  #err-btn {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    color: #096DD9;
    border: 1px solid #096DD9;
    padding: 1rem;
    width: 9rem;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 767px) {
    #not-found-container {
      display: flex;
      flex-direction: column;
      top: 13rem;
      margin-left: 9rem;
     
    }

    #err-text p {
    margin-left: -8rem;
    width: 100vw;
    }

    #err-text h6 {
      margin-left: 3rem;
    }

    #not-found-text h3 {
    margin-top: 2rem;
    margin-left: 3rem;
    }

    #err-btn {
      margin-left: 4.5rem;
    }


  }

  @media only screen and (max-width: 360px) {
    #not-found-container {
      display: flex;
      flex-direction: column;
      top: 5rem;
      margin-left: 7rem;
     
    }

    #err-text p {
    margin-left: -4rem;
    width: 100vw;
    font-size: 12px;
    }

    #err-text h6 {
      margin-left: 3rem;
    }

    #not-found-text h3 {
    margin-top: 2rem;
    font-size: 32px;
    margin-left: 6rem;
    }

    #err-btn {
      margin-left: 4.5rem;
    }


  }


</style>
