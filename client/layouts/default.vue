<template>
  <div>
    <NavbarVue />
    <Nuxt />
  </div>
</template>
<script>
import NavbarVue from '~/components/Navbar.vue'

export default {
  name: 'default',
    components :{
       NavbarVue
    },
  
}
</script>