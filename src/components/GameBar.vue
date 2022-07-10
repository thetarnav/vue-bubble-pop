<script setup lang="ts">
import { state, resetGame } from '../gameState';
import { fade } from '../utils/transitions';
</script>

<template>
  <Transition appear @enter="fade('in', 1500)" @leave="fade('out', 400)">
    <section v-if="state.score === state.finalScore && state.session">
      <h1>You Win 🥳</h1>
      <button @click="resetGame">Play Again</button>
      <!-- <ConfettiExplosion /> -->
    </section>
    <aside v-else-if="state.session" class="glass">
      <h1>Bubble Pop</h1>
      <h2>{{ state.score }}</h2>
      <button @click="resetGame">Stop Game</button>
    </aside>
  </Transition>
</template>

<style scoped>
section {
  opacity: 1;
  position: absolute;
  div {
    display: flex;
    justify-content: center;
  }
}

aside {
  opacity: 1;
  border-radius: var(--radius-blob-2);
  padding: var(--size-10);
  position: absolute;
  bottom: 0;
  margin-inline: auto;
}
</style>
