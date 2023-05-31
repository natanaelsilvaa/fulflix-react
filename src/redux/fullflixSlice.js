import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movie: {},
}

export const fullflixSlice = createSlice({
    name: "fullflix" ,
    initialState, 
    reducers: {
        getMovieInfo: (state, action ) => {
            state.movie = action.payload
        }


    }
})

export const { getMovieInfo } = fullflixSlice.actions;

export default fullflixSlice.reducer;