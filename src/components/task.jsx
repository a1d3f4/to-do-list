// import Newtask from "./newtask"
// export default function Task({tasks,onadd,ondelete}){
//     console.log(tasks)
//     return(
//         <section>
//             <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
//             <Newtask onAdd={onadd}/>
//             {tasks.length ===0 && <p className="text-stone-800 my-4">This project has no tasks</p>}
//             {tasks.length >0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
//                 {
//                     tasks.map((task)=>(
//                         <li key={task.id} className="flex justify-between my-4"><span>
                            
//                             {task.text}
//                             <button className="text-stone-700 hover:text-red-500 ml-20 " onClick={()=>ondelete(task.id)}>Clear</button>
//                             </span></li>
//                     ))
//                 }
//                 </ul>}
//         </section>
//     )
// }
import Newtask from "./newtask";

export default function Task({ tasks, onadd, ondelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <Newtask onAdd={onadd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">This project has no tasks</p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center my-4"
            >
              <span className="flex-grow">{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500 ml-auto"
                onClick={() => ondelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
