import { IconeDone } from "../Icons/IconDone";
import { Circle } from "../Icons/Circle";
import { IconEdit } from "../Icons/IconEdit";
import { IconDelete } from "../Icons/IconDelete";
export function Task({ title, done, handleState, handleDelete, id }) {
  return (
    <div className="task">
      <p>Tarea: {title}</p>
      <div className="button-container" tabIndex={0}>
        <button onClick={() => handleState(id)}>
          {done ? <IconeDone /> : <Circle />}
        </button>
        <button>
            <IconEdit/>
        </button>
        <button onClick={() => handleDelete(id)}>
            <IconDelete/>
        </button>
      </div>
    </div>
  );
}
