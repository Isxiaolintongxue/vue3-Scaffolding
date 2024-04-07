<script setup lang="ts">
import { useUserStoreHook } from "@/store/modules/user";
const userStore = useUserStoreHook();
console.log(userStore.token);
</script>

<template></template>
