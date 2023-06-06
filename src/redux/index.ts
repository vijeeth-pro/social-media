import { configureStore } from "@reduxjs/toolkit";
import { api } from "./service/api";
import { authSlice } from "./store/authSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch