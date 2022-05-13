import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType, DeleteItemType } from "@/types";

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({
    todos: [] as TodoType[],
  }),
  getters: {
    getTodos: (state) => state.todos,
  },
  actions: {
    addNewItem({ item }: AddNewItemType) {
      if (!isEmpty(item)) {
        this.todos.push(item);
      }
    },
    deleteItem({ id }: DeleteItemType) {
      if (!isEmpty(id)) {
        this.todos = this.todos.filter((item) => item.id !== id);
      }
    },
  },
});
