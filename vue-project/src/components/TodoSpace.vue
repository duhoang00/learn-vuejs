<script setup lang="ts">
import { ref } from "vue";
import uniqueId from "lodash/uniqueId";

import TodoItem from "./TodoItem.vue";

type todoType = {
  id: string;
  name: string;
};

const newTodo = ref("");
// const todoList = ref<string[]>([]);
const todoList = ref<todoType[]>([]);

const addNewTodo = () => {
  todoList.value.push({
    id: uniqueId("todo-"),
    name: newTodo.value,
  });
  newTodo.value = "";
};
</script>

<template>
  <div class="space">
    <h2><slot name="name"></slot></h2>

    <div v-for="item in todoList" :key="item.id">
      <TodoItem>
        <template #name> {{ item.name }} </template>
      </TodoItem>
    </div>

    <TodoItem>
      <template #name>
        <div>
          <input
            type="text"
            v-model="newTodo"
            @change="addNewTodo"
            placeholder="+New"
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
