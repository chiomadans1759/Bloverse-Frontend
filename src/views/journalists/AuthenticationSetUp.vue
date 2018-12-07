<template>
  <main class="auth-section">
    <h2 id="page-title"> Complete your registration </h2>
    <Row type="flex" justify="center">
      <Col :md="14" class="steps-container">
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
    
      
    <section class="auth-form">
      <h3 id="form-instruction">Fill the form below to become journalist on Bloverse</h3>
      <Row type="flex" justify="center">
        <PageOne v-if="currentPage===1" :user="user" @toNext="updateCurrentPage(2)" />
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
#form-instruction {
  text-align: center;
  margin-bottom: 3rem !important;
}

section.auth-form {
  margin-top: 6rem;
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
width: 100%;
height: 3px;
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
justify-content: space-around;
position: absolute;
top: -10px
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


.content .active{
color: white;
background: #2D9CDB;
}

.content{
width: 40px;
height: 50px;
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

@media (max-width: 992px){
  .steps-container{
    display: block;
    width: 70%;
  }
}
</style>
