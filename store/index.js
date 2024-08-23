import { configureStore } from "@reduxjs/toolkit";
import styleReducer from './styleSlice';


export const store = configureStore({
    reducer : {
        style : styleReducer
    }
});
