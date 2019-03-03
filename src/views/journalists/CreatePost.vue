<template>
  <div id="create-post">
    <div class="header">
      <div class="header-body">
        <div class="row align-items-center">
          <div class="col">
            <h6 class="header-pretitle">
              New article
            </h6>

            <h1 class="header-title">
              Create a new article
            </h1>
          </div>

          <!-- <div class="col-auto">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
              type="button"
              
              @click="isTravel = false"
              :class="{'btn' : true, 'btn-white': isTravel, 'btn-primary': !isTravel}"
              class="text-uppercase"
            >basic template</button>
            <button
              type="button"
              @click="isTravel = true"
              :class="{'btn' : true, 'btn-white': !isTravel, 'btn-primary': isTravel}"
              class="text-uppercase"
            >photo Contest</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div>
      <create-post :isTravel="isTravel"/>
    </div>
  </div>
</template>

<script>
import CreatePost from "@/components/CreatePostBasic.vue";

export default {
  components: { CreatePost },
  data() {
    return {
      isTravel: false
    };
  }
};
</script>

<style scoped>

#create-post {
  font-family: "Montserrat", sans-serif;
  margin-bottom: 3rem;
}
</style>
