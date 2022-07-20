<template>

  <SignUp />
</template>

<script lang="ts">
import Vue from 'vue'
import SignUpVue from '~/components/SignUp.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { SignUpVue}
})
</script>
