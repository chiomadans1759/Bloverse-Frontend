<template>
    <main>
        <Row type="flex" justify="center">
            <Col span="6">
                <facebook-login class="button"
                appId="416283189263206"
                @login="onLogin"
                @logout="onLogout"
                @sdk-loaded="sdkLoaded">
                </facebook-login>
            </Col>

            <Col>
                <!-- Errors -->
                <div v-if=response class="text-red"><p>{{response}}</p></div>

                <!-- login Button -->
                <a id="signin-button" v-on:click="googleAuth">
                <i class="fa fa-google-plus-official fa-3x"></i>
                    Sign in with Google
                </a>
            </Col>
        </Row>
    </main>
</template>

<script>
import { Row, Col, Form, Icon, Button, Input, FormItem } from 'iview';
import facebookLogin from 'facebook-login-vuejs';
import Vue from 'vue'

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
            FB: undefined,
            section: 'Login',
            loading: '',
            response: ''
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
        },

        googleAuth() {
            Vue.googleAuth().signIn((googleUser) => { 
                console.log(googleUser)
            }, (error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
    main {
        padding-top: 5rem;
    }
</style>
