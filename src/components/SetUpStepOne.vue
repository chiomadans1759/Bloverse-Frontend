<template>
  <div style="width: 32%;">
    <Form id="form-setup-one" ref="stepOneForm" :model="user" :rules="validateUserFields">
      <FormItem prop="firstName">
        <Input class="my-input" v-model="user.firstName" placeholder="First name*"/>
      </FormItem>
      <FormItem prop="lastName">
        <Input class="my-input" v-model="user.lastName" placeholder="Last name*"/>
      </FormItem>
      <FormItem>
        <Input class="my-input" v-model="user.email" placeholder="Email*" readonly/>
      </FormItem>
      <FormItem class="auth-phone">
        <select v-model="user.code" class="code-dropdown app_select_style" disabled>
          <option
            class="country-dropdown"
            v-for="(val, index) in countriesCodeFlag"
            :value="val.code"
            :key="index"
          >
            <img :src="val.imgURL" style="height:15px, background:url">
            {{ val.code }}
          </option>
        </select>
        <input
          class="my-input app_input_style"
          type="text"
          v-model="user.phone"
          placeholder="Digits after code here "
          readonly
        >
      </FormItem>
      <section>
        <Select
          v-if="user.university"
          class="my-select auth-category-disabled"
          placeholder="University*"
          v-model="user.university"
          disabled>
          <Option v-for="(item, index) in general.universities" :value="item" :key="index">{{ item }}</Option>
        </Select>
        <Select
          v-else
          class="my-select auth-category-disabled"
          placeholder="Category*"
          v-model="user.category"
          disabled>
          <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </section>
      <FormItem>
        <Select class="my-select" placeholder="Country*" v-model="user.country" disabled>
          <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <Button
        class="auth-button my-btn btn-secondary"
        style="background:#2F80ED; color: #fff;"
        @click="toNext"
      >NEXT</Button>
    </Form>
  </div>
</template>

<script>
import {
  Row,
  Col,
  Button,
  Icon,
  Input,
  Select,
  Option,
  Form,
  FormItem
} from "iview";
import { mapState } from "vuex";
import countryFlags from "../countryFlags.js";

export default {
  props: { user: Object },
  components: { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem },
  watch: {
    //watch for changes in the applicant phoneNumber
    "user.phone": function(newValue) {
      const result = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, "");
      this.$nextTick(() => (this.user.phone = result));
    }
  },
  data: function() {
    return {
      validateUserFields: {
        firstName: [
          {
            required: true,
            message: "First name cannot be empty",
            trigger: "blur"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Last name cannot be empty",
            trigger: "blur"
          }
        ]
      },
      phoneCode: "+1"
    };
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      "general"
    ]),
    countriesCodeFlag() {
      let sorted = countryFlags.sort((a, b) => {
        if (a.code > b.code) return 1;
        if (a.code == b.code) return 0;
        if (a.code < b.code) return -1;
      });

      return sorted;
    }
  },
  methods: {
    toNext() {
      this.$emit("toNext");
    }
  }
};
</script>

<style scoped>
  .auth-phone .code-dropdown {
    width: 20% !important;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  #form-setup-one {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    width: 80%;
    margin: auto;
  }

  .app_input_style {
    width: 79.5%;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    padding-left: 10px;
    border: 1px solid #dcdcdc;
  }

  .app_select_style {
    border: 1px solid #dcdcdc;
  }

  .auth-category-disabled {
    margin-bottom: 25px;
  }

  .auth-button {
    margin-top: 5px;
    width: 100%;
  }

  @media screen and (max-width: 320px) {
    #stepone-setup-one {
      width: 100% !important;
      border: 1px solid red;
    }
  }

  @media screen and (max-width: 900px) {
    #stepone-setup-one {
      width: 100% !important;
      border: 1px solid red;
    }
  }

  .auth-phone .code-dropdown {
    width: 20% !important;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  #form-setup-one {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    width: 90%;
    margin: auto;
  }
</style>
