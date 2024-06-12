
import { useState } from "react"
import "./Counter.css"
const Counter = () => {
    // let x = 0;

    const [count, setCount]= useState(0)

    const handleIncrement = () => {
        // x = x + 1
        setCount(count + 1)
        return x;
    }
    const handleDecrement = () => {
        if(count > 0)
        setCount(count - 1)
        return x;
    }
    return (
        <div>
            <h1 className="heading">Counter App</h1>
            <p>{ count}</p>
            <button onClick={handleIncrement} >Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;