<template>
  <div class="stat-card">
    <div class="main-stat">
       <i :class="icon" id="stat-icon"></i>
      <div class="views-stat">
        <span class="stat-view">{{stats.key[2]}}</span>
        <p class="stat-title">{{title}}</p>
      </div>
      <div class="days-stat">
          <span class="stat-today">{{stats.key[0]}}&nbsp;&nbsp;</span>
          <span class="stat-today">{{stats.value[0]}}</span>
        <div>
          <span class="stat-week">{{stats.key[1]}}&nbsp;&nbsp;</span>
          <span class="stat-week">{{stats.value[1]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";

export default {
  components: {
    Icon
  },

  props: ["variant", "title", "stats", "icon"]
};
</script>

<style>
.stat-card {
  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.main-stat {
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
}

.stat-title {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
}

.view-stat {
  display: flex;
  justify-content: space-between;
  bottom: 0;
  position: absolute;
}

.stat-view {
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 500;
}

.days-stat {
  margin-top: 3.7rem;
  margin-right: 1.5rem;
} 

.stat-today {
  font-size: 12px;
}

.stat-week {
  font-size: 12px;
}

#stat-icon {
    position: absolute;
    right: -15%;
    font-size: 180px;
    top: -45%;
    color: #000;
    opacity: 0.15;
}
</style>

