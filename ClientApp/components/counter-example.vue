<template>
    <v-container fill-height>
        <v-layout column align-center justify-center fill-height>
            <h1>Counter</h1>
            <p>This is a simple example of a Vue.js component & Vuex</p>

            <div>
                Current count (Vuex): <strong>{{ currentCount }}</strong>
            </div>

            <div>
                Auto count: <strong>{{ autoCount }}</strong>
            </div>
            
            <v-layout row style="flex:0">
                <v-btn large color="primary" @click.native="incrementCounter">
                    Increment
                </v-btn>

                <v-btn large color="primary" @click.native="resetCounter">
                    Reset
                </v-btn>
            </v-layout>
        </v-layout>
    </v-container>
</template>
<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                autoCount: 0,
            }
        },

        computed: {
            ...mapState({
                currentCount: state => state.counter
            })
        },

        methods: {
            ...mapActions(['setCounter']),

            incrementCounter: function () {
                var counter = this.currentCount + 1;
                this.setCounter({ counter: counter });
            },
            resetCounter: function () {
                this.setCounter({ counter: 0 });
                this.autoCount = 0;
            }
        },

        created() {
            setInterval(() => {
                this.autoCount += 1
            }, 1000)
        }
    }
</script>
<style>

</style>
