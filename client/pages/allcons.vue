<template>
<div>
    <div>
<Navbar /> 
  </div>
        <div class="hold">
            <NuxtLink to="conservatory" class="btn--1">Create One </NuxtLink>
            <div class="container" v-for="conser in c" :key="conser.id">
                <div class="CContainer">
                        <h4>{{conser.name}}</h4>
                        <p>{{conser.description}}</p>
                        <img :src="`${conser.img}`" alt="conservatory image">
                        <h5>📍{{conser.localisation}}</h5>
                        <h5>{{conser.price}}$</h5>
                        <h5>📞{{conser.phoneN}}</h5>
                          <button v-on:click="" class="delete">Delete</button>
                          <button v-on:click="" class="update">Update</button>
                    </div>
            </div>
        </div>
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
            c: []
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
h4{
    color: rgb(78, 147, 238);
}
 .btn--1{
    position: relative;
    margin:auto;
    width: 600px;
    height: 45px;
    font-size: 18px;
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
   text-decoration: none;
    font-family: 'Times New Roman', Times, serif;
}

.btn--1:hover {
    background-color: orange;
}
img {
    position: relative;
    width: 400px;
    height: 400px;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
}
.CContainer {
    position: relative;
    background-color: #f5f5f4;
    width: 400px;
    margin-top: 0;
    text-align: center;
    padding-bottom: 20px;
    border-radius: 80px;
}
.container {
    position: relative;
    float: left;
    margin-right: 50px;
    margin-left: 90px;
    box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
    margin-bottom: 30px;
    border-radius: 80px;

}

.container:hover {
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    cursor: pointer;}
</style>