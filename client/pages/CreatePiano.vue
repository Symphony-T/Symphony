<template >
    <div>
        <form>
            <h2>Add here your Piano you want to sale </h2>
            <label for="img">Image</label><br />
            <input class="input-field" type="text" placeholder="enter your image" v-model="form.img" /><br />
            <label for="img">Brand</label><br />
            <input class="input-field" type="text" placeholder="brand" v-model="form.brand" /><br />
            <label for="img">Price</label><br />
            <input class="input-field" type="number" placeholder="enter your price" required v-model="form.price" /><br />
            <label for="img">Description</label><br />
            <input class="input-field" type="text" placeholder="enter your description"
                v-model="form.description" /><br />
            <NuxtLink to="ecommerce"><button class="btn" v-on:click="savePiano">Add</button></NuxtLink>
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