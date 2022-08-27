import React, { useState } from 'react';
import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onChange, updateTodo }) {
   
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                            updateTodo={updateTodo}
                            />
                    )
                })
            }
        </div>
    )
}

export default TodoList;
