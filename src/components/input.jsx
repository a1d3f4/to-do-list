// export default function Input({label,textarea,...props}){
//     return(
//         <p className=" flex flex-col gap-1 my-4   ">

//         <label className=" text-sm font-bold uppercase text-stone-500 ">{label}</label>
//         {textarea ? <textarea {...props} className=" w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 " />:<input {...props} className=" w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 " />}
//         </p>
//     )
// }
import { forwardRef } from "react";
const Input= forwardRef( function Input({ label, textarea, ...props },ref ) {
    return (
      <div className="mb-4 w-full ">
        <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
        {textarea ? (
          <textarea ref={ref}
            {...props}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
          />
        ) : (
          <input ref={ref}
            {...props}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        )}
      </div>
    );
  }
)
export default Input
  