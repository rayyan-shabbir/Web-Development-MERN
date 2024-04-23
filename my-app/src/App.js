import Header from './components/Header'
import Tasksall from './components/Tasksall'
// import MyWay from './components/Header';
// import './App.css';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
// import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  // const x = "Rayan";
  // const val = true;

  // Creating Global level State
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")

    const data = await res.json();

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);

    const data = await res.json();

    return data;
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, reminder: data.reminder } : task
    )))
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000 + 1)

    // const newTask = { id, ...task };

    // setTasks([...tasks, newTask]);
  }

  return (
    <Router>
      <div className="container">
        {/* <h1>Hello World</h1> */}
        {/* <h2>Hello, I am {x}</h2> */}
        {/* <h2>Hello, {x ? "Yes" : "No"}</h2> */}

        <Header
          showAddTask={showAddTask}
          onShow={() => setShowAddTask(!showAddTask)}
          title="Task Tracker"
        />

        {showAddTask && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? <Tasksall
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        /> : 'No task to show'}

        
        {/* <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? <Tasksall
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            /> : 'No task to show'}
          </>
        )} /> */}

        {/* <Route path='/about' component={About} /> */}

        <Footer />
      </div>
    </Router>
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
