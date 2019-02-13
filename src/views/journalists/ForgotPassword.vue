<template>
  <main class="forgot-password">
    <div class="row justify-content-center pt-5">
      <div class="col-md-3 mt-5">
        <div :class="['alert', `alert-${alert.type}`]" v-show="alert.show">
          <b class="alert-heading">{{alert.msg}}</b>
        </div>

        <router-link to="/">
          <img src="@/assets/Logo.svg" style="width: 2.8rem;" alt class="img-logo mb-5">
        </router-link>

        <form>
          <h4 class="mb-4">Enter registered email address to recover password</h4>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="e.g john.doe@mail.com"
            >
          </div>

          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click.prevent="resetPassword"
              :disabled="!email || processing"
            >Submit</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "forgot-password",
  data() {
    return {
      email: "",
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
    ...mapActions(["requestPasswordChange"]),

    async resetPassword() {
      let res = await this.requestPasswordChange(this.email);
      this.alert.show = true;
      if (res.statusCode == 404) {
        this.alert.type = "danger";
        this.alert.msg = "This is not a registered mail on the system.";
      } else if (res.statusCode == 200) {
        this.alert.type = "info";
        this.alert.msg =
          "Reset token has been sent successfully. Kindly check your mail.";
      }
      setTimeout(() => {
        this.alert.show = false;
      }, 10000);
    }
  }
};
</script>

<style scoped>
.forgot-password {
  background-color: #f5f5f5;
  border: 1px solid #eeeeee;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
</style>

