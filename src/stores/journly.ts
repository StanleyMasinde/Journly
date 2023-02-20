import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { Journal, CreateJournal } from "../interfaces";


export const journlyStore = defineStore('journly', () => {
    const journals: Ref<Journal[]> = ref([])

    const createJournal = (journal: CreateJournal) => {
        console.log(journal);
        const idbRequest = indexedDB.open('journly', 1)
        idbRequest.onsuccess = (ev) => {
            
            const transaction = idbRequest.result.transaction('journals', 'readwrite')
            transaction.objectStore('journals')
            .add({
                body: journal.body,
                dateTime: journal.dateTime
            })
        }
    }
    return { journals, createJournal }
})