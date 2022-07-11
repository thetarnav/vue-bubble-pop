<script setup lang="ts">
import { ref } from 'vue';
import { state } from '../gameState';
import { popTransition } from '../utils/transitions';

const props = defineProps<{
  scale: number;
  offset: number;
  delay: number;
  speed: number;
}>();

const popped = ref(false);

const pop = () => {
  state.score += 1;
  popped.value = true;
};

const onLeave = popTransition(200);
</script>

<template>
  <div
    class="positioner"
    :style="{
      '--scale': scale,
      '--offset': `${offset}%`,
      '--delay': `${delay}ms`,
      '--speed': `${speed}s`,
    }"
  >
    <div class="positioner-inner">
      <Transition @leave="onLeave">
        <div v-if="!popped" class="bubble" @click="pop" />
      </Transition>
      <!-- use:popSound -->
    </div>
  </div>
</template>

<style scoped>
.positioner {
  --bubble-size: calc(200px * var(--scale));

  animation: position var(--speed) var(--delay) linear infinite forwards;

  position: fixed;
  z-index: var(--zindex, 99);

  bottom: calc(var(--bubble-size) * -2);
  left: var(--offset);
}

.positioner-inner {
  animation: wobble 2s ease-in-out alternate infinite;
  animation-delay: inherit;
}

.bubble {
  width: var(--bubble-size);
  height: var(--bubble-size);

  border-radius: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2),
    inset 0px 5px 15px 2px rgba(255, 255, 255, 1);

  backdrop-filter: blur(1px);
  filter: blur(2px);
}

@media (prefers-reduced-motion: reduce) {
  .positioner {
    animation: none;
  }
}

@keyframes position {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, calc((-2.5 * var(--bubble-size)) - 100vh), 0);
  }
}

@keyframes wobble {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(42px, 0, 0);
  }
}
</style>
