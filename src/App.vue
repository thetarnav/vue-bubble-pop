<script setup lang="ts">
import { computed } from 'vue';
import Layout from './components/Layout.vue';
import Inputs from './components/Inputs.vue';
import GameBar from './components/GameBar.vue';
import Bubbles from './components/Bubbles.vue';
import { state, startGame } from './gameState';

const showBubbles = computed(() => state.finalScore !== state.score);
</script>

<template>
  <Layout>
    <template v-if="!state.session">
      <Inputs />
      <h1>Bubble Pop</h1>
      <button @click="startGame">Start Popping</button>
      <h2 v-if="state.lastScore !== null">
        Previous High Score: {{ state.lastScore }}
      </h2>
    </template>
    <template v-else>
      <Bubbles v-if="showBubbles" />
      <GameBar />
    </template>
  </Layout>
</template>
