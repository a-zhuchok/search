import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
}

const SearchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    addSearchText: (state, action) => {
      state.searchText = action.payload
    },
  },
});

export const { addSearchText } = SearchTextSlice.actions;
export default SearchTextSlice.reducer;