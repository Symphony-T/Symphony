<template>
    <div>
        <h1>hello home</h1>
         <ul class="level">
        <div class="link">
       
       </div>
        </ul>
          <div class="container" v-for="sheet in sheets" :key="sheet.id">
        <div >
          <img :src="`${sheet.img}`" alt="image" class="card" />
          <div class="brand">
            <h3 class="name">{{sheet.name }}</h3>
             <button  >Like</button>
             <router-link to="/videobeginner"><button>Watch</button></router-link>
            <button  v-on:click="download(sheet.pdf)">Download</button>
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
      sheets: [],
    };
  },

  created() {
    DataService.getSheeth().then((response) => {
      this.sheets = response.data;
      console.log(response.data);
    });
  },
});
  
</script>
