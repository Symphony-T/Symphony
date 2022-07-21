<template>
    <div>
       <li><NuxtLink to="intermediate">intermediate</NuxtLink></li>
       <li><NuxtLink to="master">master</NuxtLink></li>
        <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4> Beginner Level </h4>
      </div>
    </div>  
    <div class="row">
      <div v-for="sheet in sheets"  v-bind:key="sheet.id" class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
       <div class="card h-100 w-100">
        <div class="embed-responsive embed-responsive-16by9">
          <img 
          class="card-img-top embed-responsive-item"
          :src=sheet.img 
          />
        </div>
       <div class="card-body">
        <h5 class="card-title">{{sheet.name}}</h5>
            <button class="btn btn-outline-danger" style='margin-right:30px'>Like</button>
             <router-link to="/videobeginner"><button class="btn btn-success" style='margin-right:30px'>Watch</button></router-link>
            <button class="btn btn-primary"  v-on:click="download(sheet.pdf)">Download</button>
       </div>
       </div>
       
       
       
       
       <!-- {{sheet.name}} -->

      <!-- <img :src=sheet.img /> -->
      </div>
    </div> 
  </div>
    </div>
</template>
<script lang="ts">

export default {
  name:"beginner"
}
</script>