import axios from 'axios'

const API = axios.create({
    baseURL: 'https://v2.jokeapi.dev/joke',
})

export default {
    anyJokes(limit = 6) {
        return API.get('/Any', {
            params: {
                amount: limit,
            },
        })
    },
    customJokes(categories = ['Any'], flags = [''], limit = 6) {
        let categoriesString = categories.join()
        let flagsString = flags.join()
        return API.get(`/${categoriesString}`, {
            params: {
                amount: limit,
                blacklistFlags: flagsString,
            },
        })
    },
}
