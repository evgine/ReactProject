import { useState, useCallback, useEffect } from 'react';
import './App.css';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Task1",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Task2",
      isCompleted: false,
    }
  ])

  const handleKeyPress = useCallback((event) => {
    if (event.shiftKey === true) {
      /*TO DO*/ 
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">

      <TodoHeader onSubmit={(todo) => {
        setTodos([todo, ...todos]);
      }} />
      
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
        }}
        updateTodo={(todoId, newValue) => {
            setTodos(prev => prev.map(todo => (todo.id === todoId ? newValue : todo)));
        }}
      />
      <TodoFooter todos={todos} />
    </div>
  );
}

export default App;
