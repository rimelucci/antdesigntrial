import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Row, Typography } from 'antd';
import { Feed, TestPaths } from './Feed';
import { NormalLoginContainer } from './Login';
import './App.css';


const App = () => (
  <div className="App">
    <Routes>
      <Route path='/' element={<NormalLoginContainer/>} />
      <Route path='/test-path' element={<TestPaths/>} />
      <Route exact path='/feed' element={<Feed/>} />
    </Routes>
  </div>
);

export default App;