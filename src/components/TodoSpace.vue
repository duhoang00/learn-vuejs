<script setup lang="ts">
import { ref } from "vue";
import uniqueId from "lodash/uniqueId";

import type { ListType } from "@/types";
import { useListsStore } from "@/stores/lists";
import TodoItem from "./TodoItem.vue";
import DeleteItem from "./DeleteItem.vue";

const props = defineProps<{
  listType: ListType;
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

    <div v-for="item in list" :key="item.id" class="wrapper-item">
      <TodoItem>
        <template #name> {{ item.name }} </template>
      </TodoItem>
      <DeleteItem>
        <template #id></template>
      </DeleteItem>
    </div>

    <TodoItem>
      <template #name>
        <input
          class="input-new-item"
          type="text"
          v-model="newItem"
          @change="addNewItem"
          placeholder="+New"
        />
      </template>
    </TodoItem>
  </div>
</template>

<style scoped>
.space {
  text-align: left;
}

.space h2 {
  margin: 1rem;
}

.wrapper-item {
  display: flex;
}

.wrapper-item:deep() .item {
  flex: 1;
  margin-right: 0;
}
.wrapper-item:deep() .delete-item {
  flex: 0;
  margin-left: 0;
}
</style>
