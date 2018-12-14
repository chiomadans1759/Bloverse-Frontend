<template>
<div style="width: 50%;">
  <Col :md="30" :xs="24">
  <Form id="form-setup-one" ref="stepOneForm" :model="user" :rules="validateUserFields">
    <FormItem prop="firstName">
      <Input class="my-input" v-model="user.firstName" placeholder="First name*" />
    </FormItem>
    <FormItem prop="lastName">
      <Input class="my-input" v-model="user.lastName" placeholder="Last name*" /> 
    </FormItem>
    <FormItem>
      <Input class="my-input" v-model="user.email" readonly placeholder="Email*" />
    </FormItem>
    <!-- <FormItem>
      <Input class="my-input" v-model="user.phone" readonly placeholder="Phone*" />
    </FormItem> -->
    <FormItem>
      <select v-model="user.code" class="code-dropdown app_select_style">
        <option class="country-dropdown"  v-for="(val, index) in countriesCodeFlag" :value="val.code" :key="index">
          <img :src="val.imgURL" style="height:15px, background:url"/> {{ val.code }}   
        </option>
      </select>
    <input class="my-input app_input_style" type="text" v-model="user.phone" placeholder="Digits after code here " />
    </FormItem>

    <FormItem>
      <Select class="my-select" placeholder="Category*" v-model="user.categoryId">  
        <Option v-for="item in general.categories" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Select class="my-select" placeholder="Country*" v-model="user.countryId">  
        <Option v-for="item in general.countries" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </Select>
    </FormItem>
  </Form>
  <Button long class="my-btn btn-secondary" style="background:#2F80ED; color: #fff;" @click="toNext">NEXT</Button>
  </Col>
</div>
</template>

<script>
import { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem } from 'iview';
import { mapState } from 'vuex';
import countryFlags from '../countryFlags.js';


export default {
  props: { user: Object },
  components: { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem },
  watch: {//watch for changes in the applicant phoneNumber
    'user.phone': function(newValue){
      const result = newValue.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "");
      this.$nextTick(() => this.user.phone = result);  
    }

  },
  data: function(){
    return {
      validateUserFields: {
        firstName: [
          {required: true, message: 'First name cannot be empty', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Last name cannot be empty', trigger: 'blur' },
        ]
      },
      phoneCode: '+1'
    }
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'general'
    ]),
    countriesCodeFlag() {
      let sorted = countryFlags.sort((a, b) => {
        if (a.code > b.code) return 1;
        if (a.code == b.code) return 0;
        if (a.code < b.code) return -1;
      })

      return sorted;
    }
  },
  methods: {
    toNext(){
      this.$emit('toNext');
      /* this.$refs.stepOneForm.validate(valid=> {
          if(valid){
            this.$emit('toNext');
          }else{
            this.$Message.error('Some required fields were not field');
          }
          
        })*/
    }
  }
};
</script>


<style scoped>
  #form-setup-one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;

  }
  .app_input_style{
    margin-left: 2px;
    width: 75%;
    border: 1px solid #dcdcdc;
  } 
  .app_select_style{
    border: 1px solid #dcdcdc;
  }

  @media screen and (max-width:768px) {
    #form-setup-one {
      grid-template-columns: 1fr;
    }
    .app_input_style{
    margin-left: 0px;
    width: 69%;
    border: 1px solid #dcdcdc;
  }
  }
</style>
