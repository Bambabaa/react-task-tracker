import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState ([
    {
       id: 1,
       text: 'Doctors Appointment',
       day: 'Feb 5th at 2:30pm',
       reminder: true,
    },
    {
       id: 2,
       text: 'School meeting',
       day: 'Feb 6th at 3:45pm',
       reminder: true,
    },
    {
       id: 3,
       text: 'Shooping',
       day: 'Feb 6th at 1:30pm',
       reminder: false,
    },
 ])

 // Delete Task
 const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
 }

 // Toggle Reminder 
const toggleRiminder = (id) => {
   setTasks(tasks.map((task) => task.id === id ? {...task, reminder: 
   task.reminder } : task))
}


  return (
    <div className="container">
     <Header />
     <AddTask />
     { tasks.length > 0 ? ( <Tasks tasks={tasks} 
     onDelete={deleteTask}
     onToggle={toggleRiminder}
     /> 
     ) : (
         'No Task To Show' )}
    </div>
  );
}


export default App;
