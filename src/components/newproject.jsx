// import { useRef } from "react"
// import Input from "./input"
// import Modal from "./Modal"
// export default function Newproject({onadd}){
//  const title=useRef()
//  const description=useRef()
//  const duedate=useRef()
//  const modal=useRef()
//  function handlesave(){
//     const enteredtitle=title.current.value
//     const entereddescription=description.current.value
//     const enteredduedate=duedate.current.value 
//     if (entereddescription.trim()==='' || enteredduedate.trim=='' || enteredtitle.trim()===''){
//         //show modal
//         modal.current.open()
//     }
//     onadd({
//         title:enteredtitle,
//         description:entereddescription,
//         duedate:enteredduedate
//     })
// }
//  return(
//     <>
//     <Modal ref={modal}>
//     <h2>Invalid input</h2>
//     <p>Oooopss... looks like you forgot to enter a value</p>
//     <p>Please fill all the input fields correctly</p>
//     </Modal>
//     <div className="w-1/2">
//         <menu className="flex justify-end gap-4 item-center my-4">
//             <li>

//             <button className=" px-6 py-2 text-stone-800 hover:text-stone-950 ">Cancel</button>
//                 </li>
//             <li>

//             <button className= " px-6 py-2  text-white  bg-stone-800 rounded-md hover:text-white " onClick={handlesave}>
//                 Save
//                 </button>
//             </li>
//         </menu>
//         <div>
//         <Input type='text' label='Title' ref={title}/>
//         <Input label='Description' textarea ref={description}/>
//         <Input type='date'  label='Due Date' ref={duedate}/>

//         </div>
//     </div>
//     </>
//  )
// }
import { useRef } from "react";
import Input from "./input";
import Modal from "./Modal";
import Button from "./button";

export default function Newproject({ onadd ,oncancel}) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();

  function handlesave() {
    const enteredtitle = title.current.value;
    const entereddescription = description.current.value;
    const enteredduedate = duedate.current.value;
    if (entereddescription.trim() === '' || enteredduedate.trim() === '' || enteredtitle.trim() === '') {
      modal.current.open();
    } else {
      onadd({
        title: enteredtitle,
        description: entereddescription,
        duedate: enteredduedate
      });
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid input</h2>
        <p className="text-stone-700 mb-4">Oooopss... looks like you forgot to enter a value</p>
        <p className="text-stone-700 mb-4">Please fill all the input fields correctly</p>
      </Modal>
      <div className="w-1/2">
        <menu className="flex justify-end gap-4 item-center my-4">
          <li>
            <button className="px-6 py-2 text-stone-800 hover:text-stone-950" onClick={oncancel}>
                Cancel
                </button>
          </li>
          <li>
            <button className="px-6 py-2 text-white bg-stone-800 rounded-md hover:text-white" onClick={handlesave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' label='Title' ref={title} />
          <Input label='Description' textarea ref={description} />
          <Input type='date' label='Due Date' ref={duedate} />
        </div>
      </div>
    </>
  );
}
