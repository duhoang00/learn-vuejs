<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
</script>

<template>
  <div class="space">
    <h2><slot name="name"></slot></h2>

    <TodoItem>
      <template #name> test </template>
    </TodoItem>
  </div>
</template>

<style scoped>
.space {
  text-align: center;
}

.space h2 {
  background-color: whitesmoke;
  color: black;
}
</style>
