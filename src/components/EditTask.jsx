import useState from 'react'

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
       <form onSubmit={onSubmit}>
           <input
            type="text" 
            placeholder='Editar Tarea'
            input={inputValue}
            onChange={onInputChange}
           />
       </form>
     )
}