import { useState } from 'react';
import Home from '../src/Pages/Home';
import Destination from './Pages/Destination';
import Crew from './Pages/Crew';
import Technology from './Pages/Technology';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/crew' element={<Crew />} />
        <Route exact path='/technology' element={<Technology />} />
        <Route exact path='/destination' element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
