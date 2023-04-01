import { React , useEffect} from 'react'
import { useSelector } from 'react-redux'


function MovieListing() {

  const movies = useSelector(( state) => state.movies)
  console.log(`MOVIES ARE: ${movies}`);

  useEffect(() => {
    // console.log("MOVIE LISTING IS WORKING...", movies);
  
   
  }, [])
  
  return (
    <div className="movie-list">
      
    </div>
  )
}

export default MovieListing