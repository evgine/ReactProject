function TodoFooter({todos}){

    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div>
            <span>{completedSize}Completed</span>                   
        </div>
    )
}
export default TodoFooter;
