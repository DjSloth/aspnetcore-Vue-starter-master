<template>
    <v-container fill-height>
        <v-layout column align-center justify-center fill-height>
          <brand-logo size="10rem" class="mb-4"></brand-logo>
          <h1 class="big-title">404</h1>
          <h4 class="opacity-5">it seems the page you are lokking for does not exists.</h4>
        </v-layout>
    </v-container>
</template>
<script>
    import BrandLogo from './global/brand-logo'

    export default {
        props: ['auth'],

        components: {
            'brand-logo': BrandLogo
        },

        data() {
            return {

            }
        }
    }
</script>
<style scoped>

</style>
