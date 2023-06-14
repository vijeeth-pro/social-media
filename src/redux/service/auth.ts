import { api } from "./api";


export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        reFreshToken: builder.query({
            query: () => ({
                url: 'auth/reFreshToken',
                headers: {
                    authorization: `bearer ${localStorage.key(0)} ${localStorage.getItem('googleToken')|| localStorage.getItem('refreshToken')}`,
                },
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        updateProfile: builder.mutation({
            query: (credentials) => ({
                url: 'auth/updateProfile',
                method: 'PUT',
                body: credentials,
            }), 
        }),
        uploadVideo: builder.mutation({
            query: (payload) => ({
                url: 'auth/uploadVideo',
                method: 'POST',
                body: payload,
            }),
        }),   
        uploadPostSeed: builder.mutation({
            query: (payload) => ({
                url: 'auth/uploadPostSeed',
                method: 'POST',
                body: payload,
            }),
            // invalidatesTags: ['Auth'],
        }),
    }),
})

export const { useLoginMutation, useReFreshTokenQuery, useRegisterMutation, useUpdateProfileMutation, useUploadVideoMutation, useUploadPostSeedMutation } = authApi;

