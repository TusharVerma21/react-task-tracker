import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Please add a task!");
    } else {
      onAdd({ text, day, reminder });

      setText("");
      setDay("");
      setReminder(false);
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label for="taskName">Task</label>
        <input
          id="taskName"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className="form-control">
        <label for="taskTime">Day & Time</label>
        <input
          id="taskTime"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label for="taskRemider">Set Reminder</label>
        <input
          id="taskName"
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
