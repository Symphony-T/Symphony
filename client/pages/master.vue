<template>
    <div>
        <h1>hello master</h1>
        <ul class="level">
        
       <li class="lev"><NuxtLink to="beginner">beginner</NuxtLink></li>
       <li class="lev"><NuxtLink to="intermediate">intermediate</NuxtLink></li>
       
        </ul>
    </div>
</template>
<script lang="ts">

export default {
  name:"master"
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