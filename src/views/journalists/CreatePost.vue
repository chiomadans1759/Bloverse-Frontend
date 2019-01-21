<template>
  <div id="create-post">
    <div class="btn-group mb-5 pb-3" role="group">
      <button
        type="button"
        @click="isTravel = false"
        :class="{'btn' : true, 'btn-default': isTravel, 'btn-primary': !isTravel}"
        class="text-uppercase"
      >basic template</button>
      <button
        type="button"
        @click="isTravel = true"
        :class="{'btn' : true, 'btn-default': !isTravel, 'btn-primary': isTravel}"
        class="text-uppercase"
      >photo Contest</button>
    </div>
    <div class="card" id="create-card">
      <div class="card-body">
        <BasicCreatePost :isTravel="isTravel"/>
      </div>
    </div>
  </div>
</template>

<script>
import BasicCreatePost from "@/components/CreatePostBasic.vue";

export default {
  components: { BasicCreatePost },
  data() {
    return {
      isTravel: false
    };
  }
};
</script>

<style scoped>

#create-post {
  padding-top: 3rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
}

#create-post .btn-group .btn:first-child {
  border-radius: 4px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

#create-post .btn-group .btn:last-child {
  border-radius: 4px !important;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
}

#create-post .btn-group .btn {
  border-color: rgba(0, 0, 0, 0.1);
}

#create-post .btn-default {
  background: transparent !important;
  border: 1px solid #2f80ed !important;
  color: #2f80ed !important;
}

#create-post #create-card {
  min-height: 25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
