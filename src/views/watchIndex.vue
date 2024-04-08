<script setup lang="ts">
const list = [1, 2, 3];
</script>
<template>
  <div v-for="(item, index) of list" :key="index">{{ item }}</div>
</template>

<style lang="scss" scoped></style>
