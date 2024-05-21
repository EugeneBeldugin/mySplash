import { configureStore } from '@reduxjs/toolkit';

import reducer from './features/slice.js';
import { footballApi } from './services/api.js';

export const store = configureStore({
    reducer: {
        [footballApi.reducerPath]: footballApi.reducer,
        item: reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(footballApi.middleware),
});