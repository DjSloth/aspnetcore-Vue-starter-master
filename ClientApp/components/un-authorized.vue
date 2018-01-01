<template>
    <v-container fill-height>
        <v-layout column align-center justify-center fill-height>
            <brand-logo size="10rem" class="mb-4"></brand-logo>
            <h1 class="big-title">403</h1>
            <h5 class="opacity-5">it seems that you do not have the required permissions.</h5>
            <v-btn large color="primary" @click.native="auth.login" class="mt-4">
                LOG-IN
                <v-icon right dark>fingerprint</v-icon>
            </v-btn>
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
