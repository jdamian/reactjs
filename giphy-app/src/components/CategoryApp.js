import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const CategoryApp = ({setCategories}) => {

  const [inputValue, setinputValue] = useState('');

  const handleChange = (event) => {
    setinputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories=> [inputValue, ...categories]);
      setinputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="border border-gray-400 rounded-lg p-2"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}

CategoryApp.propTypes = {
  setCategories: PropTypes.func.isRequired
}