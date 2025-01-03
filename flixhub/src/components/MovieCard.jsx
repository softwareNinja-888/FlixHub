import { useNavigate } from "react-router"
import { util } from "../util/util"

export function MovieCard({data}){

    const navigate = useNavigate()

    // NAVIGATE TO PAGE WITH MOVIE ID
    function handleClick(id){
        navigate(`/media/${id}`)
    }

    return (
        <>
            <div className="relative border border-white w-44 h-48" onClick={()=>{
                handleClick(data.id)
            }}>
                <img src={util.BackDrop(data.poster_path)} alt='poster' className="w-full h-full" />
                <div className="absolute bottom-0 left-1 p-2 rounded">
                    <div className="text-white text-xs font-poppins">{data.title || data.name}</div>
                </div>
            </div>
        </>
    )
}