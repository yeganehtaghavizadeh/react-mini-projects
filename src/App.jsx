import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter/counter'
import TodoList from './todo-list/TodoList'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

    return (
    <Router>
      <nav>
        <Link to="/counter">Counter</Link> | 
        <Link to="/todo">Todo List</Link>
      </nav>
      <Routes>
          {/* <Route path="/" element={<Counter />} /> */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}


export default App
