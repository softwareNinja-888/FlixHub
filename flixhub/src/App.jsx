import { useEffect, useState } from 'react';

import { Header } from './components/Header'
import { Section } from './components/Section'


export function App(){

      // Use state to store movies
    const [movies, setMovies] = useState([]);

    // Fetch movies and update state
    useEffect(() => {
        async function fetchData() {

          const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => setMovies(data.results)) // List of popular movies
            .catch((error) => console.error('Error:', error));
            
          return data
        }
        fetchData()

      }, []); 

  return(
    <>
      <div className="h-full w-screen bg-background">
        <Header/>
        <Section name={'movies'} data={movies}/>
        <Section name={'series'} data={movies}/>
        <Section name={'popular'} data={movies}/>

      </div>
    </>
  )


}


// export function Section({ data = [] }) {

// const [movies, setMovies] = useState([]);

    // Fetch movies and update state
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch(
    //                 'https://api.themoviedb.org/3/movie/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1'
    //             );
    //             const result = await response.json();
    //             console.log(result)
    //             setMovies(result.results); 
    //         } catch (error) {
    //             console.error('Error:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);

//     return (
//         <>
//             <div className="mt-14">
//                 <div className="flex items-center gap-2 px-3">
//                     <h1 className="text-xl text-white font-poppins">Movies</h1>
//                     <img src={arrow} alt="arrow" className="w-3 h-3" />
//                 </div>
//             </div>
//             <div>
//                 <div className="flex px-3 py-10 gap-6">
//                     {/* Render movies fetched from API */}
//                     {movies.map((movie, index) => (
//                         <MovieCard key={movie.id || index} data={movie} />
//                     ))}

//                     {/* If you still want to display data from props */}
//                     {data.map((item, index) => (
//                         <MovieCard key={`data-${index}`} data={item} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

