import { DropResult } from "@hello-pangea/dnd";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface ITodoListPageProps {
  todos: ITodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  // reorderTodos: (todos: ITodo[]) => void;
  handleDragEnd: (result: DropResult) => void;
}
