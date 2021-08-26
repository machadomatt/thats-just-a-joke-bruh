<template>
    <h1 class="text-white py-3 font-bold text-center text-4xl bg-gradient-to-r from-pink-500 to-yellow-500">
        The Joke's On You!
    </h1>

    <hr />

    <div class="md:container mx-auto grid grid-cols-2 gap-4 mt-8">
        <Filter class="col-span-2" @filterChange="filterChanged" />
        <div v-for="joke in jokes">
            <Joke :joke="joke" />
        </div>
    </div>
</template>

<script>
import API from './api.js'
import Joke from './components/Joke.vue'
import Filter from './components/Filter.vue'

export default {
    components: {
        Joke,
        Filter,
    },
    data() {
        return {
            jokes: [],
            customCategories: ['Any'],
        }
    },
    methods: {
        filterChanged(gege) {
            this.customCategories = gege
            this.getJokes()
        },
        getJokes() {
            API.customJokes(this.customCategories)
                .then(({ data }) => (this.jokes = data.jokes))
                .catch((error) => console.log('Error: ', error))
        },
    },
    mounted() {
        this.getJokes()
    },
}
</script>
