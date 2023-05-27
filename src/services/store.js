import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";
//store is a global state,but some time we dont need the whole state 
//so we have to reduce it to wj=hat we need,to reduce we use article api form article js
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})