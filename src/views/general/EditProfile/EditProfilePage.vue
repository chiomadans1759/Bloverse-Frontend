<template>
  <div class="edit-container">
    <navbar :showBackArrow="showBackArrow" :showNavigations="showNavigations" customClass="back-nav"/>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-12 col-md-4 col-sm-4 col-lg-4">
            <br>
            <br>

            <h3>Edit Profile</h3>

            <br>
            <br>
            <br>
            <form action>
              <div class="row">
                <div class="col-3 col-md-3 col-sm-3 col-lg-3 pr-0">
                  <div class="file_share">
                    <input
                      type="file"
                      name="profileImage"
                      id="profile-image"
                      v-on:change="onChange"
                    >
                    <i class="fal fa-plus"></i>
                  </div>
                </div>
                <div class="col-9 col-md-9 col-sm-9 col-lg-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="User Name"
                    name="username"
                    id="username"
                    v-model="user.username"
                    v-on:change="onChange"
                  >
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                v-model="user.firstname"
                v-on:change="onChange"
              >
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                v-model="user.lastname"
                v-on:change="onChange"
              >
              <div class="row">
                <div class="col-md-3 col-3 pr-0">
                  <select
                    name="countrycode"
                    id="countrycode"
                    v-model="user.countrycode"
                    class="form-control edit__profile--select"
                    v-on:change="onChange"
                  >
                    <option value>+234</option>
                    <option value="+234">+234</option>
                    <option value="+234">+234</option>
                    <option value="+234">+234</option>
                    <option value="+234">+234</option>
                    <option value="+234">+234</option>
                  </select>
                </div>
                <div class="col-md-9 col-9 pl-0">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="000 000 0000"
                    name="phone"
                    id="phone"
                    v-model="user.phone"
                    v-on:change="onChange"
                  >
                </div>
              </div>
              <input
                type="email"
                class="form-control"
                placeholder="Email Adddress"
                name="email"
                id="email"
                v-model="user.email"
                v-on:change="onChange"
              >
              <input
                type="text"
                name="location"
                v-model="user.location"
                id="location"
                class="form-control"
                placeholder="Lagos Nigeria"
                v-on:change="onChange"
              >
              <textarea
                name="bio"
                id="bio"
                v-model="user.bio"
                cols="30"
                rows="4"
                class="form-control"
                v-on:change="onChange"
              ></textarea>
              <br>
              <span class="d-flex justify-content-end span-text">0&#x3C;124</span>
              <br>
              <button type="submit" class="btn btn-primary btn-block edit-btn">Save</button>
            </form>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
  name: "EditProfile",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        bio: "Bio",
        phone: "",
        location: "",
        countrycode: "",
        username: "",
        profileimage: ""
      },
      showNavigations: false,
      showBackArrow: true
    };
  },
  components: { Navbar },
  methods: {
    onChange: function(event) {
      this[event.target.name] = event.target.value;
    }
  }
};
</script>

<style lang="scss" scoped="true">
@import "./EditProfilePage.scss";
</style>
