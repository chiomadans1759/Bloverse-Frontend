<template>
  <!-- Helper Template for putting views with different layout structure but belongs to same parents logically under same parent route -->
  <main>
    <div class="row">
      <DashboardHeader style="width:200px; height: 100vh;" />
      <!-- <transition-group name="fade" mode="out-in"> -->
      <router-view class="col-md-9"></router-view>
      <!-- </transition-group> -->
    </div>
  </main>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader';

export default {
  components: { DashboardHeader }
}
</script>
