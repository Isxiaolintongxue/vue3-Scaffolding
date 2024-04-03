import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const double = computed(() => {
    return count.value * 2;
  });
  function increment() {
    count.value++;
  }
  return {
    count,
    double,
    increment,
  };
});
