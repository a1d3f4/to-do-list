import noprojectimage from '../assets/no-projects.png'
import Button from './button'
export default function No_project({onstartaddproject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noprojectimage} alt="empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No project selected
            </h2>
            <p className="text-stone-400 mb-4">
                Select or create a project
            </p>
            <p className="mt-8">
            <Button children='Create new Project' onClick={onstartaddproject} />
            </p>
        </div>
    )
}