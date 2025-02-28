import React, { useState } from 'react'
import '../style/FormEdit.css'

export function EditTask({ handleEdit,id }) {
       const [inputValue, setInputValue] = useState('');
       const onInputChange = (event) => {
           setInputValue(event.target.value)
       }
   
       const onSubmit = (event) => {
           event.preventDefault()
           handleEdit(id, inputValue)
       }
   
     return (
       <form onSubmit={onSubmit} className='form-edit'>
           <input
            type="text" 
            placeholder='Editar Tarea'
            input={inputValue}
            onChange={onInputChange}
           />
       </form>
     )
}