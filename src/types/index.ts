export type TodoType = {
  id: string;
  name: string;
};

export type ListType = "todo" | "doing" | "done";

export type AddNewItemType = {
  item: TodoType;
  listType: ListType;
};
export type DeleteItemType = {
  id: string;
  listType: ListType;
};
