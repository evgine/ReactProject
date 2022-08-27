import { useState } from 'react';
import './App.css';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn1",
      isCompleted: false,
      isEdited: false
    },
    {
      id: Math.random(),
      text: "Learn2",
      isCompleted: false,
      isEdeted: false
    },
    {
      id: Math.random(),
      text: "Learn3",
      isCompleted: false,
      isEdeted: false
    }
  ])
  // function handleEdit(id) {
  //   const filteredTodos = todos.filter(todo => todo.id !== id);
  //   const selectedTodo = todos.find(todo => todo.id === id);
  //   setTodos({
  //     todos:filteredTodos,
  //     text:selectedTodo.value,
  //     id:id,
  //     editItem:true
  //   })
  // }
  return (
    <div className="App">
      <TodoHeader onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false,
            isEdited: false
          }
        ])
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange1={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
        }}
        updateTodo={(todoId, newValue) => {
            if (!newValue.text || /^\s*$/.test(newValue.text)) {
              return;
            }
            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }} />
    </div>
  );
}

export default App;