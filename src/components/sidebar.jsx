// import Button from "./button"
// export default function Sidebar({onstartaddproject,projects}){
//     return(
//         <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
//         <h2 className=" mb-8 text-xl font-bold text-stone-200 my-4">Your tasks</h2>
//         <Button onClick={onstartaddproject} >+Add project</Button>
//         <ul >
//            {projects.map((project)=>(
//             <li key={project.id}><button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-200 hover:text-stone-800">{project.title}</button></li>
//            ))}
//         </ul>
//         </aside>
//     )
// }
// import Button from "./button";

// export default function Sidebar({ onstartaddproject, projects ,onselectproject,selectedprojectid}) {
//   return (
//     <aside className="w-1/3 py-8 px-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
//       <h2 className="mb-6 text-xl font-bold text-stone-200">Your Tasks</h2>
//       <Button onClick={onstartaddproject} className="mb-6">
//         + Add Project
//       </Button>
//       <ul>
//         {projects.map((project) => {
//             let cssclasses="w-full text-left px-3 py-2 rounded-md text-stone-300 hover:bg-stone-800 hover:text-white focus:outline-none"
//             if (project.id==selectedprojectid){
//                 cssclasses+=' bg-stone-800 text-stone-200'
//             }
//             else{
//                 cssclasses+=' text-stone-400'
//             }
//           return (
//             <li key={project.id}>
//             <button onClick={()=>onselectproject(project.id)}  className={cssclasses}>
//               {project.title}
//             </button >
//           </li>
//           )
// })}
//       </ul>
//     </aside>
//   );
// }
import Button from "./button";

export default function Sidebar({ onstartaddproject, projects, onselectproject, selectedprojectid }) {
  return (
    <aside className="w-1/3 py-8 px-6 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-6 text-xl font-bold text-stone-200">Your Projects</h2>
      <Button onClick={onstartaddproject} className="mb-6">
        + Add Project
      </Button>
      <ul>
        {projects.map((project) => {
          const cssclasses = `w-full text-left px-3 py-2 rounded-md hover:bg-stone-800 hover:text-white focus:outline-none ${project.id === selectedprojectid ? 'bg-stone-800 text-stone-200' : 'text-stone-400'}`;

          return (
            <li key={project.id}>
              <button onClick={() => onselectproject({ id: project.id })} className={cssclasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
