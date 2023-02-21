import { defineStore } from "pinia";
import { onMounted, ref, Ref } from "vue";
import { Journal, CreateJournal } from "../interfaces";


export const journlyStore = defineStore('journly', () => {
    const journals: Ref<Journal[]> = ref([])
    return { journals }
})