<template>
<div>
<h1>Conservatory</h1>
  <form  style="max-width:500px;margin:auto">
  <h2>Create a new one</h2>
  <div class="input-container">
    <input class="input-field" type="text" v-model="name" placeholder="Name" name="name">
  </div>
    <input class="input-field" type="text" v-model="description" placeholder="Description" name="description">  
  <div class="input-container"><br> 
   <input class="input-field" type="text" v-model="img" placeholder="Img" name="img">
  </div>
  <div class="input-container">
    <input class="input-field" type="text" v-model="localisation" placeholder="Localisation" name="localisation">
  </div>
  <div class="input-container">
    <input class="input-field" type="number" v-model="price" placeholder="Price" name="price">
  </div>
  <div class="input-container">
    <input class="input-field" type="number" v-model="phoneN" placeholder="Phone Number" name="phoneN">
  </div>

  <button v-on:click="saveCons" class="btn">Post new one</button>
</form>  
</div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import ConsService from "~/service/ConsService";
import Conservatory from '../interface/Cons';
import ResponseData from '../interface/ResponseData';



export default defineComponent ({
  data() {
    return {
      conservatory: {
        id: null,
        name:"",
        description:"",
        img:"",
        localisation:"",
        price:null,
        phoneN:null
      }
    };
  },
  methods: {
    saveCons() {
      let data = {
        name:this.name,
        description:this.description,
        img:this.img,
        localisation:this.localisation,
        price:this.price,
        phoneN:this.phoneN
      }
      ConsService.create(data).then((res: ResponseData)=>{
        this.conservatory.id=res.data.id;
        console.log(res.data)
      })
      .catch((err: Error)=> {
        console.log(err)
      })
    }
  },
})


</script>
<style>
h1{
    text-align: center;
}
h2{
  text-align: center;
}
</style>


