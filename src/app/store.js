import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/Slices/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
});
