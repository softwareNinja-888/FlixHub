// AuthContext.jsx
import React, { createContext, useContext, useState,useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export function AuthProvider({ children }) {


    async function fetchApi(url, setData, setLoading) {
        try {
          setLoading(true);
          const response = await fetch(url);
          const result = await response.json();
          setData(result.genres || result.results);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
    }

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [trending, setTrending] = useState([]);
    const [genres, setGenres] = useState([]);

    const [moviesLoading, setMoviesLoading] = useState(false);
    const [seriesLoading, setSeriesLoading] = useState(false);
    const [trendingLoading, setTrendingLoading] = useState(false);
    const [genresLoading, setGenresLoading] = useState(false);

    useEffect(() => {
      const moviesUrl =
        'https://api.themoviedb.org/3/movie/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1';
      const seriesUrl =
        'https://api.themoviedb.org/3/tv/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1';
      const trendingUrl =
        'https://api.themoviedb.org/3/trending/all/week?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1';

      const genresUrl = 'https://api.themoviedb.org/3/genre/tv/list?api_key=310885eab251bf7cfb891d8b44779432&language=en-US'


      fetchApi(genresUrl, setGenres,setGenresLoading);
      fetchApi(moviesUrl, setMovies, setMoviesLoading);
      fetchApi(seriesUrl, setSeries, setSeriesLoading);
      fetchApi(trendingUrl, setTrending, setTrendingLoading);
    }, []);


    const combinedData = [...movies,...series,...trending];
    return (
      <AuthContext.Provider value={{ movies,series,trending,genres,moviesLoading,seriesLoading,trendingLoading,genresLoading,combinedData }}>
        {children}
      </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext)
}