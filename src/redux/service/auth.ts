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
                method: 'put',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
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

export const { useLoginMutation, useReFreshTokenMutation, useRegisterMutation } = authApi;

