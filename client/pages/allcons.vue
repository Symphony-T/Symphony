<template>
<div>
    <div>
<Navbar /> 
  </div>                        
        <div class="h">
            <div id="cons" v-for="conser in c" :key="conser.id">
                <div id= "cadre">
                    <h4>{{conser.name}}</h4>
                    <img :src="`${conser.img}`" alt="conservatory image" id="image">
                        <h5>{{conser.description}}</h5>
                        <h5>📍Localisation: {{conser.localisation}}</h5>
                        <h5 id="phone">price :{{conser.price}}$</h5>
                        <h5>📞{{conser.phoneN}}</h5>
                          <!-- <button v-on:click="" class="delete">Delete</button>
                          <button v-on:click="" class="update">Update</button>
                          <star-rating></star-rating> -->
                          <image-rating src="/images/vueLogo.png"></image-rating>
                          <!-- <p on:click="rate">👍</p>  -->
                          <!-- <p>Rate:{{counter}}</p> -->
                    </div>
            </div>
        </div>
                    <NuxtLink to="conservatory" id="add">Create One </NuxtLink>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ConsService from "~/service/ConsService";
import Navbar from "./navbar.vue"
// import axios from 'axios'

export default defineComponent({
    components: { Navbar },
    data() {
        return {
            c: [],
            counter:1
        }
    }, methods: {
    // showAlert: () => {
    //   alert('Like')
    // }
    rate:()=>{
        this.counter++
    }
  },
    created() {
        ConsService.getConservatory()
            .then(response => {
                this.c = response.data
                console.log(response.data);
            })
    }
})
</script>
<style>
#phone{
    color: #000000;
}
.h{
    margin-top: 50px;
}
h4{
    color: rgb(255, 0, 0);
}
#image{
    position: relative;
    width: 330px;
    height: 200px;
    border-radius:0 0 0 0;
}
#cadre {
    position: relative;
    background-color: #ffffff;
    height: 450px;
    width: 400px;
    margin-top: 20px;
    text-align: center;
    padding-bottom: 20px;
    border-radius: 10px 10px;
    background-color: #f5ecff;
}
#cons{
    width: 400px;
    height: 450px;
    position: relative;
    float: left;
    margin-right: 50px;
    margin-left: 90px;
    /* box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%); */
    margin-bottom: 50px;
    margin-top: 50px;
    border-radius: 10px 10px;
    background-color: #f5ecff;
    }
#cons:hover {
    position: relative;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
    cursor: pointer;
}
#add{
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
                margin-left: 490px;             
}

#add:hover{
                    transform: translateY(-2px);
                }

</style>