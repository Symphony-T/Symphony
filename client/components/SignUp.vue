<template>

  <form action="/action_page.php" style="max-width:500px;margin:auto">
    <h2>Sign Up here to Create your account </h2>
    <div class="input-container">
      <i class="fa fa-user icon"></i>
      <input class="input-field" type="text" v-model="user.username" placeholder="Username" name="usrnm" />
    </div>

    <div class="input-container">
      <i class="fa fa-envelope icon"></i>
      <input class="input-field" type="text" v-model="user.email" placeholder="Email" name="email" />
    </div>

    <div class="input-container">
      <i class="fa fa-key icon"></i>
      <input class="input-field" type="password" v-model="user.password" placeholder="Password" name="psw" />
    </div>

    <button v-on:click="saveUser" class="btn">Register</button>
  </form>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
import User from '../interface/User';
import ResponseData from '../interface/ResponseData';

export default defineComponent({
  data() {
    return {
      user: {
        id: null,
        email: "",
        username: "",
        password: ""
      } as User,
    };
  },
  methods: {
    saveUser() {
      console.log("zevezvze")
      let data = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      }
      DataService.create(data).then((res: ResponseData) => {
        this.user.id = res.data.id;
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