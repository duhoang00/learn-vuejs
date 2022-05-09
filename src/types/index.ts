export type ListType = "todo" | "doing" | "done";

export type TodoType = {
  id: string;
  name: string;
  listType: ListType;
};

export type AddNewItemType = {
  item: TodoType;
};
export type DeleteItemType = {
  id: string;
};
