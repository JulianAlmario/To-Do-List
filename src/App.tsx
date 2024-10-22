import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Task } from './components/Task';



interface Task {
  id: number;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {

    const storedItems = localStorage.getItem('myItems');
    return storedItems ? JSON.parse(storedItems) : []; 
  });;
  
  useEffect(() => {
    localStorage.setItem('myItems', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedItems = localStorage.getItem('myArray');
    if (storedItems) {
      setTasks(JSON.parse(storedItems)); 
    }
  }, [tasks]);
  
  const addTask = (description: string) => {
    const newTask: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      description,
    };
    setTasks([...tasks, newTask]);
  };


  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

 

  return (
    <div className='p-10 font-serif'>
      <Header addTask={addTask}/>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} id={task.id} description={task.description} removeTask={removeTask}/>
        ))
      ) : (
        <p className='text-lg text-center mt-5 text-blue-700'>No hay tareas pendientes</p>
      )}
    </div>
  );
}

export default App;
