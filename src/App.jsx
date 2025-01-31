import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
    <CustomButton count={count} setCount={setCount}></CustomButton>
      
    </>
  )

  function CustomButton(props){
    function UpdateCount(){
     props.setCount(count+1);
    }

    return <button onClick={UpdateCount}>count is {count}</button>
  }
}

export default App