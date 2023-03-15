<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue';
import { RouterLink } from 'vue-router';
import { CreateJournal } from '../interfaces'

const note: CreateJournal = reactive({
    title: '',
    body: '',
})
const successful: Ref<boolean> = ref(false)

const createJournal = (journal: CreateJournal) => {
    const idbRequest = indexedDB.open('journly', 1)
    idbRequest.onsuccess = (ev) => {
        const transaction = idbRequest.result.transaction('journals', 'readwrite')
        transaction.objectStore('journals')
            .add({
                title: journal.title,
                body: journal.body,
                dateTime: new Date()
            })
        transaction.oncomplete = () => {
            successful.value = true
            note.body = note.title = ''
            setTimeout(() => {
                successful.value = false
            }, 5000);
        }
    }
}

</script>
<template>
    <nav class="shadow-md py-2 sticky top-0 inset-x-0 bg-white">
        <ul class="flex justify-between">
            <li>
                <RouterLink to="/" class="h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </RouterLink>
            </li>
        </ul>
    </nav>
    <div id="alert" v-if="successful" class="bg-secondary text-primary py-2 text-center m-2 rounded-lg sticky top-0">
        <h1>Entry added successfuly</h1>
    </div>
    <div class="sticky top-0 mb-16 flex flex-col gap-3 my-2">
        <div class="px-2">
            <label for="title">Title(optional)</label>
            <input v-model="note.title" class="w-full rounded-lg" type="text" maxlength="30" placeholder="A brand new day">
        </div>
        <div>
            <textarea v-model="note.body" autofocus class="w-full border-[0px] ring-0 focus:ring-0 h-screen"
                placeholder="Jot something down"></textarea>
        </div>
    </div>
    <button :disabled="note.body == ''" id="save" @click.prevent="($event) => createJournal(note)"
        class="fixed bottom-2 inset-x-2 bg-primary text-white py-2 rounded-xl disabled:bg-primary/50">
        Save
    </button>
</template>