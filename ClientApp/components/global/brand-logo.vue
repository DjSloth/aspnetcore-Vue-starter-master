<template>
    <svg :width="size" :height="size" viewBox="0 0 256 296" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
        <g>
            <path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" :fill="primary"></path>
            <path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" :fill="primary"></path>
            <path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" :fill="secondary"></path>
        </g>
    </svg>
</template>

<script>
export default {
    props: ['size'],
    data () {
        return {
            primary: this.$vuetify.theme.primary,
            secondary: this.$vuetify.theme.secondary,
            accent: this.$vuetify.theme.accent
        }
    }
}
</script>


<style scoped>

</style>
