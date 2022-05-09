<script setup lang="ts">
import type { ListType } from "@/types";
import { useListsStore } from "@/stores/lists";

const props = defineProps<{
  id: string;
  listType: ListType;
}>();

const lists = useListsStore();

const { deleteItem } = lists;

const onDeleteItem = () => {
  deleteItem({
    id: props.id,
    listType: props.listType,
  });
};
</script>

<template>
  <div class="delete-item">
    <button @click="onDeleteItem">
      <font-awesome-icon :icon="['fas', 'trash-can']" />
    </button>
  </div>
</template>

<style scoped>
.delete-item {
  padding: 0.5rem;
}

.delete-item button {
  color: red;
  border: none;
  background-color: transparent;
}
</style>
