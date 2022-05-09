import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType, AddNewItemType, DeleteItemType } from "@/types";

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({
    todo: [] as TodoType[],
    doing: [] as TodoType[],
    done: [] as TodoType[],
  }),
  getters: {
    getTodoList: (state) => state.todo,
    getDoingList: (state) => state.doing,
    getDoneList: (state) => state.done,
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
    deleteItem({ id, listType }: DeleteItemType) {
      if (isEmpty(id)) {
        return;
      }
      if (listType === "todo") {
        this.todo = this.todo.filter((item) => item.id !== id);
      }
      if (listType === "doing") {
        this.doing = this.doing.filter((item) => item.id !== id);
      }
      if (listType === "done") {
        this.done = this.done.filter((item) => item.id !== id);
      }
    },
  },
});
