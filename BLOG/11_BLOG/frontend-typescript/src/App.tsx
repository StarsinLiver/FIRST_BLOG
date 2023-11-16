import React from 'react';
import './App.css';
import './assets/css/style.css'
import TopHeaders from './components/headers/TopHeaders';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footers/Footer';
import BoardList from './pages/board/BoardList';
import MainPage from './pages/main/MainPage';
import UserBoardList from './pages/userBoard/UserBoardList';
import Login from './pages/auth/sample/Login';
import Register from './pages/auth/sample/Register';
import ForgotPassword from './pages/auth/sample/ForgotPassword';
import AddBoard from './pages/userBoard/AddBoard';
import Board from './pages/board/Board';
import UpdateBoard from './pages/userBoard/UpdateBoard';
import AboutMe from './pages/aboutMe/AboutMe';
import UpdateUser from './pages/userBoard/UpdateUser';
import QnaList from './pages/qna/QnaList';
import AddQna from './pages/qna/AddQna';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <TopHeaders/>

    <Routes>
      {/* 메인 , 모두의 블로그 , 나의 블로그 */}
      <Route path='/' element={<MainPage/>}/>

      {/* Board */}
      <Route path='/board' element={<BoardList/>}/>
      <Route path='/board/:bid' element={<Board/>}/>

      {/* QNA */}
      <Route path='/qna' element={<QnaList/>}/>
      <Route path='/add-qna' element={<AddQna/>}/>

      {/* userBoard */}
      <Route path='/user/board' element={<UserBoardList/>}/>
      <Route path='/user/update-board/:bid' element={<UpdateBoard/>}/>
      <Route path='/user/add-board' element={<AddBoard/>}/>
      <Route path='/user/:userId' element={<UpdateUser/>}/>

      {/* 로그인 페이지 */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>

      {/* aboutMe : 나에 대하여 */}
      <Route path='/about-me' element={<AboutMe/>}/>



      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    
    {/* 푸터 부분 */}
    <Footer/>
    </div>
  );
}

export default App;
