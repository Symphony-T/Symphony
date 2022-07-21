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
<NuxtLink to="allcons" class="button">See all Conservatorys</NuxtLink>
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
.button{

                display: inline-block;
                outline: 0;
                cursor: pointer;
                border: 2px solid #000;
                border-radius: 3px;
                color: #000;
                background: #fff;
                font-size: 20px;
                font-weight: 600;
                line-height: 28px;
                padding: 12px 20px;
                text-align:center;
                transition-duration: .15s;
                transition-property: all;
                transition-timing-function: cubic-bezier(.4,0,.2,1);   
                text-decoration: none;      
}
 .button:hover{
                    background: rgb(251, 193, 245);
                }
</style>


