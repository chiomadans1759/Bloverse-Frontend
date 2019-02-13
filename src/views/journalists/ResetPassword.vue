<template>
  <main class="reset-password">
    <div class="row justify-content-center pt-5">
      <div class="col-md-3 mt-5">
        <div :class="['alert', `alert-${alert.type}`]" v-show="alert.show">
          <b>{{alert.msg}}</b>
          <div v-show="alert.code == 200">Password reset successful.
            <login-button color="white"/>
          </div>
        </div>

        <router-link to="/">
          <img src="@/assets/Logo.svg" style="width: 2.8rem;" alt class="img-logo mb-5">
        </router-link>

        <form>
          <h4 class="mb-4">Reset the password by entering accurate values below.</h4>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="pass_one"
              placeholder="New Password"
            >
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="pass_two"
              placeholder="Confirm Password"
            >
          </div>

          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click.prevent="resetPassword"
              :disabled="!pass_one || !pass_two || processing"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import LoginButton from "@/components/LoginButton";

export default {
  name: "reset-password",
  components: { LoginButton },
  data() {
    return {
      token: null,
      pass_one: null,
      pass_two: null,
      processing: false,
      alert: {
        show: false,
        type: null,
        code: null,
        msg: null
      }
    };
  },
  methods: {
    ...mapActions(["changePassword"]),

    async resetPassword() {
      if (this.pass_two === this.pass_one) {
        let res = await this.changePassword({
          token: this.token,
          newPassword: this.pass_one
        });
        this.alert.show = true;
        this.alert.code = res.statusCode;
        if (res.statusCode == 200) {
          this.alert.type = "info";
        }
        setTimeout(() => {
          this.alert.show = false;
        }, 10000);
      } else if (this.pass_two !== this.pass_one) {
        this.alert.show = true;
        this.alert.type = "info";
        this.alert.msg = "Passwords do not match";
        setTimeout(() => {
          this.alert.show = false;
        }, 20000);
      }
    }
  },
  created() {
    this.token = this.$route.params.token;
  }
};
</script>

<style scoped>
.reset-password {
  background-color: #f5f5f5;
  border: 1px solid #eeeeee;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
</style>

