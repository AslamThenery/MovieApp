import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    popularMovies:[],
    trendingMovies:[],
    topRatedMovies:[],
     latestMovies:[],
     upcomingMovies:[],
     actionMovies:[]
}

const movieSlice = createSlice ({
   
    name:"movies",
    initialState,
    reducers:{
      
        addPopularMovies: (state, action) => {
            
            // console.log("Popular is :", action.payload);
            // console.log("State is :", state);

            state.popularMovies = action.payload;
       
        },
        addTrendingMovies: (state, action) => {
            
            // console.log("Trending is :", action.payload);
            // console.log("State is :", state);

            state.trendingMovies = action.payload;
       
        },
        addTopRatedMovies: (state, action) => {
            
            console.log("topRated REDUCER is :", action.payload);
            // console.log("State is :", state);

            state.topRatedMovies = action.payload;
       
        },
        addLatestMovies: (state, action) => {
            
            // console.log("Latest is :", action.payload);
            // console.log("State is :", state);

            state.latestMovies = action.payload;
       
        },
        addActionMovies: (state, action) => {
            
            console.log("Actoin movies are adding.... :", action.payload);
            // console.log("State is :", state);

            state.actionMovies = action.payload;
       
        }
      
    }
})

export const { addPopularMovies, addLatestMovies, addTrendingMovies, addTopRatedMovies, addActionMovies } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;




// extraReducers: {
//     [fetchAsyncMovies.pending] : ()=> {
//              console.log("Pending...");
//     },
//     [fetchAsyncMovies.fulfilled] : ( state , action )=> {
        
//         console.log("Fetch successfully...");
//         console.log(action.payload);
//         return {...state, movies: action.payload}
//     },
//     [fetchAsyncMovies.rejected] : ()=> {
//         console.log("Rejected...");

//     },
// }