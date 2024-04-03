<!-- src/components/HelloWorld.vue -->
<script setup lang="ts">
import variables from "@/styles/variables.module.scss";
console.log(variables.bgColor);
</script>

<template>
  <div
    style="width: 100px; height: 100px"
    :style="{ 'background-color': variables.bgColor }"
  ></div>
</template>
