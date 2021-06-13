import { FaTimes } from "react-icons/fa";

const Task = ({ singleTask, onDeleteSingleTask, onToggleTask }) => {
  return (
    <div
      //   className={singleTask.reminder ? "task reminder" : "task"}
      className={`task ${singleTask.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggleTask(singleTask.id)}
    >
      <h3>
        {singleTask.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDeleteSingleTask(singleTask.id)}
        />
      </h3>
      <p>{singleTask.day}</p>
    </div>
  );
};

export default Task;
