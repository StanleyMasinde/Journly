<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <slot name="topBar"></slot>
  <Suspense>
  <RouterView />
  </Suspense>
  <slot name="bottomNav"></slot>
</template>