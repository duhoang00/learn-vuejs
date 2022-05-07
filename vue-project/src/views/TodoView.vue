<script setup lang="ts">
import TodoSpace from "@/components/TodoSpace.vue";
</script>

<template>
  <div class="todo">
    <h1 class="title">To-do list</h1>
    <div class="spaces">
      <TodoSpace class="space" listType="todo">
        <template #name>Todo</template>
      </TodoSpace>
      <TodoSpace class="space" listType="doing">
        <template #name>Doing</template>
      </TodoSpace>
      <TodoSpace class="space" listType="done">
        <template #name>Done</template>
      </TodoSpace>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .todo {
    min-height: 100vh;
    align-items: center;
    margin-top: 5rem;
  }
  .title {
    text-align: center;
  }
  .spaces {
    display: flex;
    flex-wrap: wrap;
  }
  .space {
    margin: 1rem;
    flex: 0 1 8rem;
  }
}
</style>
