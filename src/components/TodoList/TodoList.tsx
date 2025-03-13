// src/components/TodoList.tsx
import React, { useState } from 'react';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };
  const handleDeleteTodo = (indexToDelete: number) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}> Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;