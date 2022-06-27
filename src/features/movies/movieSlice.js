import { createSlice } from "@reduxjs/toolkit";
const movieSlice= createSlice({
    name:"movies",
    initialState:[],
    reducers:{
        addMovies:(state, {payload})=>{
             return state=payload;
        }
    },

})
export const {addMovies}=movieSlice.actions;
// export const getAllMovies=(state)=>state.mov     ies.movies;
export default movieSlice.reducer;