<template>
  <Row>
    <Col>
      <div class="container-card">
        <div class="consumer-feed-card">
          <div id="container-hero">
            <span style="display: flex; align-items: center;">
              <img src ="./../assets/punch2.png" style="width:40px; height: 40px;"/>
              <p style="font-size: 14px; color: #333; font-weight: 500; margin-left: 1rem !important;">John Doe</p>
            </span>
            <p style="display:flex; justify-content: center;">3 Days Ago</p>
          </div>
          <div id="card-body">
            <img src ="./../assets/landingPage.jpg" style="width:100%;"/>
          </div>
          <ul class="summary-container-cards">
            <li id="summary-cards-point">The Peoples Democratic Party has said that it has the confidence of winning Osun state governorship supplementary election.</li>
            <li id="summary-cards-point">The election holds in seven polling units in the state on Thursday.</li>
            <li id="summary-cards-point">The Peoples Democratic Party has said that it has the confidence of winning Osun state governorship supplementary election.</li>
          </ul>
          <div id="card-footer">
            <Col id="icon-share">
              <i class="fa fa-heart" style="padding-right: 1rem;">&nbsp;&nbsp;<span>235</span></i>
              <i class="fab fa-twitch">&nbsp;&nbsp;<span>45</span></i>
            </Col>
            <Col id="icon-reply">
              <i class="fa fa-reply" style="padding-left: -50px;"></i>&nbsp;&nbsp;&nbsp;
              <i class="fa fa-ellipsis-v"></i>
            </Col>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</template>

<script >
import { Row, Col, Icon, Avatar } from "iview";

export default {
  components: { Row, Col, Icon, Avatar },
  data () {
    return {
      postPoints: [
        {
          point: 'The Peoples Democratic Party has said that it has the confidence of winning Osun state governorship supplementary election.',
        },
        {
          point: 'The election holds in seven polling units in the state on Thursday.',
        },
        {
          point: 'The Peoples Democratic Party has said that it has the confidence of winning Osun state governorship supplementary election.'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .consumer-feed-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .consumer-feed-card {
    width:85%;
    height:450px;
    background:white;
    margin:20px auto;  
    transition: top ease 4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #E0E0E0;
  }

  .consumer-feed-card:hover {
    transition: 0.5s ease;
  }

  .summary-container-cards {
    position: absolute;
    height: 67%;
    width: 85%;
    opacity: 0;
    transition: .5s ease;
    background: rgba(26, 25, 25, 0.452);
    margin-top: 5.6rem;
    list-style-type: circle !important;
  }

  #summary-cards-point {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 15px 15px;
    color: #ffffff;
    list-style-type: circle;
    font-size: 15px;
  }

  .consumer-feed-card:hover .summary-container-cards {
    opacity: 1;
    transition:  0.5s ease;
  }

  #consumer-keypoints {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: #1D2129;
    padding: 20px 0;
  }

  #container-hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding-top: 1rem;
  }

  #card-footer {
    font-size: 11px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    padding: 10px
  }

  #icon-share {
    width: 20px;
    height: 18.35px;
    display: flex;
    justify-content: space-between;
    font-size:13px;
  }

  #icon-reply {
    width: 20px;
    height: 18.35px;
    display: flex;
    justify-content: space-between;
    font-size:13px;
  }
</style>
