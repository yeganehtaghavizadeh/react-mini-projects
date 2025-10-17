import { useState } from "react";
import "./TodoList.css"

function TodoList(){
    const [todos,setTodos] =  useState([]);
    const [input,setInput] = useState("");

    const handleAdd = () =>{
        if (input.trim() === "")
            return;
        setTodos([...todos,{text : input,done : false}]);
        setInput("");
    }

    const handleDelet = (indexToDelete) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    }
    const toggleDone = (indexToToggle) => {
    setTodos(todos.map((todo, i) => 
    i === indexToToggle ? { ...todo, done: !todo.done } : todo
        ));
    };

    return(
        <div>
            <h2>Todo List : </h2>
            <input
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)} 
              placeholder="new work ..."/>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.text}
            <button onClick={() => toggleDone(index)}>✔️</button>
            <button onClick={() => handleDelet(index)}>Delete 🗑</button>
        </li>
         ))}
            </ul>
                
        </div>
    )

}

export default TodoList;