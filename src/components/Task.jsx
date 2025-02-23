import { IconeDone } from "../Icons/IconDone"
import { Circle } from "../Icons/Circle"
export function Task({title,done,handleState,handleDelete, id}){
    return(
        <li>
            <p>Tarea: {title}</p> 
            <button onClick={() => handleState(id)}>
             {
                    done ? <IconeDone/> : <Circle/>
                }
            </button>
        <button>Editar</button>
        <button onClick={() => handleDelete(id)}>Eliminar</button>
        </li>
    )
}