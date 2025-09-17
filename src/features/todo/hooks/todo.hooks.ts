import { useState } from "react";
import { defaultTodos } from "../mocks/todo.mocks";
import { ITodo } from "../types/todo.types";

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>(defaultTodos);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};
