import { useState } from "react"

export default function Newtask({onAdd}){
    const[enteredtask,setenteredtask] = useState('')
    function handlechange(event){
        setenteredtask(event.target.value)
    }
    function handleclick(){
        onAdd(enteredtask)
        console.log(enteredtask)
        setenteredtask('')
    }
return(
    <div className="flex item-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handlechange} value={enteredtask}/>
        
        <button  className="text-stone-700 hover:text-stone-950" onClick={handleclick}>Add Task</button>
    </div>
)
}