<template>
  <div class="stat-card">
    <img class="graph" src="../assets/Graph.svg" />
    <div class="main-stat">
      <div class="views-stat">
        <span class="stat-view">{{stats.key[2]}}</span>
        <span class="stat-view">{{title}}</span>
      </div>
      <div class="days-stat">
        <div>
          <span class="stat-today">{{stats.key[0]}}&nbsp;&nbsp;</span>
          <span class="stat-today">{{stats.value[0]}}</span>
        </div>
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

  props: ["variant", "title", "stats"]
};
</script>


<style>
.stat-card {
  box-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.1);
  border-radius: 0.125rem;
  height: 11.3125rem;
}

.graph {
  width: 10rem;
  align-self: flex-end;
}

.main-stat {
  display: flex;
  justify-content: space-between;
}

.views-stat {
  display: flex;
  flex-direction: column;
}

.stat-view {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
}

.days-stat {
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
}

.stat-today {
  font-size: 1.5rem;
  font-weight: bold;
}

.stat-week {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

