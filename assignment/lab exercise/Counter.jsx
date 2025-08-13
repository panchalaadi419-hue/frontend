import React, { useState } from 'react'

function Counter() {
    var [count,setcount]=useState(0);

    var increment = ()=>{
        setcount(count+1);
    }
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter
