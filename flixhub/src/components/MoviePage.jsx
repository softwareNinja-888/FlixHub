import { useParams } from "react-router"
import { useAuth } from "./AuthContext"
import { util } from "../util/util"
import { useState } from "react"

import { Header } from "./Header"

export function MoviePage(){

    let params = useParams()
    const {combinedData,genres} = useAuth()
    const [moreInfo, setMoreInfo] = useState(false)

    function toggleInfo(){
        setMoreInfo(!moreInfo)
    }

    // FIND MOVIE OR SERIES BY ID
   
    const media = combinedData.find(item => item.id === parseInt(params.id))

    const arr = genres.filter(genre => media.genre_ids.includes(genre.id))
    console.log(media)
    

    return (

        <>
            <div className="bg-background h-screen">
                <Header mainMenu={false}/>
                
                <div className="-mt-20 flex w-12/12 justify-center items-center text-white ">
                    <div className="w-10/12 gap-5 flex flex-col">
                        <img src={util.BackDrop(media.backdrop_path)} alt={`${media.original_title || media.name} poster`} className="w-full h-44" />

                        <div className="font-poppins">{media.title || media.name}</div>

                        <div className="text-black font-geist flex justify-center items-center border boder-white bg-gray-300 py-1 px-2">
                            <img src="" alt="" />
                            <div className="">Play</div>
                        </div>
                        <div className=""></div>
                        <div className="flex flex-col text-sm font-nunito" onClick={toggleInfo}>
                            {moreInfo ? media.overview : util.summary(media.overview)}
                        </div>
                        
                        {/* GENRE */}
                        <div className="text-xs font-bold">
                            {arr.map(genre => genre.name).join(' ● ')}
                        </div>

                        {/* RATING */}
                        <div className="text-xs font-roboto text-gray-400">
                            IMDB : {media.vote_average}
                        </div>

                        {/* RELEASE DATE OR FIRST AIR DATE */}
                        <div className="">
                            {media.release_date? media.release_date.split('-')[0] : media.first_air_date.split('-')[0]}
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}