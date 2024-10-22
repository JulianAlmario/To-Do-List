import { useState } from "react";

interface addTaskProps {
    addTask: (description: string) => void;
  }

export function Header({addTask}:addTaskProps){
    const [taskDescription, setTaskDescription] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskDescription.trim()) {
          addTask(taskDescription);
          setTaskDescription(''); 
        }
      };

    return(
       <>
       <h1 className="text-4xl text-blue-700 text-center"> To Do List</h1>
        <form className="flex flex-col p-5" onSubmit={handleSubmit}>
        <label className="text-blue-700">Task</label>
        <div className="flex items-center">
          <input
            type="text"
            className="border-2 border-blue-700 p-2 flex-grow focus:border-blue-700 rounded-sm"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Descripción de la tarea"
          />
          <button type="submit" className="ml-5 bg-blue-700 border-2 border-blue-700 text-white p-2 rounded-lg hover:bg-white hover:text-blue-700">
            Add
          </button>
        </div>
      </form>
       </>
    );
    
}