import { defineStore } from "pinia";
import isEmpty from "lodash/isEmpty";

import type { TodoType } from "@/types";

type addNewItemType = {
  item: TodoType;
  listType: "todo" | "doing" | "done";
};

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
    addNewItem({ item, listType }: addNewItemType) {
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
