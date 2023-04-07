import { configureStore } from '@reduxjs/toolkit';

import playerSlice from './features/playerSlice';
import { shazamCoreApi } from './services/shazamcore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]:shazamCoreApi.reducer,
    player: playerSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
