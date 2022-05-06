<script setup lang="ts">
import { ref, defineProps } from "vue";
import uniqueId from "lodash/uniqueId";

import { useListsStore } from "@/stores/lists";
import TodoItem from "./TodoItem.vue";

const props = defineProps<{
  listType: "todo" | "doing" | "done";
}>();

const lists = useListsStore();

const list = lists.$state[props.listType];

const newItem = ref("");

const addNewItem = () => {
  lists.addNewItem({
    item: {
      id: uniqueId("todo-"),
      name: newItem.value,
    },
    listType: props.listType,
  });
  newItem.value = "";
};
</script>

<template>
  <div class="space">
    <h2><slot name="name"></slot></h2>

    <div v-for="item in list" :key="item.id">
      <TodoItem>
        <template #name> {{ item.name }} </template>
      </TodoItem>
    </div>

    <TodoItem>
      <template #name>
        <div>
          <input
            type="text"
            v-model="newItem"
            @change="addNewItem"
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
