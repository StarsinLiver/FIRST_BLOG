import React from 'react';
import './App.css';
import TopHeaders from './components/headers/TopHeaders';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footers/Footer';
import BoardList from './pages/board/BoardList';
import MainPage from './pages/main/MainPage';
import UserBoardList from './pages/userBoard/UserBoardList';
import Login from './pages/auth/sample/Login';
import Register from './pages/auth/sample/Register';
import ForgotPassword from './pages/auth/sample/ForgotPassword';
import NeighborBoardList from './pages/board/NeighborBoardList';
import AddBoard from './pages/userBoard/AddBoard';

function App() {
  return (
    <div className="App">
      <TopHeaders/>

    <Routes>
      {/* 메인 , 모두의 블로그 , 나의 블로그 */}
      <Route path='/' element={<MainPage/>}/>

      {/* Board */}
      <Route path='/boardList' element={<BoardList/>}/>
      <Route path='/neighborBoardList' element={<NeighborBoardList/>}/>

      {/* userBoard */}
      <Route path='/user/boardList' element={<UserBoardList/>}/>
      <Route path='/user/add-board' element={<AddBoard/>}/>

      {/* 로그인 페이지 */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
    
    {/* 푸터 부분 */}
    <Footer/>
    </div>
  );
}

export default App;
