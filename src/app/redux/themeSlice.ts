import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'light',
};

export const fetchTheme = createAsyncThunk('theme/fetchTheme', async () => {
  const response = await new Promise<{ mode: 'light' | 'dark' }>((resolve) =>
    setTimeout(() => resolve({ mode: 'light' }), 1000)
  );
  return response.mode;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTheme.fulfilled, (state, action) => {
      state.mode = action.payload;
    });
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
