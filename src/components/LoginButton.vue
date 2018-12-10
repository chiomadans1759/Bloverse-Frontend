<template>
  <button id="login-btn" class="btn btn-link" @click="openLogin" :class="{'text-white': color == 'white'}">
    LOGIN
  </button>
</template>

<script>
import { mapMutations } from 'vuex';
import LoginView from '@/views/journalists/AuthenticationSignIn'

export default {
  name: "login-button",
  props: { 
    color: String 
  },
  components: { LoginView },
  methods: {
    ...mapMutations(['setModal']),
    
    openLogin(){
      this.setModal({show: true, currentComponent: LoginView })
    }
  }
}
</script>

<style scoped>
#login-btn {
  font-weight: 500;
}
</style>

