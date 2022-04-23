import React, { useState }  from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubtract = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(0);
  }

  return (
    <>
      <h1 className="text-3xl text-blue-500">Counter App</h1>
      <h2 className="text-3xl"> {counter} </h2>
      <button className="border rounded p-3 mt-5 mx-1 bg-blue-400" onClick={handleAdd}>+</button>
      <button className="border rounded p-3 mt-5 mx-2 bg-red-400" onClick={handleReset}>Reset</button>
      <button className="border rounded p-3 mt-5 mx-1 bg-blue-400" onClick={handleSubtract}>-</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}

export default CounterApp