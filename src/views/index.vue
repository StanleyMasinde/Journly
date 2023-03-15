<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue';
import BottomNav from '../components/BottomNav.vue'
import { Journal } from '../interfaces';
import { getAllJournals, formatDate } from '../utils'

const journals: Ref<Journal[]> = ref([])

onMounted(async () => {
    journals.value = await getAllJournals()
})
</script>
<template>
    <div class="mb-16 flex flex-col gap-3 p-2">
        <div v-for="journal in journals" class="border rounded-lg px-2 py-1 mx-3">
            <h2>{{ journal.title }}</h2>
            <h3 class="text-red-500">{{ formatDate(journal.dateTime) }}</h3>
            <p class="line-clamp-3">{{ journal.body }}</p>
        </div>
    </div>
    <BottomNav />
</template>