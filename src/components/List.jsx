import { Task } from "./Task";
import { AddTask } from "./AddTask";
import "../style/List.css";
import { useList } from "../hook/useList";
import "../style/Task.css";

export function List() {
  const { task, handleAdd, handleState, handleDelete, handleEdit } = useList();


  return (
      <>
        <h1>Lista de Tareas</h1>
        <AddTask handleAdd={handleAdd} />
        <div className="lists-container">

        <div className="one-list">
          <h2>Tareas Pendientes</h2>
          <div className="list">
          {task
            .filter((taskPar) => !taskPar.done) // Filtramos tareas no completadas
            .map(({ id, title, done }) => (
              <Task
                key={id}
                title={title}
                done={done}
                handleState={handleState}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                inputValue={title}
                id={id}
              />
            ))}
          </div>
        </div>
    
        <div className="one-list">
          <h2>Tareas Completadas</h2>
          <div className="list">
          {task
            .filter((taskPar) => taskPar.done) // Filtramos tareas completadas
            .map(({ id, title, done }) => (
              <Task
                key={id}
                title={title}
                done={done}
                handleState={handleState}
                handleDelete={handleDelete}
                id={id}
              />
            ))}
          </div>
        </div>
        </div>
      </>
    );
}
