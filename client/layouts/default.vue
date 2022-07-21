<template>
  <div>
   
    <CommercePage />
    
  </div>
</template>
<script>
import NavbarVue from '~/components/Navbar.vue'
import CommercePage from '@/pages/CommercePage.vue'
export default {
    name :'default',
    components :{
        NavbarVue,CommercePage
    }

}
</script>