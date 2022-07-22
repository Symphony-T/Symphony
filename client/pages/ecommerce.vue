<template>
    <div>
        <div>
            <Navbar />
        </div>


        <div class="hold">
            <div>
                <NuxtLink to="createPiano"><button class="btn-1">Add Piano to Sale</button></NuxtLink>
            </div><br /><br /><br />
            <div class="container-box" v-for="piano in pianos" :key="piano.id">
                <div class="pianoContainer">
                    <img :src="`${piano.img}`" alt="image" />
                    <h3 class="name"><span>Brand:</span> {{ piano.brand }}</h3>
                    <h3 class="price"><span>Price:</span> {{ piano.price }} $</h3>
                    <h3 class="phone"><span>Phone:</span> {{ piano.phone }}</h3>
                    <p class="description"><span>Description:</span> {{ piano.description }}</p>
                    <button class="delete" v-on:click="deleted">Delete</button>
                    <NuxtLink to="updatePiano"><button class="update">Update</button></NuxtLink>
                   
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
    width: 400px;
    height: 400px;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
}


.pianoContainer {
    position: relative;
    background-color: #f5f5f4;
    width: 400px;
    margin-top: 0;
    text-align: center;
    padding-bottom: 30px;
    border-radius: 80px;

}

.pianoContainer h3 {
    position: relative;
    margin-top: 0;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: Lucida Sans;
    font-size: 25px;
}

.pianoContainer h3 span {
    position: relative;
    margin-top: 0;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}

.pianoContainer p {
    position: relative;
    margin-top: 0;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: Lucida Sans;
    font-size: 15px;
}

.pianoContainer p span {
    position: relative;
    margin-top: 0;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}

.container-box {
    position: relative;
    float: left;
    margin-right: 50px;
    margin-left: 90px;
    box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
    margin-bottom: 30px;
    border-radius: 80px;


}

.container-box:hover {
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    cursor: pointer;
}
</style>
