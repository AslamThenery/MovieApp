import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {URLS} from "../../Common/movieApi"
import { API_KEY } from "../../Common/api/movieApiKey";
import axios from "axios";


 export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsynMovies" , async() => {
           let response = await axios.get(`${URLS.POPULAR}?api_key=${API_KEY}`)
        // let response;
            console.log("Async movies working....", response.data);
            console.log( response.data);
           return  response.data
})



const initialState = {
    movies:[],
}

const movieSlice = createSlice ({
   
    name:"movies",
    initialState,
    reducers:{
        addMovies : (state, action) => {
            
         state.movies.push(action.payload) ;
            console.log("ACTION IS:",action.payload);

        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : ()=> {
                 console.log("Pending...");
        },
        [fetchAsyncMovies.fulfilled] : ( state , action )=> {
            
            console.log("Fetch successfully...");
            console.log(action.payload);
            return {...state, movies: action.payload}
        },
        [fetchAsyncMovies.rejected] : ()=> {
            console.log("Rejected...");

        },
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer;