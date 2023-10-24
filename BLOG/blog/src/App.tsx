import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopHeaders from './components/headers/TopHeaders';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Footer from './components/footers/Footer';
import BoardList from './pages/board/BoardList';

function App() {
  return (
    <div className="App">
      <TopHeaders/>

    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/board' element={<BoardList/>}/>
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
