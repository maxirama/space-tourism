import { useState } from 'react';
import Home from '../src/Pages/Home';
import Destination from './Pages/Destination';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Destination />
    </>
  );
}

export default App;
