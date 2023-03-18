import { React, useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import baseUrl from '../../Common/movieApi';
import  {API_KEY} from "../../Common/api/movieApiKey"
import axios from 'axios';
function Home() {

  useEffect(() => {
   console.log("use effect");
    const fetchMovies = () => {
       axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`).then((res)=>{
        console.log("response is: ", res.data);
       })
    }

    fetchMovies()
  
  }, [])
  
  return (
    <div>
      <div className="baner-img"></div>
        <Header />
        <Footer />
        
    </div>
  )
}

export default Home