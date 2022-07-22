<template>
<div> 
  <div>
<Navbar /> 
  </div>
  
    <div class="row">
             <img src="https://images.alphacoders.com/120/thumb-1920-1203812.png" />
      </div>
</div>
</template>

<script>
import Navbar from './navbar.vue';
export default {
    name: "aboutus",
    components: { Navbar }
}
</script>
<style>
  .page-holder {
    min-height: 100vh;
  }
  #background-div {
    background: url("https://images.alphacoders.com/120/thumb-1920-1203812.png");
  }
  #heading {
    font-weight: 400;
  }