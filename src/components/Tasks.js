import Task from "./Task";

export const Tasks = ({ tasksArray, onDelete, onToggle }) => {
  return (
    <>
      {tasksArray.map((task) => (
        <Task
          key={task.id}
          singleTask={task}
          onDeleteSingleTask={onDelete}
          onToggleTask={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
