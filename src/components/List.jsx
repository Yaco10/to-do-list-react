import { useState } from 'react'
import { Task } from './Task'
import { AddTask } from './AddTask'

export function List() {
    const [task,setTask] = useState([
        {id:'1',title: 'Comprar Pan', done: false},
        {id:'2',title: 'Salir a correr', done: false},
        {id:'3',title: 'respirar', done: false},
    ])

    const handleState = (id) => {
        const newTask = task.map((taskPar) => {
            if (taskPar.id === id) {
                taskPar.done = true;
            }
            return taskPar;
        })
        setTask(newTask)
        console.log(newTask)
    }

    const handleDelete = (id) =>{
        const newTask = task.filter(element => element.id != id)
        setTask(newTask)
    }

    const handleAdd = (input) =>{
        const data = {
            id: task.length + 1,
            title: input,
            done: false,
        }
        const newTask = [...task,data]
        setTask(newTask)
    }

    
  return (
    <>
     <div>
        <h1>Tareas</h1>
        <AddTask handleAdd={handleAdd}/>
        {
           task.map( (taskPar,index) => {
            const {id,title,done} = taskPar
            return <Task key={id} title={title} done={done} handleState={handleState} handleDelete={handleDelete} id={id} />
           })
        }
     </div>
    </>
  )
}