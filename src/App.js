import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from './diseases/pages/Create/Create';
import Feed from './diseases/pages/Feed/Feed';
import Header from './shared/components/Header/Header';
import Symptoms from './diseases/pages/Symptoms/Symptoms';

function App() {
  return (
    <BrowserRouter>
      <Header showAddBtn={false} /> 
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/symptoms' element={<Symptoms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
