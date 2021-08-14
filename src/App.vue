<template>
    <h1 class="text-white py-3 font-bold text-center text-4xl bg-gradient-to-r from-pink-500 to-yellow-500">
      The Joke's On You!
    </h1>

    <hr />

    <div class="md:container mx-auto grid grid-cols-2 gap-4 mt-8">
        <div v-for="joke in jokes">
            <Joke :joke="joke" />
        </div>
    </div>
</template>

<script>
import API from './api.js'
import Joke from './components/Joke.vue'
import { ref } from 'vue'

export default {
    components: {
        Joke,
    },
    setup() {
        const jokes = ref([])

        API.customJokes()
            .then(({ data }) => (jokes.value = data.jokes))
            .catch((error) => console.log('Error: ', error))

        return { jokes }
    },
}
</script>
