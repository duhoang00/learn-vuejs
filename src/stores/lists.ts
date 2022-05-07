import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType } from "@/types";

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({
    todo: [] as TodoType[],
    doing: [] as TodoType[],
    done: [] as TodoType[],
  }),
  getters: {
    getTodoList: (state) => state.todo,
  },
  actions: {
    addNewItem({ item, listType }: AddNewItemType) {
      if (isEmpty(item)) {
        return;
      }
      if (listType === "todo") {
        this.todo.push(item);
      }
      if (listType === "doing") {
        this.doing.push(item);
      }
      if (listType === "done") {
        this.done.push(item);
      }
    },
  },
});
