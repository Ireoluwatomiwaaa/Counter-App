import { useState, useEffect } from 'react'
import React from 'react'
import { ChevronDown, ChevronsDown, Hash, ChevronUp, ChevronsUp, RotateCcw } from 'react-feather'

const app = () => {

  const [count, setCount] = useState(0)

  const addOne = () => {
    setCount (count + 1)
  }

  const addTen = () => {
    setCount (count + 10)
  }

  const reset = () => {
    setCount (0)
  }

  const random = () => {
    setCount (Math.floor(Math.random() * 100) + 1)
  }

  const subtractTen = () => {
    setCount (count - 10)
  }

  const subtractOne = () => {
    setCount (count - 1)
  };

  useEffect (
    function () {
      document.title = `Count : ${count}`;
 
      return () => (document.title = `Count`);
    },
    [count]
  );

  return (
    <div>

      <div className='counterCard'>
        <p>Current Value</p>
        <h1>{count}</h1>
        <button onClick={addOne}><ChevronUp /></button>
        <button onClick={addTen}><ChevronsUp/></button>
        <button onClick={reset}><RotateCcw/></button>
        <button onClick={random}><Hash/></button>
        <button onClick={subtractTen}><ChevronsDown/></button>
        <button onClick={subtractOne}><ChevronDown/></button>
      </div>

    </div>
  )
}

export default app