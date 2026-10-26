
import { use, useState } from "react"


type Todo = {
        id : string;
        title : string;
        isCompleted : boolean;
        created_At : string;
        updated_At : string;
}

export const Home = () =>{
const [todo,setTodo] = useState<string>("");
const [todoList,setTodoList] = useState<Todo[]>([]);
const [errorMessage, setErrorMessage] = useState<string>("")


const HandleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setTodo(event.target.value.replaceAll("","_"));
    setTodo(event.target.value);
}

const HandleBtn = () =>{
    if(todo == "") return setErrorMessage("Please enter a task");
    if(todo.length<5) return setErrorMessage("Min 5 Characters are required!");
    // setTodoList([todo,...todoList]);
    // setTodo("");
    // setErrorMessage("");
    const currentTime = new Date().toLocaleString("en-IN");
    const taskObj = {
        id : crypto.randomUUID(),
        title : todo,
        isCompleted : false,
        created_At : currentTime,
        updated_At : currentTime
    }
    setTodoList([taskObj,...todoList]);
    setTodo("");
    setErrorMessage("");
    }


const HandleDel = (index:number) =>{
    const item = todoList.filter((_,idx)=>{
        return index != idx
    })
    setTodoList(item)
}

const HandleCompleted = (id:string) =>{
    const updatedList = todoList.map(item=>{
        if(item.id == id){
            const currentTime = new Date().toLocaleString("en-IN");
            return{...item,isCompleted:true,updated_At:currentTime}
        }
        return item;
    })
    setTodoList(updatedList)
}



return <div className="flex flex-col items-center gap-2 bg-amber-50 px-4 py-10 min-h-screen">
            <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">
                <h1 className="text-amber-700 text-4xl p-5 font-bold text-center">TODO App</h1>
                <div className="flex flex-col gap-3 mt-4 ">
                <label htmlFor="task" className="text-gray-700 font-semibold">Add a new task:</label>
                <input type="text" name="" id="task" placeholder="Eg: Read Newspaper." onChange={HandleChange} value={todo} className="p-2 border border-gray-200 rounded-lg"/>
                 {errorMessage && <span>{errorMessage}</span>}
                </div>
                <button onClick={HandleBtn} className="text-white bg-amber-400 p-2 w-45 mt-5 rounded-lg cursor-pointer mx-30">Add Task</button>
                <p className="mt-5 text-gray-700 font-semibold">Total tasks: ({todoList.length})</p>
                <h3 className="mt-5 text-gray-700 font-semibold">Pending Tasks : ({todoList.filter(item => !item.isCompleted).length}) </h3>
                {(todoList.filter(item => !item.isCompleted)).length == 0 && <span className="italic text-gray-500">There is no pending tasks.</span>}

                <h3 className="mt-5 text-gray-700 font-semibold">Completed Tasks : ({todoList.filter(item => item.isCompleted).length})</h3>
                {(todoList.filter(item => item.isCompleted)).length == 0 &&  <span className="italic text-gray-500">There is no completed tasks.</span>}
            </div>

            <div className="flex flex-col gap-5 mt-10 w-full max-w-xl">
                {
                    todoList.map((task,index)=>{
                        return <div key={index} className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-amber-100">{index + 1}. {task.title}
                        <button onClick={()=>HandleCompleted(task.id)} className=" bg-green-500 text-white p-2 rounded-lg w-50 cursor-pointer">Mark as Completed</button>
                        <button onClick={()=>HandleDel(index)} className="bg-red-300 text-red-600 p-2 rounded-lg w-50 cursor-pointer">Delete Task</button></div>
                    })
                }
            </div>

    </div>


 }