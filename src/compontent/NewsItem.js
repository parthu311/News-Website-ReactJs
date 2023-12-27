import React, { useState } from 'react'
import News from './News'
import NavBar from './NavBar'

export const NewsItem = () => {
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('in')
  return (
    <>
    <NavBar setCategory={setCategory} setCountry={setCountry}/>
    <div className="position-absolut">
        <h1 className="text-center my-3">Latest News</h1>
    </div>
    <News category={category} country={country}/>
    </>
  )
}
