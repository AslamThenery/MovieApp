import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./MovieBanner.css"


function MovieBanner() {
   
    // var latest = useSelector((state)=> state.movies.latestMovies.results)
  var action = useSelector((state) => state.movies.actionMovies.results)

    console.log('ACTIoN MOVIES are:', action );
    console.log("PATH IS ", `http://image.tmdb.org/t/p/original/${action? action[ Math.floor(Math.random() * (20 - 1)) + 1].backdrop_path : ""}`);
  return (
    <div className="movie-banner">
 {/* <div className="banner" style={{backgroundImage:`url(http://image.tmdb.org/t/p/original/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg)`,backgroundPosition:'cover',backgroundRepeat: 'no-repeat',}} > */}
<div className="banner" style={{backgroundImage:`url(http://image.tmdb.org/t/p/original/${action? action[ Math.floor(Math.random() * (20 - 1)) + 1].backdrop_path : ""})`,backgroundPosition:'cover',backgroundRepeat: 'no-repeat',}} >
       
        </div>
    </div>
  )
}

export default MovieBanner