<template>
  <div id="step-two-container-head">
    <Col id="step-two" :xs="24">
      <Row>
        <div id="displayphoto-upload">
          <DisplayPhoto id="display-upload-pic" v-model="user.imageUrl" :canEdit="true"/>
          <p>Upload your Profile Picture</p>
        </div>
        <Col :xs="24">
          <Form ref="stepTwoForm" :model="user" :rules="validateUserFields">
            <FormItem prop="username">
              <Input class="my-input" v-model="user.username" readonly placeholder="Username*"/>
            </FormItem>
            <Row type="flex" justify="space-between">
              <Col :xs="24">
                <FormItem prop="password">
                  <Input
                    class="my-input"
                    type="password"
                    v-model="user.password"
                    placeholder="Password*"
                  />
                </FormItem>
              </Col>
              <Col :xs="24">
                <FormItem prop="confirmPassword" :error="passwordError">
                  <Input
                    class="my-input"
                    type="password"
                    v-model="user.confirmPassword"
                    placeholder="Confirm Password*"
                  />
                </FormItem>
              </Col>
            </Row>
            <FormItem prop="gender">
              <Select class="my-select" v-model="user.gender" label="Select Gender">
                <Option
                  v-for="item in genders"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem prop="about">
              <Input
                class="my-input"
                v-model="user.about"
                type="textarea"
                :rows="6"
                placeholder="About..."
              />
            </FormItem>
            <FormItem>
              <Button
                class="my-btn btn-main"
                long
                @click="submitUser"
                style="background: #2D9CDB; color:#fff"
              >SAVE</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </Col>
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
import DisplayPhoto from "./DisplayImage";

export default {
  components: {
    Row,
    Col,
    Button,
    Icon,
    Input,
    Select,
    Option,
    Form,
    FormItem,
    DisplayPhoto
  },
  props: { user: Object },
  data: function() {
    return {
      genders: [
        {
          value: 1,
          label: "MALE"
        },
        {
          value: 2,
          label: "FEMALE"
        }
      ],
      validateUserFields: {
        username: [
          { required: true, message: "Choose a username", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "Provide a password you can remember",
            trigger: "blur"
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: "Type your password Again",
            trigger: "blur"
          }
        ],
        gender: [
          {
            required: true,
            type: "integer",
            message: "You have to choose a gender",
            trigger: "blur"
          }
        ],
        about: [
          { required: true, message: "Tell us about yourself", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    passwordError: function() {
      if (this.user.confirmPassword) {
        if (this.user.confirmPassword !== this.user.password) {
          return "Passwords do not match";
        }
      }
      return null;
    }
  },
  methods: {
    submitUser() {
      this.$refs.stepTwoForm.validate(async valid => {
        if (valid) {
          this.$emit("done");
        } else {
          this.$Message.error("This is an error in the form");
        }
      });
    }
  }
};
</script>

<style>
  #displayphoto-upload {
    width: 80%;
    margin: 2px auto 25px;
  }

  #displayphoto-upload p {
    text-align: center;
    padding: 15px 0;
  }

  #step-two {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    width: 100%;
  }

  #display-upload-pic {
    width: 100%;
    z-index: 1;
  }
</style>
