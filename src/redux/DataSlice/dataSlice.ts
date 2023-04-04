import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: DataState = {
  data: null,
  error: null,
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataRequest(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action: PayloadAction<string>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;
