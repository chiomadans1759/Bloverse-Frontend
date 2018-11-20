<template>
    <main>
        <Row type="flex" justify="center">
            <Col span="6">
                <facebook-login class="button"
                appId="416283189263206"
                @login="onFBLogin"
                @logout="onFBLogout"
                @sdk-loaded="FBsdkLoaded">
                </facebook-login>
            </Col>

            <Col>
                <Button v-on:click="googleAuth">
                    Sign in with Google
                </Button>
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
            FB: {
                isConnected: false,
                name: '',
                email: '',
                personalID: '',
                ready: undefined
            },
            Google: {
                loading: '',
                response: ''
            }
        }
    },
    methods: {
        getFBUserData() {
            this.FB.ready.api('/me', 'GET', { fields: 'id, name, email' },
                userInformation => {
                    this.FB.personalID = userInformation.id;
                    this.FB.email = userInformation.email;
                    this.FB.name = userInformation.name;
                }
            )
        },

        FBsdkLoaded(payload) {
            this.FB.isConnected = payload.isConnected
            this.FB.ready = payload.FB
            if (this.isConnected) {
                this.getFBUserData()
            }
        },

        onFBLogin() {
            this.FB.isConnected = true
            this.getFBUserData()
        },

        onFBLogout() {
            this.FB.isConnected = false
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
