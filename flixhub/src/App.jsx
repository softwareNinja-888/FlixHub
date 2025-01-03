import { useEffect, useState } from 'react';

import { useAuth } from './components/AuthContext';

import { Header } from './components/Header'
import { Section } from './components/Section'



export function App() {

  const {movies,series,trending,moviesLoading,seriesLoading,trendingLoading,combinedData} = useAuth()

  return (
    <div className="h-full w-screen bg-background">
      <Header />
      <Section name="Movies" data={movies} loading={moviesLoading} />
      <Section name="Series" data={series} loading={seriesLoading} />
      <Section name="Trending" data={trending} loading={trendingLoading} />
    </div>
  );
}

