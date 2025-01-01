import arrow from '/arrow.webp'

export function Movie(){
   

    // async function fetchData() {
    //     const dataf =[]
    //     fetch('https://api.themoviedb.org/3/movie/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data = [data.results.slice(0, 10)]  // Only first 10 movies ]
    //     console.log(data.results)
    //   }) // List of popular movies
    //   .catch((error) => console.error('Error:', error));
    
    //   console.log(data)
    // }
    return (
        <>
            <div className="mt-14">
                <div className="flex items-center gap-2 px-3">
                    <h1 className="text-xl text-white font-poppins">Movies</h1>
                    <img src={arrow} alt="arrow" className="w-3 h-3" />
                </div>
            </div>
            
        </>
    )
}