import { configureStore } from "@reduxjs/toolkit";
import testSlice from './test/testSlice'

export const store = configureStore({
    reducer: {
        auth: testSlice
    }
}); 
