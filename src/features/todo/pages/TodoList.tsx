import React, { useState } from "react";
import { ITodoListPageProps } from "../types/todo.types";
import { withTodoListLogic } from "../logic/TodoListPageLogic";
import TodoItem from "../components/TodoItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./TodoListPage.css";

const TodoListPage: React.FC<ITodoListPageProps> = ({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  handleDragEnd,
}) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="container">
      <h1 className="header">To-Do List</h1>

      <div className="input-row">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <div
              className="todo-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id.toString()}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default withTodoListLogic(TodoListPage);
