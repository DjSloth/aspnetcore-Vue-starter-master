<template>
    <v-container fill-height>
        <v-layout column justify-center>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>

            <v-card class="table-container">
                <v-data-table :loading="loading"
                              :headers="headers"
                              :items="forecasts"
                              :total-items="totalItems"
                              :pagination.sync="pagination"
                              :must-sort="true"
                              item-key="dateFormatted">
                    <template slot="items" slot-scope="props">
                        <tr v-on:click="props.expanded = !props.expanded">
                            <td>{{ props.item.dateFormatted }}</td>
                            <td>{{ props.item.temperatureC }}</td>
                            <td>{{ props.item.temperatureF }}</td>
                            <td>{{ props.item.summary }}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>
        </v-layout>
               
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            forecasts: [],
            loading: false,
            headers: [
                { text: 'Date', value: 'dateFormatted' },
                { text: 'Temp. (C)', value: 'temperatureC' },
                { text: 'Temp. (F)', value: 'temperatureF' },
                { text: 'Summary', value: 'summary' },
            ],
            totalItems: 0,
            pagination: { sortBy: 'dateFormatted', descending: true, rowsPerPage: 5, page: 1 },
        }
    },

    watch: {
        pagination: {
            handler() {
                this.fetchWeatherHistory();
            },
            deep: true
        },
    },

    methods: {
        async fetchWeatherHistory() {
            this.loading = true;
            // ES2017 async/await syntax via babel-plugin-transform-async-to-generator
            // TypeScript can also transpile async/await down to ES5
            try {
                let response = await this.$http.get('/api/SampleData/WeatherForecasts')
                //this.totalItems = response.data.length;
                this.forecasts = response.data;
                this.loading = false;
            } catch (error) {
                console.log(error)
                this.loading = false;
            }
            // Old promise-based approach
            //this.$http
            //    .get('/api/SampleData/WeatherForecasts')
            //    .then(response => {
            //        console.log(response.data)
            //        this.forecasts = response.data
            //    })
            //    .catch((error) => console.log(error))*/
        }
    },

    async created() {
        this.fetchWeatherHistory();
    }
}
</script>

<style>
</style>
