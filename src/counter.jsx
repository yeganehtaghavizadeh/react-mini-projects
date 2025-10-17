import { useState } from "react";
import "./counter.css";



function Counter(){
    const [count,setCount] = useState(0);




    return(
        <div className="counter-container">
            <h1>COUNTER : </h1>
            <p className="counter-value">{count}</p>
            <div className="counter-buttons">
                <button onClick={() => setCount(count - 1)}>decrease - </button>
                <button onClick={() => setCount(0)}>reset </button>
                <button onClick={() => setCount(count + 1)}>increase </button>
            </div>
        </div>
    )

}

export default Counter;