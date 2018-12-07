<template>
  <footer id="the-footer">
    <div class="container">
      <!-- <Row type="flex" justify="space-between" align="middle">
        <Col :sm="12" :md="12" :xs="24">
          <div id="footer-links">
            <p style="font-size: 14px; opacity: 85%;  font-family: 'Comfortaa', cursive;">bloverse</p>
            <span id="vr-line"></span>
            <p id="links-p">Terms</p>
            <p id="links-p">Privacy</p>
            <p id="links-p">About</p>
            <p id="links-p">
              <i class="fas fa-ellipsis-h" id="footer-icon"></i>
            </p>
          </div>
        </Col>
        <Col class="copy-write" :sm="12" :md="12" :xs="24">
          <p id="year-text">2018 Bloverse. All Right Reserved</p>
        </Col>
      </Row> -->

      <div class="row">
        <div class="col">
          <ul class="list-inline">
            <li class="list-inline-item">
              bloverse
            </li>
            <li class="list-inline-item">
              <router-link to="">Terms</router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="">Privacy</router-link>
            </li>
            <li class="list-inline-item">
              <router-link to="">About</router-link>
            </li>
          </ul>
        </div>

        <div class="col-auto pt-2">
          <p id="year-text">&copy; 2018 Bloverse. All Right Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Row, Col } from "iview";

export default {
  components: { Row, Col }
};
</script>

<style>
#the-footer {
  background: #ffffff;
  height: 40px;
  padding-top: 7px;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #aaaaaa;
  position: fixed;
}

#the-footer .list-inline .list-inline-item:first-child {
  font-family: "Comfortaa", cursive;
  font-size: 16px;
  border-right: 1px solid #cccccc;
  width: 9rem;
}

#the-footer .list-inline .list-inline-item a {
  color: #aaaaaa !important;
}

#the-footer .list-inline .list-inline-item a:hover {
  color: #333333 !important;
}

#year-text {
  font-family: "Comfortaa", cursive;
  font-size: 10px;
  text-align: right;
}

@media screen and (max-width: 600px) {
  #the-footer {
    height: 85px;
  }

  #year-text {
    text-align: center;
    padding-top: 1rem;
  }
}
</style>
