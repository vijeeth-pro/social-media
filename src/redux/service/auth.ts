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
        reFreshToken: builder.mutation({
            query: () => ({
                url: 'auth/reFreshToken',
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.key(0)} ${localStorage.getItem('refreshToken') || localStorage.getItem('googleToken')}`
                }
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
        })
    }),
})

// api.enhanceEndpoints({
//     addTagTypes: ['Auth'],
//     endpoints: {
//         login: {
//             invalidatesTags: ['Auth'],
//         },
//     }
// })

export const { useLoginMutation, useReFreshTokenMutation, useRegisterMutation, useUpdateProfileMutation } = authApi;

