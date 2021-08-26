<template>
    <div>
        <div class="block">
            <div>
                <label class="inline-flex items-center">
                    <input
                        type="radio"
                        class="form-radio text-black"
                        name="radioCat"
                        v-model="cat"
                        value="Any"
                        checked
                        @change="changeFilter"
                    />
                    <span class="ml-2">Any</span>
                </label>
            </div>
            <div>
                <label class="inline-flex items-center">
                    <input
                        type="radio"
                        class="form-radio text-gray-600"
                        name="radioCat"
                        v-model="cat"
                        value="Custom"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Custom</span>
                </label>
            </div>
        </div>
        <div class="flex">
            <div class="">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox text-green-500 disabled:opacity-20 border border-gray-400"
                        value="Programming"
                        v-model="customCats"
                        :disabled="cat == 'Any'"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Programming</span>
                </label>
            </div>
            <div class="ml-2">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox text-blue-500 disabled:opacity-20 border border-gray-400"
                        value="Miscellaneous"
                        v-model="customCats"
                        :disabled="cat == 'Any'"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Miscellaneous</span>
                </label>
            </div>
            <div class="ml-2">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox text-yellow-500 disabled:opacity-20 border border-gray-400"
                        value="Dark"
                        v-model="customCats"
                        :disabled="cat == 'Any'"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Dark</span>
                </label>
            </div>
            <div class="ml-2">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox text-purple-500 disabled:opacity-20 border border-gray-400"
                        value="Pun"
                        v-model="customCats"
                        :disabled="cat == 'Any'"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Pun</span>
                </label>
            </div>
            <div class="ml-2">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox text-indigo-500 disabled:opacity-20 border border-gray-400"
                        value="Spooky"
                        v-model="customCats"
                        :disabled="cat == 'Any'"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Spooky</span>
                </label>
            </div>
            <div class="ml-2">
                <label class="inline-flex items-center">
                    <input
                        type="checkbox"
                        class="form-checkbox text-red-500 disabled:opacity-20 border border-gray-400"
                        value="Christmas"
                        v-model="customCats"
                        :disabled="cat == 'Any'"
                        @change="changeFilter"
                    />
                    <span class="ml-2">Christmas</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Filter',
    emits: ['filterChange'],
    data() {
        return { cat: 'Any', customCats: [] }
    },
    methods: {
        changeFilter() {
            if (this.cat == 'Custom' && this.customCats.length > 0) {
                this.$emit('filterChange', this.customCats)
            }
            if (this.cat == 'Any') {
                this.$emit('filterChange', ['Any'])
            }
        },
    },
}
</script>

<style></style>
