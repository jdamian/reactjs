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
      <h1>Counter App</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-</button>
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