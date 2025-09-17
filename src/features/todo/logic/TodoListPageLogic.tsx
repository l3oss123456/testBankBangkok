import React, { useState } from "react";
import { ITodo, ITodoListPageProps } from "../types/todo.types";
import { defaultTodos } from "../mocks/todo.mocks";
import { DropResult } from "@hello-pangea/dnd";

export function withTodoListLogic<T>(WrappedComponent: React.ComponentType<T>) {
  return function WithTodoListLogic(props: Omit<T, keyof ITodoListPageProps>) {
    const [todos, setTodos] = useState<ITodo[]>(defaultTodos);
    const [input, setInput] = useState("");

    const addTodo = (text: string) => {
      if (!text.trim()) return;
      setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
      setInput("");
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

    // const handleAddClick = () => {
    //   addTodo(input);
    // };

    const handleDragEnd = (result: DropResult) => {
      if (!result.destination) return;

      const newTodos = Array.from(todos);
      const [moved] = newTodos.splice(result.source.index, 1);
      newTodos.splice(result.destination.index, 0, moved);

      setTodos(newTodos);
    };

    return (
      <WrappedComponent
        {...(props as T)}
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        handleDragEnd={handleDragEnd}
      />
    );
  };
}
