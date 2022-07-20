<template>
    <Ecommerce />
   <!-- <SignUp />  -->
</template>

<script lang="ts">
import Vue from 'vue'
import SignUp from '~/components/SignUp.vue'
import Ecommerce from '~/components/Ecommerce.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { Ecommerce }
})
</script>
