<template>
<main id="about-body">
  

    <div class="gen_title">
      <h1 id="about-title">
        Welcome To Bloverse
      </h1>
      <p id="about-subtitle">
        Where the people are connected to creators
      </p>
    </div>
  
  <!-- <div class="about-body-container"> -->
    <about-card :customClass="'about-body-container'">

    <img src="@/assets/photo1.png" alt="">
    <div id="about-body-text">
      <h1>About Us</h1>
      <p>We are Bloverse, a content creation platform fostering a global community of engaged and insightful individuals. Together with our global community we are revolutionising the creation and consumption of content</p>
    <!-- </div> -->
 </div>
</about-card>
<about-card :customClass="'about-body-container2'">
   <img src="@/assets/photo2.png" alt="">
    <div id="about-body-text">
      <h1>Goal</h1>
      <p>Our goal is to give everyone a voice and a safe space to express it. With our data-driven approach we aim to ensure that you make the most of your data, with a personalized experienced that ensures you are never far away from the stories that matter to you, whilst also being exposed to the numerous angles to each story that are blocked out by the mainstream media.Our goal is to give everyone a voice and a safe space to express it. With our data-driven approach we aim to ensure that you make the most of your data, with a personalized experienced that ensures you are never far away from the stories that matter to you, whilst also being exposed to the numerous angles to each story that are blocked out by the mainstream media.</p>
    </div>
</about-card>
<about-card :customClass="'about-body-container3'">
    <img src="@/assets/photo3.png" alt="">
    <div id="about-body-text">
      <h1 id>Mission</h1>
      <p>Leveraging state-of-the-art AI techniques, we want to create a content-driven social platform that gives journalists and other content creators a medium to share quality content to an ever-engaging community of people who want to be a part of the story.</p>
    </div>
 
</about-card>
<about-card :customClass="'about-body-container4'">

    <img src="@/assets/photo4.jpg" alt="">
    <div id="about-body-text">
      <h1>The Users</h1>
      <p>For you, the users, we want you to take part and enjoy interacting with content from across the globe, things that are important to you and to make your voice heard. Bloverse filters content by interests, country, comments and interactions to ensure you consume what is relevant to you. With our ranking system we aim to prevent information overload and attempting to fight fake news by ensuring that you consume content from those who know what they are talking about.<p id="about-strong"> #Jointhebloverse</p></p>
    </div>

</about-card>
<div id="about-footer">
 <login-button class="btn btn-outline-primary" >GET STARTED</login-button>


</div>
<br><br><br>
</main>
</template>

<script>
import aboutCard from '@/components/aboutCard/about-card.vue'
import LoginButton from '@/components/LoginButton.vue'

export default {
  components: { LoginButton , aboutCard}
}
</script>
<style lang="scss">
  @import './about.scss';
</style>
