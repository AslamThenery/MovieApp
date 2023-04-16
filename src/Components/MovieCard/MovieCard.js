import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import { useSelector } from 'react-redux';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MovieCard.css"

function MovieCard({title}) {

  const [movies, setMovies] = useState([])

  var popularMovies = useSelector((state) => state.movies.popularMovies.results)
  var trendingMovies = useSelector((state) => state.movies.trendingMovies.results)
  var topRatedMovies = useSelector((state) => state.movies.topRatedMovies.results)

  console.log("POPULAR MOVIES", popularMovies);
  console.log("TRENDING MOVIES", trendingMovies);
  console.log("TOPRATED MOVIES ARE", topRatedMovies);

  

  

 
  
  // console.log(typeof (data));
  
  // console.log("movies AVAILABLE");
  
  // console.log(popularMovies?.length > 0 &&popularMovies[8].backdrop_path );
  // console.log(movies);
  // console.log(popularMovies?.length > 0 &&popularMovies[0].id );
  // console.log(movies?.length > 0 &&movies[0].title );
  

  return (
    
    <div className='movies-card'>
      
      <div className="sliders">
        <h1 className='card-title'>{title}</h1>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 6,
            slidesPerGroup: 3,
          },
        }}
        // scrollbar={true}
        navigation={true}
        pagination={false}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {           
            popularMovies&& title === "Popular" ?
            // popularMovies?
      
            popularMovies.map((obj, key)=>{
              return (
                <div className="post" >
              {obj.backdrop_path?
              <SwiperSlide className='slides' >

                <div className="card-data">

                   
                      <img src={ `http://image.tmdb.org/t/p/original/${obj.backdrop_path}` } alt="" />
              
                              
                
                    <h4 className='movie-title'>{obj.title? obj.title : obj.name }</h4>
                    <h5 className='movie-rating'> Rating:{obj.vote_average? obj.vote_average : obj.vote_average }</h5>

                    
                    
                  
                </div>
              </SwiperSlide> 
                  :""
            }
                  
                </div>
              )
            })

            :""
}
        {           
            trendingMovies&& title ==="Trending" ?
             
      
            trendingMovies.map((obj, key)=>{
              return (
                <div className="post" >
              <SwiperSlide className='slides' >

              <div className="card-data">

                   
                    <img src={ `http://image.tmdb.org/t/p/original/${obj.backdrop_path}` } alt="" />

        

                    <h5 className='movie-title'>{obj.title? obj.title : obj.name }</h5>
                    <p className='movie-rating'> Rating:{obj.vote_average? obj.vote_average : obj.vote_average }</p>

</div>
              </SwiperSlide>
                </div>
              )
            })

            :""
}
         
        </Swiper>
        </div>
      </div>
      
  )


}

export default MovieCard

    
   
     
    //  </div>
     


   {/* <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg)`}} >
          
        </div>
        <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg)`}} >
        <img src='http://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg'  alt="" />
          <h2>Working.........</h2>
        </div>
        <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg)`}} >
          <img src='http://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg'  alt="" />
          <h2>Working.........</h2>
        </div>
        <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg)`}} >
        <h2>Working.........</h2>
      </div> */}
        
        {/* <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/${obj.backdrop_path})`}} >
        </div>
        <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/${obj.backdrop_path})`}} >
        </div>
        <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/${obj.backdrop_path})`}} >
      </div> */}
          
          
      {/* {
        data?
        data.map((obj, index) => {
          
          return(
            
            <div className="post">
            <img src={`url(http://image.tmdb.org/t/p/w500/${obj.backdrop_path})`} alt="" />
            </div>
            )
            
          })
          :""
        } */}

          
         
    
              {/* //  <div className="post" style={{'background-image':`url(http://image.tmdb.org/t/p/w500/${obj.backdrop_path})`}} > */}
               

          
 