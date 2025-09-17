import React from "react";
import { ITodoItemProps } from "../types/todo.types";
import "./Todo.css";

const TodoItem: React.FC<ITodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <span
        className={`todo-text ${todo.completed ? "completed" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
