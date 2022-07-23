<template>
    <div id="body">
        <div>
            <Navbar />
        </div>


        <div class="hold">
            <div>
                <NuxtLink to="createPiano"><button id="add">Add Piano to Sale</button></NuxtLink>
            </div><br /><br /><br />
            <div id="container" v-for="piano in pianos" :key="piano.id">
                <div id="pianoContainer">
                    <h4 class="name"><span>Brand:</span> {{ piano.brand }}</h4>
                    <img :src="`${piano.img}`" alt="image" />
                    <h5 class="price"><span>Price:</span> {{ piano.price }} $</h5>
                    <h5 class="phone"><span>Phone:</span> {{ piano.phone }}</h5>
                    <h5 class="description"><span>Description:</span> {{ piano.description }}</h5>
                    <button id="delete" v-on:click="deleted"></button>
                    <NuxtLink to="updatePiano" id="update"></NuxtLink>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
import Navbar from "./navbar.vue";





export default defineComponent({
    name: "ecommerce",
    components: { Navbar },

    data() {
        return {
            pianos: [],
        };
    },
    methods: {
        created() {
            DataService.getPiano()
                .then(response => {
                    this.pianos = response.data
                    console.log(response.data);
                })
                .catch(err=>{
                    console.log(err)
                })

        },
        deleted(index) {

            if (confirm("Confirm your delete")) {

                DataService.deletePiano()
                    .then(response => {
                        console.log(response);
                        this.pianos.splice(index, 1)
                        return this.pianos
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
            //    axios.delete(`http://localhost:2000/piano/${id}`)
            //         .then((response) => {
            //           console.log(response);
            // this.created()
            // this.pianos.splice(index,1)
            // console.log(response)
            //     // return this.pianos
            // });
        },
    },
    mounted() {
        this.created()

    }
    

})
</script>

<style>

.btn-1 {
    position: relative;
    margin-left: 550px;
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
    font-family: 'Times New Roman', Times, serif;
}

.btn-1:hover {
    background-color: orange;
}

img {
    position: relative;
    width: 330px;
    height: 300px;
    border-radius:0 0 0 0;
}


#pianoContainer {
    position: relative;
    height: 500px;
    width: 400px;
    margin-top: 20px;
    text-align: center;
    padding-bottom: 20px;
    border-radius: 10px 10px;
    background-color: #e6ebff;
}

#container{
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
    background-color: #e6ebff;
    margin-bottom: 100px;
}

#container:hover {
    position: relative;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
    cursor: pointer;
}
#delete{
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px
}
#delete::after,
#delete::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 4px;
    top: 7px;
    left: 1px
}
#delete::after {
    transform: rotate(-45deg)
}
#update {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px
 }

#update::after
{
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg)
 }

</style>
