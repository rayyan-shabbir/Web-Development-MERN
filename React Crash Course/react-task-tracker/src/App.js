import Header from './components/Header'
import Tasksall from './components/Tasksall'
// import MyWay from './components/Header';
// import './App.css';
import { useState } from 'react'
import AddTask from './components/AddTask'


const App = () => {
  // const x = "Rayan";
  // const val = true;

  // Creating Global level State
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Play Cricket",
      day: "Daily 5 o' Clock",
      reminder: true,
    },
    {
      id: 2,
      title: "Go to Gym",
      day: "Daily at 8 o' Clock",
      reminder: true,
    },
    {
      id: 3,
      title: "Pray Namaz",
      day: "Daily 5 Times",
      reminder: true,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = {id, ...task};

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      {/* <h1>Hello World</h1> */}
      {/* <h2>Hello, I am {x}</h2> */}
      {/* <h2>Hello, {x ? "Yes" : "No"}</h2> */}

      <Header 
      showAddTask={showAddTask} 
      onShow={()=> setShowAddTask(!showAddTask)} 
      title="Task Tracker" 
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasksall
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> : 'No task to show'}
    </div>
  );
}

// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

export default App;
