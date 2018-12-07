<template>
  <button @click="openLogin">LOGIN</button>
</template>

<script>
import { mapMutations } from 'vuex';
import LoginView from '@/views/journalists/AuthenticationSignIn'

export default {
  name: "login-button",
  components: { LoginView },
  methods: {
    ...mapMutations(['setModal']),
    openLogin(){
      this.setModal({show: true, currentComponent: LoginView })
    }
  }
}
</script>
