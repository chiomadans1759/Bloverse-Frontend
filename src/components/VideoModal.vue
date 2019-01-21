<template>
  <div id="auth-sign-in">
    <iframe
      src="https://www.youtube.com/embed/EjRM4DMdnGw?autoplay=1"
      allow="autoplay"
      frameborder="0"
      allowfullscreen
    ></iframe>
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
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>


<style scoped>
	#auth-sign-in {
		width: 100%;
		position: fixed;
		z-index: 1;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(0, 0, 0, 0.8);
		height: 100vh;
	}

	iframe {
		width: 60%;
		height: 70%;
		object-fit: fill;
	}

	.close span {
		color: #fff;
		position: absolute;
		top: 5%;
		left: 3%;
	}

	@media only screen and (max-width: 420px) {
		iframe {
			width: 99%;
			height: 30%;
		}
	}

	@media only screen and (max-width: 640px) {
		iframe {
			width: 60%;
			height: 40%;
		}
	}

	@media only screen and (max-width: 840px) {
		iframe {
			width: 90%;
			height: 45%;
		}
	}
</style>
