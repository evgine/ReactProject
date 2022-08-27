import TodoItem from "./TodoItem";

function TodoList({todos, onDelete, onChange1}){
    
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            onChange={onChange1}
                            onDelete={onDelete}
                            // handleEdit={() => handleEdit(todo.id)}
                        />
                    )
                 })
            }
        </div>
    )
}

export default TodoList;