<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <slot name="topBar"></slot>
  <RouterView />
  <slot name="bottomNav"></slot>
</template>