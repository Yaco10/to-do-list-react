import { IconeDone } from "../Icons/IconDone";
import { Circle } from "../Icons/Circle";
import { IconEdit } from "../Icons/IconEdit";
import { IconDelete } from "../Icons/IconDelete";
import { EditTask } from "./EditTask";
import { useState } from "react";
import "../style/Buttons.css";
export function Task({
  title,
  done,
  handleState,
  handleDelete,
  handleEdit,
  inputValue,
  id,
}) {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="task-container">
      <div className="task">
        <button id="check-button" onClick={() => handleState(id)}>
          {done ? <IconeDone /> : <Circle />}
        </button>
        <p>Tarea: {title}</p>
        <div className="button-container" tabIndex={0}>
          <button onClick={() => toggleEditMode()}>
            <IconEdit />
          </button>
          <button onClick={() => handleDelete(id)}>
            <IconDelete />
          </button>
        </div>
      </div>
      {editMode && <EditTask handleEdit={handleEdit} id={id} />}
    </div>
  );
}
