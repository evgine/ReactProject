function TodoFooter({todos, onClearCompleted}){

    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div>
            <span>{completedSize}/{todos.length}Completed</span>                   
            <button onClick={onClearCompleted}>Clear completeed todos</button>
        </div>
    )
}
export default TodoFooter;