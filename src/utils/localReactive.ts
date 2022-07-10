import { reactive, UnwrapNestedRefs, watchEffect } from 'vue';

export default function useLocalReactive<T extends object>(
  name: string,
  init: T
): UnwrapNestedRefs<T> {
  const localState = localStorage.getItem(name);
  const state = reactive<T>(localState ? JSON.parse(localState) : init);
  watchEffect(() => localStorage.setItem(name, JSON.stringify(state)));
  return state;
}
