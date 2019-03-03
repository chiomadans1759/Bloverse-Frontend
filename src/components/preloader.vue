<template>
  <span class="preloader">
    <svg height="60" width="60">
      <circle cx="30" cy="30" r="20" stroke-width="10" fill="none"></circle>
    </svg>
  </span>
</template>

<script>
export default {
  name: "preloader"
};
</script>

<style lang="scss" scoped>
$offset: 130;
$stroke: white;

.preloader {
  transform: rotate(-90deg);
  stroke: $stroke;
}

.preloader circle {
  stroke-dasharray: $offset;
  stroke-dashoffset: $offset;
  animation: dash 1.5s infinite;
}

.preloader--dot circle {
  stroke-linecap: round;
  stroke-dasharray: 0.5, 15.1;
  stroke-dashoffset: $offset;
  animation: dash 4s infinite;
}

@keyframes dash {
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -$offset;
  }
}

// Below stuff for position only
.preloader {
  position: absolute;
  top: 5%;
  left: 5%;

  &.preloader--thin {
    left: auto;
    right: 5%;
  }

  &.preloader--fat {
    bottom: 5%;
    top: auto;
  }
}
</style>
