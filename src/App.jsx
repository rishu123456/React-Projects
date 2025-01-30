import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function updateCount(){
    setCount(count+1);
  }

  return (
    <>
      <button onClick={updateCount}>count is {count}</button>
    </>
  )
}

export default App
