import { React,useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useDispatch } from 'react-redux';
import {   addLatestMovies, addPopularMovies, addTopRatedMovies, addTrendingMovies, addActionMovies  } from '../../Features/Movies/movieSlice';
import MovieCard from '../../Components/MovieCard/MovieCard';
import axios from 'axios';
import { URLS } from '../../Common/movieApi';
import { API_KEY } from '../../Common/api/movieApiKey';
import MovieBanner from '../../Components/MovieBanner/MovieBanner';
function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    
fetchPopularMovies();
fetchTrendingMovies();
fetchLatestMovies();
fetchTopRatedMovies();
fetchActionMovies();

    
  }, [])
  
  const fetchPopularMovies = ( async() => {
   let response = await axios.get(`${URLS.POPULAR}?api_key=${API_KEY}`)
    //  console.log(" Fetch Popular movies working....", response.data);
    //  console.log( response.data);
  dispatch(addPopularMovies(response.data))
})
  const fetchTrendingMovies = ( async() => {
   let response = await axios.get(`${URLS.TRENDING}?api_key=${API_KEY}`)
    //  console.log(" Trending moveis....", response.data);
    //  console.log( response.data);
  dispatch(addTrendingMovies(response.data))
})
  const fetchLatestMovies = ( async() => {
   let response = await axios.get(`${URLS.LATEST}?api_key=${API_KEY}`)
    //  console.log(" Latest movies working....", response.data);
    //  console.log( response.data);
  dispatch(addLatestMovies(response.data))
})
  const fetchTopRatedMovies = ( async() => {
   let response = await axios.get(`${URLS.TOP_RATED}?api_key=${API_KEY}`)
    //  console.log(" Toprated movies working....", response.data);
    //  console.log( response.data);
  dispatch(addTopRatedMovies(response.data))
})
  const fetchActionMovies = ( async() => {
   let response = await axios.get(`${URLS.BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`)
     console.log(" Action movies working....", response.data);
     console.log( response.data);
  dispatch(addActionMovies(response.data))
})
  return (
    <div>
        <Header />
        <MovieBanner  />
        {/* <MovieCard title="Top Rated" /> */}
        <MovieCard title="Popular" />
        <MovieCard title="Trending" />
       
       
        <Footer />
        
    </div>
  )
}

export default Home


  // /genre/movie/list
    //  let response =  await  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    
    //  console.log("movies are", response );
    //  await dispatch(addMovies("response"))