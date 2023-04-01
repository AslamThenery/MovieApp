import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MovieCard.css"

function MovieCard({title}) {
  var data = useSelector((state) => state.movies.movies.results);

  var settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 5,
     
  };
  // const [movies, setMovies] = useState()
  
  // console.log(typeof (data));
  
  console.log("DATA AVAILABLE");
  
  console.log(data);
  console.log(data?.length > 0 &&data[0].backdrop_path );


  


  return (

    <div className='movies-card'>
      <div className="title">

        <h2>{title}</h2>
      </div>
      <div className="sliders">
        <Slider className='slider' {...settings}>
          {
            data?
            data.map((obj, key)=>{
              return (
                <div className="post" >

                  
                  <div className="image">
                      <img src={`http://image.tmdb.org/t/p/w500/${obj.backdrop_path}`} alt="" />
                  </div>
                  <div className="details">
                    <h4 className='title'>{obj.title}</h4>
                    
                  </div>
                </div>
              )
            })
            : <h1>error</h1>
          }
         
          
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
               

          
   
         
         
        </Slider>
    
        </div>
    
   
     
     </div>
     )

}    

export default MovieCard



 