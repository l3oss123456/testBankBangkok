import React, { useState } from "react";
import { ITodo, ITodoListPageProps } from "../types/todo.types";

export function withTodoListLogic<T>(WrappedComponent: React.ComponentType<T>) {
  return function WithTodoListLogic(props: Omit<T, keyof ITodoListPageProps>) {
    const [todos, setTodos] = useState<ITodo[]>([
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build Todo App", completed: false },
      { id: 3, text: "Profit 🚀", completed: false },
    ]);

    const addTodo = (text: string) => {
      if (!text.trim()) return;
      setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id: number) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const deleteTodo = (id: number) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
      <WrappedComponent
        {...(props as T)}
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    );
  };
}
