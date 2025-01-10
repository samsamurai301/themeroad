import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware,
  enhancers: [composeWithDevTools()],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
