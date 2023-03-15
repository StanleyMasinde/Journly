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
        <div v-for="journal in journals" class="paper p-3 drop-shadow-md">
            <h2 class="font-bold text-lg">{{ journal.title }}</h2>
            <h3 class="text-red-400 font-semibold">{{ formatDate(journal.dateTime) }}</h3>
            <p class="line-clamp-3">{{ journal.body }}</p>
        </div>
    </div>
    <BottomNav />
</template>

<style scoped>
/**Credits this codepen https://codepen.io/SamanRohani/pen/opgdKZ */
/**More can be found here https://freefrontend.com/css-paper-effects/ */
.paper {
  background: #f8ea69;
  border-top-left-radius: 250px 15px;
  border-bottom-left-radius: 20px 115px;
  border-bottom-right-radius: 105px 15px;
}
</style>