import { use, useState } from 'react'

import './App.css'

function App() {
  let ince = () =>{
    setCount(count+1)
  }
  let decr = () =>{
    setCount(count-1)
  }
  let reset = () =>{
    setCount(0)
  }
  const [count,setCount] = useState(0)
  return (
    <>
      <div>
        <h2>counter app</h2>
        <p>{count}</p>
        <button onClick={ince}>Increment</button>
        <button onClick={decr}>Decrement</button>
        <button onClick={reset}>reset</button>
        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      </div>
    </>
  )
}

export default App
