<script setup lang="ts">
import { state } from '../gameState';
import { random } from '../utils/random';
import Bubble from './Bubble.vue';
</script>

<template>
  <Bubble
    v-for="(_, i) in new Array(state.totalBubbles)"
    :scale="random(2, 3.5) / 10"
    :offset="i * random(8, 10)"
    :delay="random(1000, 5000)"
    :speed="random(10, 20)"
  />
</template>
