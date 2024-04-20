// import Sidebar from "./components/sidebar.jsx";
// import Newproject from "./components/newproject.jsx";
// import No_project from "./components/noproject.jsx";
// import Selectedproject from "./components/selectedproject.jsx";
// import { useState } from "react";
// function App() {
//    const [projectstate,setprojectstate] =useState(
//     {
//       selectedprojectid:undefined,
//       projects : []
//     }
//    )
//    function handleselectproject({id}){
//     setprojectstate(
//       prevstate=>{
//         return{
//           ...prevstate,
//           selectedprojectid:id
//         }
//       }
//     )
//    }
//    function handleaddproject(){
//     setprojectstate(
//       prevstate=>{
//         return{
//           ...prevstate,
//           selectedprojectid:null
//         }
//       }
//     )
//    }
//    function handlecancel(){
//     setprojectstate(prevstate=>{
//       return{
//         ...prevstate,
//         selectedprojectid:undefined,
//       }
//     })
//    }
//    function handlesaveproject(projectdata){
//     const projectid=Math.random()
//     const newproject={
//       ...projectdata,
//       id:projectid
//     }
//     setprojectstate(prevstate=>{
//       return{
//         ...prevstate,
//         selectedprojectid:undefined,
//         projects:[...prevstate.projects,newproject]
//       }
//     })
//    }
//    const selectedproject=projectstate.projects.find(project => project.id ===projectstate.selectedprojectid)
//    let content =<Selectedproject project={selectedproject}/>
//    if (projectstate.selectedprojectid===null){
//     content=<Newproject onadd={handlesaveproject} oncancel={handlecancel}/>
//     console.log(projectstate)
//    }
//    else{
//     content=<No_project onstartaddproject={handleaddproject}/>
//    }
//   return (
//     <main className="h-screen my-8 flex gap-8">
//       <Sidebar onstartaddproject={handleaddproject} projects={projectstate.projects} onselectproject={handleselectproject}/>
//       {content}
      
//     </main>
//   );
// }

// export default App;
import Sidebar from "./components/sidebar.jsx";
import Newproject from "./components/newproject.jsx";
import No_project from "./components/noproject.jsx";
import Selectedproject from "./components/selectedproject.jsx";
import { useState } from "react";

function App() {
  const [projectstate, setprojectstate] = useState({
    selectedprojectid: undefined,
    projects: [],
    tasks:[]
  });
 function handleaddtask(text){
  
  setprojectstate((prevstate) => {
  const taskid = Math.random();
  const newtask = {
    text:text,
    projectid:prevstate.selectedprojectid,
    id: taskid
  };
    return {
    ...prevstate,
    tasks: [...prevstate.tasks, newtask]
  }
  });
 }
 function handledeletetask(id){
  setprojectstate((prevstate) => {
    return{
    ...prevstate,
    
    tasks:prevstate.tasks.filter((task)=> task.id !==id)}
  });
 }
  function handleselectproject({ id }) {
    setprojectstate((prevstate) => ({
      ...prevstate,
      selectedprojectid: id
    }));
  }

  function handleaddproject() {
    setprojectstate((prevstate) => ({
      ...prevstate,
      selectedprojectid: null
    }));
  }

  function handlecancel() {
    setprojectstate((prevstate) => ({
      ...prevstate,
      selectedprojectid: undefined,
    }));
  }
function handledeleteproject(){
  setprojectstate((prevstate) => ({
    ...prevstate,
    selectedprojectid: undefined,
    projects:prevstate.projects.filter((project)=> project.id !==prevstate.selectedprojectid)
  }));
}
  function handlesaveproject(projectdata) {
    const projectid = Math.random();
    const newproject = {
      ...projectdata,
      id: projectid
    };
    setprojectstate((prevstate) => ({
      ...prevstate,
      selectedprojectid: undefined,
      projects: [...prevstate.projects, newproject]
    }));
  }

  const selectedproject = projectstate.projects.find(
    (project) => project.id === projectstate.selectedprojectid
  );

  let content;
  if (projectstate.selectedprojectid === null) {
    content = <Newproject onadd={handlesaveproject} oncancel={handlecancel} />;
  } else if (selectedproject) {
    content = <Selectedproject project={selectedproject} ondelete={handledeleteproject} onaddtask={handleaddtask} ondeletetask={handledeletetask} tasks={projectstate.tasks}/>;
  } else {
    content = <No_project onstartaddproject={handleaddproject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onstartaddproject={handleaddproject}
        projects={projectstate.projects}
        onselectproject={handleselectproject}
      />
      {content}
    </main>
  );
}

export default App;
