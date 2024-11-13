import { configureStore } from '@reduxjs/toolkit';
import VideosSlice from './redux/VideosSlice';
import SearchTextSlice from './redux/SearchTextSlice';

const Store = configureStore({
  reducer: {
    searchText: SearchTextSlice,
    videos: VideosSlice,
  }})

export default Store;