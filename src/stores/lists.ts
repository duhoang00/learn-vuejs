// import { defineStore } from "pinia";
import { createStore } from "vuex";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType, DeleteItemType } from "@/types";

export const useListsStore = createStore({
  // id: "lists",
  state: () => ({
    // todo: [] as TodoType[],
    // doing: [] as TodoType[],
    // done: [] as TodoType[],
    todos: [] as TodoType[],
  }),
  // getters: {
  //   getTodoList: (state) => state.todo,
  //   getDoingList: (state) => state.doing,
  //   getDoneList: (state) => state.done,
  //   getTodos: (state) => state.todos,
  // },
  mutations: {
    addNewItem(state, { item }: AddNewItemType) {
      if (!isEmpty(item)) {
        state.todos.push(item);
      }
    },
    deleteItem(state, { id }: DeleteItemType) {
      if (!isEmpty(id)) {
        state.todos = state.todos.filter((item) => item.id !== id);
      }
    },
  },
});
