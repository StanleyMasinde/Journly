<script lang="ts" setup>
import { reactive, Ref } from 'vue';
import { RouterLink } from 'vue-router';
import { journlyStore } from '../stores/journly'

const note: CreateJournal = reactive({
    body: '',
    dateTime: new Date()
})

</script>
<template>
    <nav class="shadow-md py-2">
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
    <div>
        <textarea v-model="note.body" autofocus class="w-full border-[0px] ring-0 focus:ring-0 h-screen"
            placeholder="Jot something down"></textarea>
        <button @click.prevent="($event) => journlyStore().createJournal(note)" class="fixed bottom-2 inset-x-2 bg-primary text-white py-2 rounded-xl">
            Save
        </button>
    </div>
</template>