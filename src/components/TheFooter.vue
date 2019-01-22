<template>
  <footer id="the-footer">
    <div class="container">
      <div class="row" id="desktop">
        <div class="col">
          <ul class="list-inline">
            <li class="list-inline-item">
            <router-link to="/">Bloverse</router-link>
            </li>
            <li class="list-inline-item pl-4">
              <router-link to="/terms-and-conditions">Terms</router-link>
            </li>
            <li class="list-inline-item pl-2">
              <router-link to="/privacy-policies">Privacy</router-link>
            </li>
            <li class="list-inline-item pl-2">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>

        <div class="col-auto pt-2">
          <p id="year-text">&copy; {{year}} Bloverse. All Right Reserved</p>
        </div>
      </div>

      <div class="row pt-2" id="mobile">
        <div class="col-8">
          <ul class="list-inline">
            <li class="list-inline-item pl-4" style="font-size:15px;">
              bloverse
            </li>
            <li class="list-inline-item pl-4">
              <router-link to="" id="linkk">Terms</router-link>
            </li>
            <li class="list-inline-item pl-2">
              <router-link to="" id="linkk">Privacy</router-link>
            </li>
            <li class="list-inline-item pl-2">
              <router-link to="/about" id="linkk">About</router-link>
            </li>
          </ul>
        </div>

        <div class="col-12 pt-1">
          <p id="year-text">&copy; {{year}} Bloverse. All Right Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Row, Col } from "iview";

export default {
  components: { Row, Col },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
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
  border-top: 1px solid rgba(0, 0, 0, 0.09);
  position: fixed;
}

#the-footer #mobile {
  display: none;
}

#the-footer .list-inline .list-inline-item:first-child {
  font-family: "Comfortaa", cursive;
  font-size: 16px;
  border-right: 1px solid #cccccc;
  width: 6rem;
}

#the-footer .list-inline .list-inline-item a {
  color: #aaaaaa !important;
  font-size: 13px;
}

#the-footer .list-inline .list-inline-item a:hover {
  color: #333333 !important;
}

#year-text {
  font-family: "Comfortaa", cursive;
  font-size: 10px;
  text-align: right;
}

@media screen and (max-width: 980px) {
  #the-footer #desktop {
    display: none;
  }

  #the-footer #mobile {
    display: block;
  }

  #the-footer .list-inline {
    margin-left: -0.5rem;
  }

  #the-footer .list-inline .list-inline-item:first-child {
    font-family: inherit;
    font-size: 12px;
    border: none;
    width: inherit;
  }

  #the-footer {
    height: auto;
    display: flex;
    justify-items: left;
    margin: auto;
    flex-direction: column;
    padding: 0px;
  }

  #year-text {
    text-align: left;
    padding-top: 0.5rem;
    padding-left: 1rem;
  }

  .list-inline {
    display: flex;
    justify-items: left;
  }

  #linkk {
    font-size: 12px;
  }
}
</style>
