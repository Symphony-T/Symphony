<template>
      <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required/>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required/>
               <label>Password</label>
            </div>
            <div class="content">
               <div class="checkbox">
                  <input type="checkbox" id="remember-me"/>
                  <label for="remember-me">Remember me</label>
               </div>
               <!-- <label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
</label> -->
               <div class="pass-link">
                  <a href="#">Forgot password?</a>
               </div>
            </div>
            <div class="field">
               <input type="submit" v-on:click="login" value="Login"/>
            </div>
            <div class="signup-link">
               Not a member? <NuxtLink to="signup">Signup now</NuxtLink>
            </div>
         </form>
      </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import DataService from "../service/DataService";
import User from '../interface/User';
import ResponseData from '../interface/ResponseData';

export default defineComponent({
  name: "",
    data() {
        return {
          user: {
            email: "",
            password: ""
          } as User,
        };
    },
    methods: {
        login():any {
          let data = {
            email: this.user.email,
            password: this.user.password
          }
        return  DataService.access(data).then((res: ResponseData) => {
             this.user.id = res.data.id;
             console.log("test")
             return res.data
          }).catch((err: Error)=> {
            console.log(err)
          })
        }
    },

})
</script>

<style scoped>
.slider {
  background-color: #ffffff2b;
  border-radius: 100px;
  padding: 1px;
  margin: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  align-items: center;
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, rgba(0, 0, 0, 0.21) 0px 0px 0px 24px inset,
        #22cc3f 0px 0px 0px 0px inset, rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;
}

.slider::after {
  content: "";
  display: flex;
  top: 2.3px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: #e3e3e3;
  border-radius: 200px;
  position: absolute;
  box-shadow: transparent 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 6px 6px;
  transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  will-change: left, background-color;
}

.switch input[type="checkbox"]:checked + .slider {
  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, #22cc3f 0px 0px 0px 2px inset, #22cc3f 0px 0px 0px 24px inset,
        rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;
}

.switch input[type="checkbox"]:checked + .slider::after {
  left: 24px;
}

.switch input[type="checkbox"] {
  display: none;
}
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html,body{
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  background: #9c4d4d;
  /* background: linear-gradient(-135deg, #c850c0, #4158d0); */
}
::selection{
  background: #4158d0;
  color: #fff;
}
.wrapper{
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wrapper .title{
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  
}
.wrapper form{
  padding: 10px 30px 50px 30px;
}
.wrapper form .field{
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper form .field input{
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper form .field input:focus,
form .field input:valid{
  border-color: #4158d0;
}
.wrapper form .field label{
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
form .field input:focus ~ label,
form .field input:valid ~ label{
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
form .content{
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
form .content .checkbox{
  display: flex;
  align-items: center;
  justify-content: center;
}
form .content input{
  width: 15px;
  height: 15px;
  background: red;
}
form .content label{
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
form .content .pass-link{
  color: "";
}
form .field input[type="submit"]{
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: -10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background: linear-gradient(-135deg, #c850c0, #4158d0);
  transition: all 0.3s ease;
}
form .field input[type="submit"]:active{
  transform: scale(0.95);
}
form .signup-link{
  color: #262626;
  margin-top: 20px;
  text-align: center;
}
form .pass-link a,
form .signup-link a{
  color: #4158d0;
  text-decoration: none;
}
form .pass-link a:hover,
form .signup-link a:hover{
  text-decoration: underline;
}
</style>