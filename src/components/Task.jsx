import { IconeDone } from "../Icons/IconDone";
import { Circle } from "../Icons/Circle";
import { IconEdit } from "../Icons/IconEdit";
import { IconDelete } from "../Icons/IconDelete";
import "../style/Buttons.css"
export function Task({ title, done, handleState, handleDelete, id, inputValue }) {
  return (
    <div className="task">
      <button id="check-button" onClick={() => handleState(id)}>
          {done ? <IconeDone /> : <Circle />}
        </button>
      <p>Tarea: {title}</p>
      <div className="button-container" tabIndex={0}>
        <button onClick={() => handleEdit(id,inputValue)}>
            <IconEdit/>
        </button>
        <button onClick={() => handleDelete(id)}>
            <IconDelete/>
        </button>
      </div>
    </div>
  );
}
