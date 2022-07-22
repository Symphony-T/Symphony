<template>

<form style="max-width:500px;margin:auto">
  <h2>Change your password </h2>
  <div class="input-container">
    <i class="fa fa-user icon"></i>
    <input class="input-field" type="text" v-model="password1" placeholder="New password" required name="password1"/>
  </div>

  <div class="input-container">
    <i class="fa fa-envelope icon"></i>
    <input class="input-field" type="text" v-model="password2" placeholder="Confirm your password" required name="password2"/>
  </div>
  
 

    <button v-on:click="changePassword" class="btn">Confirm</button>
  </form>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataService from "../service/DataService";
import User from '../interface/User';
import ResponseData from '../interface/ResponseData';

export default defineComponent ({
  name: "newPassword",
  data() {
    return {
        password1:"",
        password2:""

    }
  },
  methods: {
    changePassword(){
let data = {
        password: this.password2,
      }
      DataService.updatePassword(data).then((res: ResponseData) => {
        
        console.log(res.data)
      })
        .catch((err: Error) => {
          console.log(err)
        })
    }
  }
})

</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

.input-container {
  display: -ms-flexbox;
  /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.input-field:focus {
  border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn {
  background-color: dodgerblue;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.btn:hover {
  opacity: 1;
}
</style>