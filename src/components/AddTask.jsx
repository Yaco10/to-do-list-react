import React from 'react'
import { useState } from 'react'
import '../style/Form.css'

export const AddTask = ({ handleAdd }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        handleAdd(inputValue)
    }

  return (
    <form onSubmit={onSubmit}>
        <input
         type="text" 
         placeholder='Agregar Tarea'
         input={inputValue}
         onChange={onInputChange}
        />
    </form>
  )
}

