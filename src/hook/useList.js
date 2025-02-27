import { useState } from "react";

export function useList() {
  const [task, setTask] = useState([
    { id: "1", title: "Comprar Pan", done: true },
    { id: "2", title: "Salir a correr", done: false },
    { id: "3", title: "respirar", done: false },
  ]);
  const [nextId, setNextId] = useState(task.length + 1);

  const handleState = (id) => {
    const newTask = task.map((taskPar) => {
      if (taskPar.id === id) {
        if (taskPar.done === true) {
          taskPar.done = false;
        } else {
          taskPar.done = true;
        }
      }
      return taskPar;
    });
    setTask(newTask);
    console.log(newTask);
  };

  const handleDelete = (id) => {
    const newTask = task.filter((element) => element.id != id);
    setTask(newTask);
  };

  const handleAdd = (input) => {
    const data = {
      id: nextId,
      title: input,
      done: false,
    };
    const newTask = [...task, data];
    setTask(newTask);
    setNextId(nextId + 1);
  };

  const handleEdit = (id, input) => {
    const newTask = task.map((element) => {
      if (element.id === id) {
        element.title = input;
      }
      return element;
    });

    setTask(newTask);
  };

  return { task, handleState, handleDelete, handleAdd, handleEdit };
}
