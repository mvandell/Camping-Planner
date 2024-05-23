import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "/";

const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),

    tagTypes: ["Me", "Trips", "Budgets", "Meals", "Food", "Clothing", "Campgrounds", "Activities", "Equipment", "Users"],
    //me, trips, budgets, meals, food, clothing, campgrounds, activities, equipment, users

    endpoints: (builder) => ({
        //<---------------------------AUTHORIZATION--------------------------->
        //LOGIN ACCOUNT 
        login: builder.mutation({
            query: (user) => ({
                url: `/auth/login`,
                method: 'POST',
                body: user,
            }),
            providesTags: ["Me"]
        }),
        //LOGOUT ACCOUNT
        logout: builder.mutation({
            queryFn: () => ({
                data: {}
            }),
            invalidatesTags: ["Me"]
        }),
    })

})