import React from 'react';
import logo from './logo.svg';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';

function App() {
const todos = [
  new Todo("Learn React"),
  new Todo("Learn TypeScript")
];

  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
