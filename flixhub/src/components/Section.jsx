import arrow from '/arrow.webp'
import { MovieCard } from './MovieCard'
import {util} from '../util/util'

// This will be replaced with actual data from API call
export function Section({name,data,loading}){

    const topFive = data.slice(0, 2)

    return (
        <>
            <div className="mt-6">
                <div className="flex items-center gap-2 px-3">
                    <h1 className="text-xl text-white font-poppins">{util.capitilalize(name)}</h1>
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                </div>
            </div>
            <div className="">
                {loading  ? (
                    <div className="flex justify-center items-center">
                      <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                ) : <div className="flex px-3 py-10 gap-6">
                    {topFive.map((movie) => (
                        <MovieCard key={movie.id} data={movie} />
                    ))}               
                </div>
                }
            </div>
            
        </>
    )
}