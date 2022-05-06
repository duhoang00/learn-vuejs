<script setup lang="ts">
import TodoSpace from "@/components/TodoSpace.vue";

import { useListsStore } from "@/stores/lists";

const lists = useListsStore();
lists.addTodo({
  id: "todo-1",
  name: "he",
});
console.log(lists.$state.todo[0].name);
</script>

<template>
  <div class="todo">
    <h1 class="title">To-do list</h1>
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
  .title {
    text-align: center;
  }
  .spaces {
    display: flex;
    flex-wrap: wrap;
  }
  .space {
    margin: 1rem;
    flex: 1 0 8rem;
  }
}
</style>
