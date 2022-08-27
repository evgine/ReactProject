import React, { useState } from 'react';
import TodoHeader from './TodoHeader';

function TodoItem({ todo, onChange, onDelete, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    if (edit.id) {
        return <TodoHeader edit={edit} onSubmit={(value) => {
            updateTodo(edit.id, value);
            setEdit({
                id: null,
                value: ""
            })
        }} />;
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }} />
                {todo.text}
                <button onClick={() => 
                setEdit({ id: todo.id, value: todo.text })}
                >
                    Edit
                </button>
                <button onClick={() => {
                    onDelete(todo);
                }}>
                    x
                </button>
            </label>
        </div>
    )
}

export default TodoItem;
