import { useState } from 'react'

import { Header } from './components/Header'
import { Movie } from './components/Movie'


export function App(){

  return(
    <>
      <div className="h-screen w-screen bg-background">
        <Header/>
        <Movie/>
      </div>
    </>
  )
}