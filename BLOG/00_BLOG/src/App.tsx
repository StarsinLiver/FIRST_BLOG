import React from 'react';
import './App.css';
import TopHeaders from './components/headers/TopHeaders';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footers/Footer';
import BoardList from './pages/board/BoardList';
import MainPage from './pages/main/MainPage';
import UserBoardList from './pages/userBoard/UserBoardList';

function App() {
  return (
    <div className="App">
      <TopHeaders/>

    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/board' element={<BoardList/>}/>
      <Route path='/user/board' element={<UserBoardList/>}/>
    </Routes>

    <Footer/>
    </div>
  );
}

export default App;
