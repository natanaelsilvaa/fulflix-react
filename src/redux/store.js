import { configureStore,   } from "@reduxjs/toolkit";
import fullflixSlice from "./fullflixSlice"
;

export const store = configureStore({
    reducer: {
        fullflix: fullflixSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })

})