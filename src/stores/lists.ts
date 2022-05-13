import { createStore } from "vuex";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType, DeleteItemType } from "@/types";

export const useListsStore = createStore({
  state: () => ({
    todos: [] as TodoType[],
  }),

  mutations: {
    addNewItem(state, { item }: AddNewItemType) {
      if (!isEmpty(item)) {
        state.todos.push(item);
      }
    },
    deleteItem(state, { id }: DeleteItemType) {
      if (!isEmpty(id)) {
        state.todos = state.todos.filter((item: any) => item.id !== id);
      }
    },
  },
});
