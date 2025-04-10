import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import List from './Pages/List';
import Orders from './Pages/Orders';

function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <hr />
      <div className="flex w-full">
        <Sidebar />
        <div className='w-[70%] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={ <Add /> } />
            <Route path='/list' element={ <List /> } />
            <Route path='/order' element={ <Orders /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
