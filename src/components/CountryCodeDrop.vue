<template>
  <div class="country-dropDown">
    
   
    <div class="input-countryflex-display">
      <div class="drop-down" v-on:click="downToggle" > 
         <img :src="defaultCountry" alt=""> <Span>{{countryCode}} <i class="down"></i></Span>
      </div>
       <div>
         <Input class="my-input" placeholder="Link to written article three"  />  
       </div>
    </div>
      <div v-show="!toggleState" class="country-list">
        <ul>
          <li v-for="country in countries" :key="country.id" v-on:click="selectCountry(country)" > 
          <img :src="country.imgURL" alt="image here"> {{country.name}}</li>
        </ul>
      </div>
    </div>
    </div>
  
</template>

<script>
import {Input} from "iview";
export default {
  components:{
    Input
  },
  name: 'HelloWorld',
  data () {
    return {
      defaultCountry:require("../assets/logo.png"),
      countryCode:123,
      countries:[
        {
          name: "nigeria",
          imgURL: require("../assets/logo.png"),
          id:234
        },
        {
          name: "canada",
          imgURL: require("../assets/logo.png"),
          id:423
        },
        {
          name: "USA",
          imgURL: require("../assets/logo.png"),
          id:452
        },
      ],
      toggleState: true,
    }
  },
  methods:{
    downToggle: function(){
      this.toggleState =!this.toggleState
    },
    selectCountry: function(value){
    console.log(value.name);
    this.defaultCountry = value.imgURL;
    this.countryCode = value.id;
    this.toggleState =!this.toggleState;
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.country-dropDown{
  min-width: 50px;
  text-align: left;
  margin: auto;
  width: 100%;
  padding-left: 10px;
}
.input-countryflex-display{
  display: flex;
  /* border: 1.2px solid #dcdee2; */
  border-radius: 4px;
}

img{
  width: 20px;
}
ul{
    list-style: none;
    margin: 0px;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 1px solid #dcdee2;
    /* border-radius: 4px; */
    padding-left: 10px;
    overflow: auto;
    height: 100px;
}
li{
  display:block;
}
/* .country-list{
      margin: auto;
    width: 20%;
    padding-left: 10px;
    display: none;
} */

input{
  border:none
}

.country-list{
  position: relative;
  top: -24px;
}

.drop-down{
    margin: auto;
    padding-left: 10px;
    width: 100px; 
}
</style>
