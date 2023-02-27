<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <main class="grid h-screen place-items-center">
        <div>
            <h1 class="font-bold text-3xl">Sorry, Nothing lives here</h1>
            <p>The page you are looking for could not be found</p>
            <div class="mt-5">
                <RouterLink class="bg-primary text-white py-2 px-3 rounded-xl" to="/">Go back</RouterLink>
            </div>
        </div>
    </main>
</template>