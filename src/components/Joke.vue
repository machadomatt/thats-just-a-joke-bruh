<template>
    <div class="border mb-8 h-full" :class="catBorder">
        <!-- {{ joke }} -->
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
export default {
    name: 'Joke',
    props: {
        joke: Object,
    },
    setup(props) {
        let catBg = ''
        let catBorder = ''

        switch (props.joke.category) {
            case 'Programming':
                catBg = 'bg-green-100'
                catBorder = 'border-green-300'
                break
            case 'Misc':
                catBg = 'bg-blue-100'
                catBorder = 'border-blue-300'
                break
            case 'Dark':
                catBg = 'bg-yellow-100'
                catBorder = 'border-yellow-300'
                break
            case 'Pun':
                catBg = 'bg-purple-100'
                catBorder = 'border-purple-300'
                break
            case 'Spooky':
                catBg = 'bg-indigo-100'
                catBorder = 'border-indigo-300'
                break
            case 'Christmas':
                catBg = 'bg-red-100'
                catBorder = 'border-red-300'
                break
        }


        return { catBg, catBorder }
    },
}
</script>