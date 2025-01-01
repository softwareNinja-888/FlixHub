import { util } from "../util/util"

export function MovieCard({data}){
    console.log(data)
    return (
        <>
            <div className="relative border border-white w-44 h-28">
                <img src={util.BackDrop(data.backdrop_path)} alt='' className="w-full h-full" />
                <div className="absolute bottom-0 left-1 p-2 rounded">
                    <div className="text-white text-xs font-poppins">{data.original_title || data.name}</div>
                </div>
            </div>

        </>
    )
}