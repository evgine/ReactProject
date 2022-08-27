function TodoFooter({todos}){

    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    const activesSize = todos.filter((todo) => !todo.isCompleted).length
    return (
        <div>
            <span>{completedSize}Completed Todos</span>  
            <br/> 
            <span>{activesSize}Active Todos</span>                
        </div>
    )
}
export default TodoFooter;
