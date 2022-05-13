<script setup lang="ts">
import type { TodoType } from "@/types";
import { useListsStore } from "@/stores/lists";

const props = defineProps<{
  item: TodoType;
}>();

const onDeleteItem = () => {
  useListsStore.commit("deleteItem", {
    id: props.item.id,
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
