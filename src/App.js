import { useState } from "react"
import "./index.css"

function Counterapp() {

  const [val, setval] = useState("0")

  const increment = () => {

    let newval = parseInt(val)+1
    setval(newval)
  }

  const decrement = () => {

    let newval = parseInt(val)-1
    setval(newval)
  }

  const reset = () => {

    setval(0)
  }
  

  return (
    <div className="body">
    <div className="container">
      <h1>Count</h1>
      <h1>{val}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  </div>

  )
}


export default Counterapp