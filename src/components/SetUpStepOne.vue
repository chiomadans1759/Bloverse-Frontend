<template>
<Col :md="14" :xs="24">
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
    <FormItem>
      <Input class="my-input" v-model="user.phone" readonly placeholder="Phone*" />
    </FormItem>
    <FormItem>
      <Select class="my-select" placeholder="Category*" v-model="user.category" disabled>  
        <Option v-for="item in categories" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Select class="my-select" placeholder="Country*" v-model="user.country" disabled>  
        <Option v-for="item in countries" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </Select>
    </FormItem>
  </Form>
  <Button long class="my-btn btn-secondary" @click="toNext">NEXT</Button>
</Col>

</template>

<script>
  import { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem } from 'iview';

  import { mapState } from 'vuex';

  export default {
    components: { Row, Col, Button, Icon, Input, Select, Option, Form, FormItem },
    data: function(){
      return {
        validateUserFields: {
          firstName: [
            {required: true, message: 'First name cannot be empty', trigger: 'blur' },
          ],
          lastName: [
            { required: true, message: 'Last name cannot be empty', trigger: 'blur' },
          ]
        }
      }
    },
    computed: {
      user: {
        get(){
          return this.$store.state.user;
        },
        set(props){
          this.$store.commit('updateUser', props);
        }
      },
      ...mapState([
         // map this.count to store.state.count
         'categories',
         'countries'
       ]),
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
  }
</script>


<style scoped>
  #form-setup-one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;

  }

  @media screen and (max-width:768px) {
    #form-setup-one {
      grid-template-columns: 1fr;
    }
  }
</style>