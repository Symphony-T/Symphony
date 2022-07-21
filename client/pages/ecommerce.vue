<template>
    <div>

        <div class="hold">
            <NuxtLink to="CreatePiano">Create One</NuxtLink>
            <div class="container" v-for="piano in pianos" :key="piano.id">
                <div class="pianoContainer">
                    <img :src="`${piano.img}`" alt="image" />
                    <div class="brand">
                        <h3 class="name">{{ piano.brand }}</h3>
                        <h3 class="price">{{ piano.price }}</h3>
                        <p class="description">{{ piano.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
// import axios from 'axios'

export default defineComponent({
    data() {
        return {
            pianos: []
        }
    },

    created() {
        DataService.getPiano()
            .then(response => {
                this.pianos = response.data
                console.log(response.data);
            })
    },
    name: "ecommerce"
})
</script>