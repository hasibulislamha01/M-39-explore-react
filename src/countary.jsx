import { useState } from "react"



export default function Counter(){

    const [count, setCount] = useState(10)
    console.log(count, setCount)

    function handleAdd(){
        const newCount = count + 1;
        setCount(newCount)
    }

    function handleReduce(){
        const newCount = count -1;
        setCount(newCount)
    }

    return (
        <div style={{border: '1px solid seaGreen'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}