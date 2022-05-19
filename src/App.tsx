import React from 'react';
import './App.css';
import NavBar from './Navbar';
import TodosPage from './Pages/TodosPages';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Globus from './Pages/Globus';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = ( ) =>  {
  

  return (
    
    <BrowserRouter>
      <NavBar />
      
      <div  className='container'>
      
    <Routes>
      <Route  path='/'   element={<Home />} />
      <Route  path='/work'   element={<Work />} />
      <Route path='/TodosPage' element={<TodosPage />} />
      <Route path='/Globus' element={<Globus />} />

    </Routes>
      </div>
      </BrowserRouter>
    
  )
}

export default App;
