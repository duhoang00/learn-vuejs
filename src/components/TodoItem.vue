<script setup lang="ts">
import type { TodoType } from "@/types";

const props = defineProps<{
  item: TodoType;
}>();

console.log(props);
</script>

<template>
  <div class="item">
    <div :id="item.id">{{ item.name }}</div>
  </div>
</template>

<style scoped>
.item {
  margin-bottom: 1rem;
  padding: 0.5rem;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  border-radius: 3px;
  cursor: grab;
}
</style>
