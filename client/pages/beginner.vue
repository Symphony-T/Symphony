<template>
    <div>
      <div>
        <Navbar />
      </div>

        <h1>hello beginner</h1>
         <ul class="level">
        <div class="link">
       <li class="lev"><NuxtLink to="intermediate">Intermediate</NuxtLink></li>
       <li class="lev"><NuxtLink to="master">Master</NuxtLink></li>
       </div>
        </ul>
          <div class="container" v-for="sheet in sheets" :key="sheet.id">
        <div >
          <img :src="`${sheet.img}`" alt="image" class="card" />
          <div class="brand">
            <h3 class="name">{{sheet.name }}</h3>
             <button class="button" >like</button>
             <button class="button">Watch</button>
            <button class="button" v-on:click="download(sheet.pdf)">Download</button>
          </div>
        </div>
      </div>
       </div>
       
       
       
     
     
    
</template>
<script>
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
import Navbar from "./navbar.vue"
// import axios from 'axios'

export default defineComponent({
      components: { Navbar },
  data() {
    return {
      sheets: [],
    };
  },

  created() {
    DataService.getSheet().then((response) => {
      this.sheets = response.data;
      console.log(response.data);
    });
  },
});
  
</script>
<style>

.level{
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

.lev a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
.lev a:hover {
  background-color: #555;
  color: white;
}
.card{
  position: relative;
  width: 200px;
  height: 300px;
  top: 50px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  position: relative;
  top:80px;
  background-color: #e2e2d7;
  width: 400px;
  margin-top: 0;
  text-align: center;
  /* padding-bottom: 20px; */
  border-radius: 80px;

}

.container h1 {
  position: relative;
  margin-top: 0;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: Lucida Sans;
  font-size: 30px;
}

.container{
  position: relative;
  float: left;
  margin-right: 20px;
  margin-left: 30px;
  box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
  margin-bottom: 30px;
  border-radius: 80px;


}

.container:hover {
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  cursor: pointer;
}

.button {
  position: relative;
  width: 90px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: white;
  background-color: rgb(6, 1, 6);
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
  font-family: sans-serif;
}

.button:hover {
  position: relative;

  background-color: #361d2a;
  box-shadow: 0px 15px 20px #D3B1C2;
  color: white;
  transform: translateY(-7px);
}


</style>
