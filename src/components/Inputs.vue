<script setup lang="ts">
import { state } from '../gameState';
</script>

<template>
  <aside>
    <h2>Game Settings</h2>
    <label>
      Winning Score:
      <input
        @input="(e) => (state.finalScore = +e.target.value)"
        class="glass"
        min="1"
        max="100"
        type="number"
        name="score"
        :value="state.finalScore"
      />
    </label>
    <label>
      Total Bubbles:
      <input
        @input="(e) => (state.totalBubbles = +e.target.value)"
        class="glass"
        min="1"
        max="100"
        type="number"
        name="bubbles"
        :value="state.totalBubbles"
      />
    </label>
  </aside>
</template>

<style scoped>
aside {
  margin: var(--size-4);
  position: absolute;
  top: 0;
  left: 0;
  justify-items: flex-start;
  h2 {
    border-bottom: 1px solid var(--white);
  }
  label {
    display: flex;
    gap: var(--size-1);
  }
  input {
    margin: 0;
    padding: var(--size-1) var(--size-2);
  }
}
</style>
