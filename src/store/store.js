import { configureStore, createSlice } from '@reduxjs/toolkit';

// Creamos un "slice" para el usuario
const userSlice = createSlice({
  name: 'user',
  initialState: { nombre: 'Estudiante' },
  reducers: {
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
  },
});

export const { setNombre } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});