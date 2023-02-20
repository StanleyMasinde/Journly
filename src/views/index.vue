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
    <div v-for="journal in journals" class="border rounded-lg px-2 py-1 m-3">
        <h1>{{ formatDate(journal.dateTime) }}</h1>
        <p>{{ journal.body }}</p>
    </div>
    <BottomNav />
</template>