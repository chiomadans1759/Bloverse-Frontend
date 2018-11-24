<template>
  <section >
      <div>
        <FeedsHeader /> 
      </div> 
      <template>
        <p class ="p1">404</p>
        <p class="p2">Oops! The page you are looking for could not be found or does not exist</p>
      </template>
  </section>
</template>

<script>
import FeedsHeader from '../components/FeedsHeader.vue'
import TheFooter from '../components/TheFooter.vue';

export default {
  components: { FeedsHeader, TheFooter },
}
  
</script>

<style>
.p1{
  font-size:10rem;
  text-align:center; 
  font-weight:800;
  padding-bottom:0;
}
.p2{
  text-align:center;
  font-size:1.5rem;
}

@media only screen and (max-width: 600px) {
.p1{
  font-size:6rem;
  padding-top:35%;   
}
.p2{ 
  font-size:1rem;
  padding:1rem 1rem;
}
}
</style>
