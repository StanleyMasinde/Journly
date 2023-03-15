
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import BottomNav from '../components/BottomNav.vue';
import { Journal } from '../interfaces';
import { getJournalById } from '../utils';
const route = useRoute()
const journal: Journal = await getJournalById(+route.params.id)
</script>
<template>
    <div class="paper px-1 py-3 mb-16">
        <div class="sticky top-0 bg-inherit py-3">
            <h1 class="text-2xl font-semibold">{{ journal.title || 'No title provided' }}</h1>
        </div>
        <div class="m-3 text-justify text-base">
            <p>{{ journal.body }}</p>
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