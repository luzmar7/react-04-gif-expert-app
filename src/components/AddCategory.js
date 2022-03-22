import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit hecho');
    if (inputValue.trim().length > 2) {
      setCategories( cats => [inputValue, ...cats])
      setInputValue('')
    } else {
      

    }
  

  }

  return (
    <>
      <form onSubmit={ handleSubmit} >
        <input
          type="text"
          value={ inputValue }
          onChange={handleInputChange}
        />
      </form>  
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired

}

AddCategory.defaultProps = {

}


export default AddCategory