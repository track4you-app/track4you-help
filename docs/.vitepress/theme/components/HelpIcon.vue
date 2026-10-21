<script setup lang="ts">
import { icons } from '../icons'

defineProps<{ name: string; size?: number }>()
</script>

<template>
  <svg
    aria-hidden="true"
    :width="size ?? 22"
    :height="size ?? 22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path :d="icons[name]" />
  </svg>
</template>
