

interface TaskProps{
    id:number,
    description:string,
    removeTask:(id:number)=>void;
}

export function Task({id,description,removeTask}:TaskProps){
    return(
        <div className="flex items-center border-4 border-blue-800 bg-blue-400 p-2 my-2">
            <p className="flex-grow">{description}</p>
            <button className="p-2" onClick={() => removeTask(id)}>
              <img src={"./src/img/delete.svg"} alt="Eliminar tarea" />
            </button>
          </div>
    );
}