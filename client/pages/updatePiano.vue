<template>
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <form>
                <h2>Update your piano's data</h2>
                <label for="img">Image</label><br />
                <input class="input-field" type="text" placeholder="enter your image" v-model="form.img" /><br />
                <label for="img">Brand</label><br />
                <input class="input-field" type="text" placeholder="brand" v-model="form.brand" /><br />
                <label for="img">Price</label><br />
                <input class="input-field" type="number" placeholder="enter your price" required
                    v-model="form.price" /><br />
                <label for="img">Description</label><br />
                <input class="input-field" type="text" placeholder="enter your description"
                    v-model="form.description" /><br />
                <label for="img">Phone</label><br />
                <input class="input-field" type="text" placeholder="enter your phone number"
                    v-model="form.phone" /><br />
                <NuxtLink to="ecommerce"><button class="btn" v-on:click="update">Update</button></NuxtLink>
            </form>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
import Navbar from "./navbar.vue";




export default defineComponent({
    name: "updatePiano",
    components: { Navbar },

    data() {
        return {
            form: {
                id: null,
                img: "",
                brand: "",
                price: 0,
                description: "",
                phone: "",
            }
        }
    },
    // mounted(){
    //     DataService.getPiano()
    //     .then(response=>{
    //         this.form.id = response.data
    //         console.log(response.data);
    //     })
    // },
    methods: {
        update() {
            let data = {
                img: this.form.img,
                brand: this.form.brand,
                price: this.form.price,
                description: this.form.description,
                phone: this.form.phone
            }
            DataService.updatePianoData(data)
                .then((res) => {
                    this.form.id = res.data.id
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },



})

</script>