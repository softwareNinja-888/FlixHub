import arrow from '/arrow.webp'
import { MovieCard } from './MovieCard'
import {util} from '../util/util'

// This will be replaced with actual data from API call
export function Section({name,data}){

    const topFive = data.slice(0, 2)

    return (
        <>
            <div className="mt-14">
                <div className="flex items-center gap-2 px-3">
                    <h1 className="text-xl text-white font-poppins">{util.capitilalize(name)}</h1>
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                </div>
            </div>
            <div className="">
                <div className="flex px-3 py-10 gap-6">
                    {topFive.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}
                </div>
            </div>
            
        </>
    )
}