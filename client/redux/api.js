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
        getUserFood: builder.query({
            query: (user) => ({
                url: `/api/food/food/${user}`,
                method: "GET",
            }),
            providesTags: ["Food"]
        }),
        //GET CLOTHING BY USER
        getUserClothing: builder.query({
            query: (user) => ({
                url: `/api/clothing/${user}`,
                method: "GET",
            }),
            providesTags: ["Clothing"]
        }),
        //<---------------------------GUEST--------------------------->
        //GET ALL EQUIPMENT
        getAllEquipment: builder.query({
            query: () => ({
                url: "/auth/equipment",
                method: "GET",
            }),
            providesTags: ["Equipment"]
        }),
        //GET ALL CAMPGROUNDS
        getAllCampgrounds: builder.query({
            query: () => ({
                url: "/auth/campground",
                method: "GET",
            }),
            providesTags: ["Campgrounds"]
        }),
        //GET SINGLE CAMPGROUND
        getSingleCampground: builder.query({
            query: (id) => ({
                url: `/auth/campground/${id}`,
                method: "GET",
            }),
            providesTags: ["Campgrounds"]
        }),
        //<---------------------------GET BY TRIP--------------------------->
        //GET BUDGETS BY TRIP
        getTripBudgets: builder.query({
            query: (trip) => ({
                url: `/api/budget/${trip}`,
                method: "GET",
            }),
            providesTags: ["Budgets"]
        }),
        //GET MEALS BY TRIP
        getTripMeals: builder.query({
            query: (trip) => ({
                url: `/api/food/meal/trip/${trip}`,
                method: "GET",
            }),
            providesTags: ["Meals"]
        }),
        //<---------------------------GET ALL--------------------------->
        //GET ALL TRIPS
        getAllTrips: builder.query({
            query: () => ({
                url: "/api/trip",
                method: "GET",
            }),
            providesTags: ["Trips"]
        }),
        //GET ALL BUDGETS
        getAllBudgets: builder.query({
            query: () => ({
                url: "/api/budget",
                method: "GET",
            }),
            providesTags: ["Budgets"]
        }),
        //GET ALL MEALS
        getAllMeals: builder.query({
            query: () => ({
                url: "/api/food/meal",
                method: "GET",
            }),
            providesTags: ["Meals"]
        }),
        //GET ALL ACTIVITIES
        getAllActivities: builder.query({
            query: () => ({
                url: "/api/activity",
                method: "GET",
            }),
            providesTags: ["Activities"]
        }),
        //GET ACTIVITIES BY CAMPGROUND
        getCampgroundActivities: builder.query({
            query: (campground) => ({
                url: `/api/activity/${campground}`,
                method: "GET",
            }),
            providesTags: ["Activities"]
        }),
        //<---------------------------GET SINGLE--------------------------->
        //GET SINGLE TRIP
        getSingleTrip: builder.query({
            query: (id) => ({
                url: `/api/trip/${id}`,
                method: "GET",
            }),
            providesTags: ["Trips"]
        }),
        //GET SINGLE MEAL
        getSingleMeal: builder.query({
            query: (id) => ({
                url: `/api/food/meal/${id}`,
                method: "GET",
            }),
            providesTags: ["Meals"]
        }),
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