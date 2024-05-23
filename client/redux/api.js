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
        //<---------------------------GET USER INFO--------------------------->
        //GET USER
        getUser: builder.query({
            query: () => ({
                url: `/auth/account`,
                method: 'GET',
            }),
            providesTags: ["Me"]
        }),
        //GET FOOD BY USER
        getFoodByUser: builder.query({
            query: (user) => ({
                url: `/api/food/food/${user}`,
                method: "GET",
            }),
            providesTags: ["Food"]
        }),
        //GET CLOTHING BY USER
        getClothingByUser: builder.query({
            query: (user) => ({
                url: `/api/clothing/${user}`,
                method: "GET",
            }),
            providesTags: ["Clothing"]
        }),
        //<---------------------------GUEST--------------------------->
        //GET ALL EQUIPMENT
        //GET ALL CAMPGROUNDS
        //GET SINGLE CAMPGROUND
        //<---------------------------GET ALL--------------------------->
        //GET ALL TRIPS
        //GET ALL BUDGETS - by trip?
        //GET ALL MEALS - by trip?
        //GET ALL ACTIVITIES?
        //<---------------------------GET SINGLE--------------------------->
        //GET SINGLE TRIP
        //GET SINGLE MEAL
        //<---------------------------POST--------------------------->
        //POST TRIP
        //POST BUDGET
        //POST MEAL
        //POST FOOD
        //POST CLOTHING
        //POST ACTIVITY
        //<---------------------------PATCH--------------------------->
        //PATCH USER
        //PATCH TRIP
        //PATCH BUDGET
        //PATCH MEAL
        //PATCH FOOD
        //PATCH CLOTHING
        //PATCH ACTIVITY
        //<---------------------------TOGGLES--------------------------->
        //TRIP CURRENT TOGGLE
        //FOOD COOLER TOGGLE
        //FOOD PURCHASE TOGGLE
        //CLOTHING PACK TOGGLE
        //EQUIPMENT PACK TOGGLE
        //EQUIPMENT NEED TOGGLE
        //<---------------------------DELETE--------------------------->
        //DELETE BUDGET
        //DELETE MEAL
        //DELETE FOOD
        //DELETE CLOTHING
        //DELETE ACTIVITY
        //<---------------------------ADMIN--------------------------->
        //GET ALL USERS
        //DELETE USER?
        //DELETE TRIP
        //POST CAMPGROUND
        //POST EQUIPMENT
        //PATCH CAMPGROUND
        //PATCH EQUIPMENT
        //DELETE CAMPGROUND
        //DELETE EQUIPMENT
    
    })

})