import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType, DeleteItemType } from "@/types";

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({
    // todo: [] as TodoType[],
    // doing: [] as TodoType[],
    // done: [] as TodoType[],
    todos: [] as TodoType[],
  }),
  getters: {
    // getTodoList: (state) => state.todo,
    // getDoingList: (state) => state.doing,
    // getDoneList: (state) => state.done,
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
