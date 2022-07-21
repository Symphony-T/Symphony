<template>
    <div>

        <div class="hold">
            <NuxtLink to="conservatory" class="button">Create One</NuxtLink>
            <div class="" v-for="conser in c" :key="conser.id">
                <div class="x">
                        <h4>{{conser.name}}</h4>
                        <p>{{conser.description}}</p>
                        <img :src="`${conser.img}`" alt="conservatory image">
                        <h5>{{conser.localisation}}</h5>
                        <h5>{{conser.price}}</h5>
                        <h5>{{conser.phoneN}}</h5>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ConsService from "~/service/ConsService";
// import axios from 'axios'

export default defineComponent({
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
.x{
    margin: auto;
    float: center;
}
h4{
    float: center;
}
p{
    float: center;
}
img{
    margin: auto;
    width: 15%;
    height: 20%;
}
.button{

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
}
 .button:hover{
                    transform: translateY(-2px);
                }
</style>