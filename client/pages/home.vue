<template>

    <div>
      <div>
  <Navbar />
</div>
        <h1>Piano</h1>
         <!-- <ul class="level">
        <div class="link">
       
       </div>
        </ul>
          <div class="container" v-for="sheet in sheets" :key="sheet.id">
        <div >
          <img :src="`${sheet.img}`" alt="image" class="card" />
          <div class="brand">
            <h3 class="name">{{sheet.name }}</h3>
             <button  >Like</button>
             <button>Watch</button>
            <button  v-on:click="download(sheet.pdf)">Download</button>
          </div>
        </div>
      </div> -->
      <div id="q">
        <h5 id="pp">1. “Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings. The artist is the hand that plays, touching one key or another, to cause vibrations in the soul.” – Wassily Kandinsky<br>
2. “Pianos, unlike people, sing when you give them your every growl. They know how to dive into the pit of your stomach and harmonize with your roars when you’ve split yourself open.<br>
And when they see you, guts shining, brain pulsing, heart right there exposed in a rhythm that beats need need, need need, need need, pianos do not run. And so she plays.” – Francesca Lia Blocbrk<br>
3. “When you play, never mind who listens to you.” – Robert Schumann</h5>
        <NuxtLink to="level" id="start">Get start</NuxtLink>
      </div>
       </div>
</template>

<script>
import { defineComponent } from "vue";
import DataService from "~/service/DataService";
import Navbar from "./navbar.vue"

// import axios from 'axios'

export default defineComponent({
  components: { Navbar },
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
<style>
h1{
  text-align: center;
  margin-top: 120px;
}
#pp{
  margin-left: 290px;
}
#q{
  margin-top: 200px;
}
#start{
  
                display: inline-block;
                outline: 0;
                cursor: pointer;
                border: 2px solid #000;
                border-radius: 3px;
                color: #fff;
                background: #000;
                font-size: 20px;
                font-weight: 600;
                line-height: 28px;
                padding: 12px 20px;
                text-align:center;
                transition-duration: .15s;
                transition-property: all;
                transition-timing-function: cubic-bezier(.4,0,.2,1);
                text-decoration: none;
                margin-left: 800px;
}
#start:hover{
         color: #000;
           background: rgb(255, 218, 87);
                }
</style>
