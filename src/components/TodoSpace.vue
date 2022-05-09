<script setup lang="ts">
import { ref, watch } from "vue";
import uniqueId from "lodash/uniqueId";

import type { ListType } from "@/types";
import { useListsStore } from "@/stores/lists";
import TodoItem from "./TodoItem.vue";
import DeleteItem from "./DeleteItem.vue";

const props = defineProps<{
  listType: ListType;
}>();

const listsStore = useListsStore();

const list = ref(listsStore.getTodos);

watch(
  listsStore.$state,
  (state) => {
    // is there a better way to re-render
    list.value = listsStore.getTodos;
    // update later
    // localStorage.setItem("piniaState", JSON.stringify(state));
  },
  { deep: true }
);

const newItem = ref("");

const addNewItem = () => {
  listsStore.addNewItem({
    item: {
      id: uniqueId("todo-"),
      name: newItem.value,
      listType: props.listType,
    },
  });
  newItem.value = "";
};
</script>

<template>
  <div class="space">
    <h2><slot name="name"></slot></h2>

    <div v-for="item in list" :key="item.id" class="wrapper-item">
      <TodoItem v-if="item.listType === props.listType" :item="item"></TodoItem>
      <DeleteItem v-if="item.listType === props.listType" :item="item">
      </DeleteItem>
    </div>

    <input
      class="input-new-item"
      type="text"
      v-model="newItem"
      @change="addNewItem"
      placeholder="+New"
    />
  </div>
</template>

<style scoped>
.space {
  text-align: left;
}

.space h2 {
  margin: 1rem;
}

.input-new-item {
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  padding: 0.5rem;
  box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 2px 4px;
  border-radius: 3px;
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
