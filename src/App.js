//import './App.css';

import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";


//let name = "Tushar"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete the Assignments",
      day: "Jun 12 at 6:00PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Go for grocery shopping",
      day: "Jun 13 at 9:00AM",
      reminder: true,
    },
    {
      id: 3,
      text: "Watch the Family Man Season 2",
      day: "Jun 13 at 10:00PM",
      reminder: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  /*useEffect(() => {

  })*/

  // Add Task
  const addTask = (task) => {
    //console.log(task);
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  //Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    //console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        {/*<h1>Hello from React</h1>
      <h2>Welcome {name}</h2> */}

        {/* <Header title='Task Tracker'/> */}

        <Header onToggleAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        <Route path='/' exact render={
          (props) => (
            <>

              {showAddTask && <AddTask onAdd={addTask} />}

              {tasks.length > 0 ? (
                <Tasks
                  tasksArray={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks to show"
              )}

            </>
          )
        } />

        <Route path="/about" component={About} />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
