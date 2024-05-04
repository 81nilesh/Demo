import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
    setCount(preCount => preCount + 1);
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1 className=''>Counter Application</h1>
      <h2>Counter {count}</h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
