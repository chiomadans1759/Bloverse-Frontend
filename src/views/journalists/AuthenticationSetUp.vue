<template>
  <main class="auth-section">
  <div class="auth-container">
    <div class="auth-header">
     <router-link to="/" class="router-link">
      <img class="logo" src="@/assets/Asset 1.svg" style="height: 40px" />
     </router-link>
         <h3 id="form-instruction">Please fill the form to become a journalist on bloverse</h3>
    <Row type="flex" id="auth-one-two">
      <Col class="steps-container">
        <!-- <Steps id="step" :current="currentPage">
          <Step content="Verify Previous Info"></Step>
          <Step id="last" title="Final" content="Personalize your account"></Step>
        </Steps> -->
      <div class="steps">
          <div class=container> 
            <div class="step-count"> 
              <div class="content" 
                    id="myDiv1" 
                    :class="{ active: currentPage === 1 }"
                    @click="updateCurrentPage(1)">
                <p> 1 </p>
              </div>
              
              <div class="content" 
                    id="myDiv2" 
                    :class="{ active: currentPage === 2 }"
                    @click="updateCurrentPage(2)"> 
                <p> 2 </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    
   </div>
 </div>
    <!-- <h2 id="page-title"> Complete your registration </h2> -->

      
    <section class="auth-form">
      <Row type="flex" justify="center">
        <PageOne id="auth-pageone" v-if="currentPage===1" :user="user" @toNext="updateCurrentPage(2)" />
        <PageTwo v-else :user="user" @done="completeSetup" />
      </Row>
    </section>
  </main>
</template>


<script>
import { Steps, Step, Row, Col, } from 'iview';
import { mapActions, mapState } from 'vuex';

import PageOne from '../../components/SetUpStepOne.vue';
import PageTwo from '../../components/SetUpStepTwo.vue';
  

export default {
  //     props: ['value', 'linkedIn'],
  components: { PageOne, PageTwo, Steps, Step, Row, Col },
  data: function(){
    return {
      currentPage: 1,
    }
  },
  computed: {
    user: {
      get(){
        return this.$store.state.auth.newUser;
      },
      
      set(props){
        this.$store.commit('setNewUser', props);
      }
    },
    ...mapState([
      'auth'
    ])
  },
  watch: {
    'user.firstName': async (val) => {
      await this.generateUsername();
    },

    'user.lastName': async (val) => {
      await this.generateUsername();
    }
  },
  methods:{
    updateCurrentPage(newPage){
      this.currentPage = newPage;
    },

    completeSetup: async function(){
      let success = await this.registerJournalist()
      if(success){
        success = await this.login(this.user)
        if(success){
          this.$Message.success('Registration successfull, You are being redirected to login')
          let username = this.auth.loggedInUser.userName;
          this.$router.push(`/creators/${username}/dashboard`)
        }
      }
      else
        this.$Message.error('Something went wrong');
    },

    ...mapActions([
      'registerJournalist',
      'login',
      'generateUsername'
    ])
  },
  async mounted(){
    await this.generateUsername();
  }
}
</script>

<style scoped>
.steps-container{
  width:100% !important;
  justify-content: space-between !important;

}
.auth-container{
width:28%;
margin:auto;
}
.auth-header{
  padding-top: 20px
}
#form-instruction {
line-height: 30px;
font-size: 16px;
font-weight: 600;
margin: 1rem 1rem 1.5rem 0;
}

section.auth-form {
  margin-top: 1.5rem;
}

#step {
  display: flex;
  justify-content: space-between;
  
}

#step > * {
  flex-grow: 2;
}

#step > #last {
  width: auto !important;
}
.steps-container{

  width:90%
}
.image-upload{
    width: 180px;
  background: #f1f1f1db;
  /* height: 50%; */
  height: 180px;
  margin-top: 5px;
  border-radius: 100px;
  /* border: 1px solid grey; */
  text-align: center;
}

/* steps style */ 
#container{
margin-top:30px
}

.container{
width: 50%;
height: 2px;
/*   background: red; */
border: 1px solid #2D9CDB;
margin: 10px auto;
border-radius: 5px;
display: flex;
justify-content: space-around;
z-index:1;
}

.step-count{
width:100%;
display: flex;
justify-content: space-between;
position: absolute;
top: -10px
}
.auth-section{
  width: 100%
}
/* p{
width: 20px;
height: 20px;
border: 1px solid blue;
text-align: center;
border-radius: 100%;
background:white;
color: blue;
} */

#auth-pageone{
width:32% !important;
}
.content .active{
color: white;
background: #2D9CDB;
}

.content{
width: 40px;
height: 40px;
border: 1px solid #2D9CDB;
text-align: center;
display: flex;
flex-item: center;
border-radius: 50%;
background: white;
color: #2D9CDB
}

.active{
color: white;
background: #2D9CDB
}
.auth-form{

  width:100%;
  margin: 10px auto 
}
p{
margin: auto
}

button{
width: 100px;
padding: 5px;
border: none;
border-radius: 4px;
background: blue;
color: white;
}

@media (max-width: 900px){
  .auth-container{
width:90% !important;
margin:auto;
}
#auth-pageone{
width:90% !important;
  
}
  
}
@media (max-width: 360px){
  .auth-container{
width:90% !important;
margin:auto;
}
#auth-pageone{
width:90% !important;
  
}
}
</style>
