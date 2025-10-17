import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter/counter'
import TodoList from './todo-list/TodoList'
import WeatherApp from './weather-app/WeatherApp'
import ContactForm from './forms/ContactForm'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

    return (
    <Router>
      <nav>
        <Link to="/counter">Counter⏱️</Link> | 
        <Link to="/todo">Todo List 🗓</Link> |
        <Link to="/weather" >Weather app⛅️</Link> |
        <Link to="/forms">Forms 📇</Link> |


      </nav>
      <Routes>
          {/* <Route path="/" element={<Counter />} /> */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path='/weather' element={<WeatherApp/>} />
        <Route path='/forms' element={<ContactForm/>} />
      </Routes>
    </Router>
  );
}


export default App
