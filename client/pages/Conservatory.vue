<template>
<div>
  <div>
    <!-- <Navbar /> -->
  </div>

<h1>Conservatory</h1>
  <form  style="max-width:500px;margin:auto">
  <h2>Create a new one</h2>
  <div class="input-container">
    <input class="i" type="text" v-model="name" placeholder="Name" name="name"/>
  </div>
    <input class="i" type="text" v-model="description" placeholder="Description" name="description"/>  
  <div class="input-container">
   <input class="i" type="text" v-model="img" placeholder="Img" name="img" id="xxx"/>
  </div>
  <div class="input-container">
    <input class="i" type="text" v-model="localisation" placeholder="Localisation" name="localisation"/>
  </div>
  <div class="input-container">
    <input class="i" type="number" v-model="price" placeholder="Price" name="price"/>
  </div>
  <div class="input-container">
    <input class="i" type="number" v-model="phoneN" placeholder="Phone Number" name="phoneN"/>
  </div>

  <NuxtLink to="allcons"  v-on:click="saveCons" id="b">Post new one 🎹</NuxtLink><br /><br />
  <NuxtLink to="allcons" class="cancel">Cancel</NuxtLink>

</form>  
<!-- <NuxtLink to="allcons" class="bttn">See all Conservatorys </NuxtLink> -->
</div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import ConsService from "~/service/ConsService";
import Conservatory from '../interface/Cons';
import ResponseData from '../interface/ResponseData';
import Navbar from "./navbar.vue";



export default defineComponent ({
  components: { Navbar },
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
#b{
                display: inline-block;
                outline: 0;
                border: 0;
                cursor: pointer;
                background: #000000;
                color: #FFFFFF;
                border-radius: 8px;
                padding: 14px 24px 16px;
                font-size: 18px;
                font-weight: 700;
                line-height: 1;
                transition: transform 200ms,background 200ms;
               text-decoration: none; 
               margin-left: 145px;
               }
#b:hover{
                    transform: translateY(-2px);
                }
#xxx{
  margin-top: 15px;
}
.i{
                    padding: 0 10px;
                    text-align: left;
                    transition-property: box-shadow, background;
                    transition-duration: 150ms;
                    transition-timing-function: ease-in-out;
                    background-color: #FFFFFF;
                    border-width: 2px;
                    border-style: solid;
                    border-color: #DAE3F3;
                    border-radius: 0px;
                    color: #272C34;
                    width: 100%;
                    cursor: text;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0px;
                    font-weight: 400;
                    font-style: normal;
                    height: 40px;
                   
                                
}
.i:hover{
                        box-shadow: 0px 2px 4px rgb(39 44 52 / 12%);
                    }
                    :focus{
                        transition-property: border-color, box-shadow, background;
                        border-color: #39414D;
                        outline: 0px;
                        box-shadow: 0 0 0 3px #c5d2e7;
                    }
h2{
  text-align: center;
  color: rgb(21, 111, 185);
}
h1{
  text-align: center;
  float: center;
} 
.cancel{
 
                display: inline-block;
                outline: 0;
                border: 0;
                cursor: pointer;
                border-radius: 8px;
                padding: 14px 24px 16px;
                font-size: 18px;
                font-weight: 700;
                line-height: 1;
                transition: transform 200ms,background 200ms;
                background: transparent;
                color: #000000;
                box-shadow: 0 0 0 3px #000000 inset;
                text-decoration: none; 
                margin-left: 180px;             
}

.cancel:hover{
                    transform: translateY(-2px);
                }
</style>


