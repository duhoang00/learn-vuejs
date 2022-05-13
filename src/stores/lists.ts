import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType, DeleteItemType } from "@/types";

const localStorageTodos = JSON.parse(localStorage.getItem("todos") || "[]");

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({
    todos: localStorageTodos
      ? (localStorageTodos as TodoType[])
      : ([] as TodoType[]),
  }),
  getters: {
    getTodos: (state) => state.todos,
  },
  actions: {
    addNewItem({ item }: AddNewItemType) {
      console.log(this.todos);
      if (!isEmpty(item)) {
        this.todos.push(item);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
    deleteItem({ id }: DeleteItemType) {
      if (!isEmpty(id)) {
        this.todos = this.todos.filter((item) => item.id !== id);
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    },
  },
});
