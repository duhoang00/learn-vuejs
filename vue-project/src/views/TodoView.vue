<script setup lang="ts">
import TodoSpace from "@/components/TodoSpace.vue";
</script>

<template>
  <div class="todo">
    <div class="spaces">
      <TodoSpace class="space">
        <template #name>Todo</template>
      </TodoSpace>
      <TodoSpace class="space">
        <template #name>Doing</template>
      </TodoSpace>
      <TodoSpace class="space">
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
  .spaces {
    display: flex;
    flex-wrap: wrap;
  }
  .space {
    margin: 1rem;
    flex: 0 0 10rem;
  }
}
</style>
