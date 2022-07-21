<template>
<div> 
  <div>
<Navbar /> 
  </div>
 <div class="nav">
      <ul class="level">
    
       <li class="lev"><NuxtLink to="beginner">beginner</NuxtLink></li>
       <li class="lev"><NuxtLink to="intermediate">intermediate</NuxtLink></li>
       <li class="lev"><NuxtLink to="master">master</NuxtLink></li>
    
      </ul>
    </div>
</div>
</template>

<script>
import Navbar from './navbar.vue';
export default {
  components: { Navbar },
    name: "level"
}
</script>

<style>

.level{
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

.lev a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
.lev a:hover {
  background-color: #555;
  color: white;
}

</style>
