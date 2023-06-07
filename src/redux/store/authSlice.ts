import { createSelector, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../service/auth";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { useMemo } from "react";



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null,
        logedIn: false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.logedIn = action.payload.logedIn;
        }
    },    
    extraReducers: (builder) => {
        //login
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {

            localStorage.setItem('refreshToken', action.payload.token.refreshToken);

            state.token = action.payload.token.accessToken;
            state.user = action.payload.user;
            state.logedIn = true;
        })
        builder.addMatcher(authApi.endpoints.login.matchRejected, (state) => {

            localStorage.removeItem('refreshToken');
            localStorage.removeItem('googleToken');
            
            state.token = null;
            state.user = null;
            state.logedIn = false;
        })

        //reFreshToken
        builder.addMatcher(authApi.endpoints.reFreshToken.matchFulfilled, (state, action) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
            state.logedIn = true;
        })
        builder.addMatcher(authApi.endpoints.reFreshToken.matchRejected, (state) => {

            localStorage.removeItem('refreshToken');
            localStorage.removeItem('googleToken');
            
            state.token = null;
            state.user = null;
            state.logedIn = false;
        })

        //register
        builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {

            localStorage.setItem('refreshToken', action.payload.token.refreshToken);

            state.token = action.payload.token.accessToken;
            state.user = action.payload.user;
            state.logedIn = action.payload.success;
        })
        builder.addMatcher(authApi.endpoints.register.matchRejected, (state) => {
                
            localStorage.removeItem('refreshToken');
            
            state.token = null;
            state.user = null;
            state.logedIn = false;
        })

        //updateProfile
        builder.addMatcher(authApi.endpoints.updateProfile.matchFulfilled, (state, action) => {
                    
            state.user = action.payload.user;
        })
            
    }
})

export const { setAuth } = authSlice.actions;

export const useAuth = () => useSelector((state: RootState) => state.auth)
