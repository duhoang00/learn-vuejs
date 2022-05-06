import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType } from "@/types";

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({
    todo: [] as TodoType[],
    doing: [],
    done: [],
  }),
  getters: {
    getTodoList: (state) => state.todo,
  },
  actions: {
    addTodo(item: TodoType) {
      if (!isEmpty(item)) {
        this.todo.push(item);
      }
    },
  },
});
