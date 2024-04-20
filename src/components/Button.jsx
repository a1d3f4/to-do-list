export default function Button({children,...props}){
    return (
        <button className=" px-4 py-2 rounded-md bg-stone-800 text-stone-200  hover:text-white "  {...props}>{children}</button>
    )
}