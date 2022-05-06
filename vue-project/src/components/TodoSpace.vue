<script setup lang="ts">
import { ref } from "vue";

import TodoItem from "./TodoItem.vue";

const newTodo = ref("");
const todoList = ref<string[]>([]);

const addNewTodo = () => {
  todoList.value.push(newTodo.value);
  console.log(todoList);
};
</script>

<template>
  <div class="space">
    <h2><slot name="name"></slot></h2>

    <div v-for="item in todoList" :key="item">
      <TodoItem>
        <template #name> {{ item }} </template>
      </TodoItem>
    </div>

    <TodoItem>
      <template #name>
        <div>
          <input
            type="text"
            v-model="newTodo"
            @change="addNewTodo"
            placeholder="Add a new todo"
          />
        </div>
      </template>
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
