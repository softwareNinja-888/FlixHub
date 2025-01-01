import { useEffect, useState } from 'react';

import { Header } from './components/Header'
import { Section } from './components/Section'

async function fetchApi(url, setData, setLoading) {
  try {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setData(result.results);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
}

export function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [trending, setTrending] = useState([]);

  const [moviesLoading, setMoviesLoading] = useState(false);
  const [seriesLoading, setSeriesLoading] = useState(false);
  const [trendingLoading, setTrendingLoading] = useState(false);

  useEffect(() => {
    const moviesUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1';
    const seriesUrl =
      'https://api.themoviedb.org/3/tv/popular?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1';
    const trendingUrl =
      'https://api.themoviedb.org/3/trending/all/week?api_key=310885eab251bf7cfb891d8b44779432&language=en-US&page=1';

    fetchApi(moviesUrl, setMovies, setMoviesLoading);
    fetchApi(seriesUrl, setSeries, setSeriesLoading);
    fetchApi(trendingUrl, setTrending, setTrendingLoading);
  }, []);

  return (
    <div className="h-full w-screen bg-background">
      <Header />
      <Section name="Movies" data={movies} loading={moviesLoading} />
      <Section name="Series" data={series} loading={seriesLoading} />
      <Section name="Trending" data={trending} loading={trendingLoading} />
    </div>
  );
}

