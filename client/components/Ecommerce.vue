<template>

    <h1>Hello from ecommerce</h1>
    <div>
        <form action="subbmit" style="max-width:500px;margin:auto">
            <h2>Add here your Piano you want to sale </h2>
            <div class="input-container">
                <label for="img">Image</label><br />
                <input class="input-field" type="text" placeholder="enter your image" v-model="form.img" /><br />
            </div>

            <div class="input-container">
                <label for="img">Brand</label><br />
                <input class="input-field" type="text" placeholder="brand" v-model="form.brand" /><br />
            </div>

            <div class="input-container">
                <label for="img">Price</label><br />
                <input class="input-field" type="number" placeholder="enter your price" v-model="form.price" /><br />
            </div>

            <div class="input-container">
                <label for="img">Description</label><br />
                <input class="input-field" type="text" placeholder="enter your description"
                    v-model="form.description" /><br />
            </div>
            <button class="btn" v-on:click="savePiano">Add</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
import ResponseData from '@/interface/ResponseData';
import Piano from "@/interface/Piano";

export default defineComponent({
    data() {
        return {
            form: {
                id: null,
                img: "",
                brand: "",
                price: 0,
                description: ""
            } as Piano,
        };
    },
    methods: {
        savePiano() {
            let data = {
                img: this.form.img,
                brand: this.form.brand,
                price: this.form.price,
                description: this.form.description
            }
            DataService.addPiano(data)
                .then((res: ResponseData) => {
                    this.form.id = res.data.id;
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);

                })
        }
    }
})

</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
}

* {
    box-sizing: border-box;
}

.input-container {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 15px;
}

.input-field {
    width: 100%;
    padding: 10px;
    outline: none;
}

.input-field:focus {
    border: 2px solid dodgerblue;
}

/* Set a style for the submit button */
.btn {
    background-color: dodgerblue;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

.btn:hover {
    opacity: 1;
}
</style>