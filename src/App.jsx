import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/searchResult" element={<SearchResult />} />
    </Routes>
  )
}

export default App