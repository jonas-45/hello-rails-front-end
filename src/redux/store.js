import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetings/greetingsSlice';

const Store = configureStore({
  reducer: {
    greeting: greetingsSlice,
  },
});

export default Store;
