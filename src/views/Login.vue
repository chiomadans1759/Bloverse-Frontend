<template>
    <main>
        <facebook-login class="button"
        appId="416283189263206"
        @login="onLogin"
        @logout="onLogout"
        @sdk-loaded="sdkLoaded">
        </facebook-login>
    </main>
</template>

<script>
import { Row, Col, Form, Icon, Button, Input, FormItem } from 'iview';
import facebookLogin from 'facebook-login-vuejs';

export default {
    name: 'user-login',
    components: {
      Row, Col, Form, Icon, Button, Input, FormItem, facebookLogin
    },
    data() {
        return {
            isConnected: false,
            name: '',
            email: '',
            personalID: '',
            FB: undefined
        }
    },
    methods: {
        getUserData() {
            this.FB.api('/me', 'GET', { fields: 'id,name,email' },
                userInformation => {
                    this.personalID = userInformation.id;
                    this.email = userInformation.email;
                    this.name = userInformation.name;
                }
            )
        },

        sdkLoaded(payload) {
            console.log(payload)
            this.isConnected = payload.isConnected
            this.FB = payload.FB
            if (this.isConnected) {
                this.getUserData()
            }
        },

        onLogin() {
            this.isConnected = true
            this.getUserData()
        },

        onLogout() {
            this.isConnected = false
        }
    }
}
</script>

<style scoped>

</style>
