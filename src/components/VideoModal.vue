<template>
  <div id="video-modal">
    <iframe :src="source" allow="autoplay" frameborder="0" allowfullscreen></iframe>
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true" @click="closeModal()">
        <i class="fal fa-times"></i>
      </span>
    </button>
  </div>
</template>


<script>
import { Row, Col } from "iview";

export default {
  components: { Row, Col },
  props: {
    source: String
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>


<style scoped>
#video-modal {
  width: 100% !important;
  left: 0%;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
}

#video-modal iframe {
  width: 60%;
  height: 70%;
  object-fit: fill;
}

#video-modal .close span {
  color: #fff;
  position: absolute;
  top: 5%;
  left: 3%;
}

@media only screen and (max-width: 420px) {
  #video-modal iframe {
    width: 99%;
    height: 30%;
  }
}

@media only screen and (max-width: 640px) {
  #video-modal iframe {
    width: 60%;
    height: 40%;
  }
}

@media only screen and (max-width: 840px) {
  #video-modal iframe {
    width: 90%;
    height: 45%;
  }
}
</style>
