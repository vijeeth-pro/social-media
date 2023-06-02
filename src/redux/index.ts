import { configureStore } from "@reduxjs/toolkit";
import { api } from "./service/api";
import { authSlice } from "./store/authSlice";
import React from "react";

export const store:any = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch