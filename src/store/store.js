import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { nombre: 'Martina' }, // Poné tu nombre acá
  reducers: {},
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});