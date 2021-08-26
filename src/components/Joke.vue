<template>
    <div class="border mb-8 h-full" :class="catBorder">
        <div class="text-xl p-4 mb-2" :class="catBg">
            <span class="font-semibold">Category: </span>
            {{ joke.category }}
        </div>
        <p v-if="joke.type === 'twopart'" class="px-5">
            <span class="font-semibold">1: </span>
            {{ joke.setup }}
            <br />
            <span class="font-semibold">2: </span>
            {{ joke.delivery }}
        </p>
        <p v-else class="px-5">
            <span class="font-semibold">Joke: </span>
            {{ joke.joke }}
        </p>
    </div>
</template>

<script>
import { onMounted, onUpdated, ref } from 'vue'

export default {
    name: 'Joke',
    props: {
        joke: Object,
    },
    setup(props) {
        const catBg = ref('')
        const catBorder = ref('')

        onMounted(() => {
            jokesColor()
        })

        onUpdated(() => {
            jokesColor()
        })

        const jokesColor = () => {
            switch (props.joke.category) {
                case 'Programming':
                    catBg.value = 'bg-green-100'
                    catBorder.value = 'border-green-300'
                    break
                case 'Misc':
                    catBg.value = 'bg-blue-100'
                    catBorder.value = 'border-blue-300'
                    break
                case 'Dark':
                    catBg.value = 'bg-yellow-100'
                    catBorder.value = 'border-yellow-300'
                    break
                case 'Pun':
                    catBg.value = 'bg-purple-100'
                    catBorder.value = 'border-purple-300'
                    break
                case 'Spooky':
                    catBg.value = 'bg-indigo-100'
                    catBorder.value = 'border-indigo-300'
                    break
                case 'Christmas':
                    catBg.value = 'bg-red-100'
                    catBorder.value = 'border-red-300'
                    break
            }
        }

        return { catBg, catBorder, jokesColor }
    },
}
</script>
