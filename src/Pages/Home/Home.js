import { React,useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies } from '../../Features/Movies/movieSlice';
import MovieCard from '../../Components/MovieCard/MovieCard';
function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(fetchAsyncMovies())  
   
  }, [])
  

  return (
    <div>
        <Header />
        <MovieCard title="action" />
       
        <Footer />
        
    </div>
  )
}

export default Home


  // /genre/movie/list
    //  let response =  await  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    
    //  console.log("movies are", response );
    //  await dispatch(addMovies("response"))