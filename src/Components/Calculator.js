import React, { useState } from "react"


const Calculator =  () =>{

    const [count, setCount] = useState(0);
    return (<>
    <button onClick={() =>{
        setCount((prevCount) => prevCount + 1)
    }}>+</button>
    <h1>Count : {count}</h1>
    <button onClick={() =>{
        setCount((prevCount) =>prevCount - 1)
    }}>-</button>
      </>
      )
}

export default Calculator